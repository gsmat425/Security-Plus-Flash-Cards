// server.js — Sec Deck backend
// Persists spaced-repetition review state per visitor (keyed by the X-Visitor-Id
// header injected by the proxy), since localStorage is unavailable in the sandboxed
// preview iframe. Falls back gracefully: the frontend keeps an in-memory copy
// and the backend simply persists it across sessions.
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json({ limit: '2mb' }));

const DATA_FILE = path.join(__dirname, 'sr-data.json');

function readStore() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (e) {
    return {};
  }
}

function writeStore(store) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(store));
  } catch (e) {
    /* best effort */
  }
}

function visitorId(req) {
  // The proxy injects X-Visitor-Id on every request. Fall back to a stable
  // header or a shared bucket if absent (local testing).
  const id = req.get('X-Visitor-Id') || req.get('x-visitor-id') || 'local';
  return String(id).slice(0, 128);
}

app.get('/api/sr', (req, res) => {
  const id = visitorId(req);
  const store = readStore();
  res.json({ state: store[id] || {} });
});

app.post('/api/sr', (req, res) => {
  const id = visitorId(req);
  const state = req.body && req.body.state ? req.body.state : req.body;
  const store = readStore();
  store[id] = state || {};
  writeStore(store);
  res.json({ ok: true });
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(8000, '0.0.0.0', () => console.log('sec-deck backend listening on 8000'));
