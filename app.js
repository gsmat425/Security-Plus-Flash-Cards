/* ============================================================
   Sec+ Deck — Security+ SY0-701
   Unified item bank + Browse / Quiz / Spaced-Repetition modes
   ============================================================ */

const DOMAINS = {
  1: { short: "Concepts" },
  2: { short: "Threats" },
  3: { short: "Architecture" },
  4: { short: "Operations" },
  5: { short: "Program Mgmt" },
};

// Unified bank: every item can be browsed (flip), quizzed (MC), and scheduled (SR).
// d = domain (1-5), q = prompt, a = full answer/explanation, opts = 4 short choices,
// correct = index of the correct option.
const ITEMS = [
  // ===== Domain 1 — General Security Concepts (12%) =====
  { d:1, q:"What does the CIA triad stand for?", a:"Confidentiality, Integrity, and Availability — the three foundational goals of information security.", opts:["Confidentiality, Integrity, Availability","Control, Identity, Auditing","Cryptography, Inspection, Access","Compliance, Investigation, Authorization"], correct:0 },
  { d:1, q:"What does non-repudiation provide?", a:"Assurance that a sender cannot deny having sent a message or performed an action. Provided by digital signatures and audit logs.", opts:["Only confidentiality","Proof of origin an action can't be denied","Encryption of data at rest","Faster network access"], correct:1 },
  { d:1, q:"What does AAA stand for in access control?", a:"Authentication (verify identity), Authorization (grant privileges), and Accounting (track usage).", opts:["Access, Audit, Administer","Authentication, Authorization, Accounting","Assess, Authorize, Approve","Audit, Assign, Allow"], correct:1 },
  { d:1, q:"Which best describes symmetric encryption?", a:"Uses one shared key for both encryption and decryption — fast, but key distribution is a challenge (e.g., AES).", opts:["Uses a public/private key pair","Uses one shared key","Doesn't use keys","Uses one-time pads only"], correct:1 },
  { d:1, q:"What is asymmetric encryption commonly used for?", a:"Key exchange, digital signatures, and encryption using a public/private key pair (e.g., RSA, ECC). Slower than symmetric.", opts:["Bulk disk encryption only","Key exchange & digital signatures","Hashing","Physical security"], correct:1 },
  { d:1, q:"What is the primary purpose of a hash?", a:"A one-way function producing a fixed-size digest to verify integrity. Examples: SHA-256, SHA-3.", opts:["Two-way encryption","Verify data integrity","Key exchange","Access control"], correct:1 },
  { d:1, q:"What is the purpose of a salt in password hashing?", a:"Random data added to input before hashing to defeat rainbow tables and ensure identical passwords produce different hashes.", opts:["Speed up hashing","Defeat rainbow tables","Encrypt data at rest","Validate certificates"], correct:1 },
  { d:1, q:"What does a digital signature provide?", a:"Authentication, integrity, and non-repudiation. Sender signs with their private key; recipients verify with the public key.", opts:["Only confidentiality","Authenticity, integrity, non-repudiation","Availability","Encryption at rest"], correct:1 },
  { d:1, q:"What is the core principle of zero trust?", a:"Never trust, always verify — every request is authenticated, authorized, and continuously validated, regardless of network location.", opts:["Trust the internal network","Never trust, always verify","Trust by default","Single perimeter defense"], correct:1 },
  { d:1, q:"Which is a category of security control by type?", a:"Managerial (policy/admin), Operational (people/process), and Technical (logical) are control types; functions include preventive, detective, corrective, etc.", opts:["Physical only","Managerial, Operational, Technical","Internal and External","Open and Closed"], correct:1 },
  { d:1, q:"In RBAC, access is granted based on what?", a:"Role-Based Access Control grants permissions based on the user's role/job function.", opts:["Security clearance labels","The user's role","Time of day","Geographic location"], correct:1 },
  { d:1, q:"The MAC access model enforces access using what?", a:"Mandatory Access Control uses security labels and subject clearance levels, strictly enforced by the system.", opts:["Owner discretion","Security labels & clearance","Job title","Random tokens"], correct:1 },
  { d:1, q:"What defines Discretionary Access Control (DAC)?", a:"The data owner decides who gets access and can share permissions (e.g., file ACLs).", opts:["System-enforced labels","Owner discretion","Role assignment","Time-based access"], correct:1 },
  { d:1, q:"In PKI, what does a Certificate Authority (CA) do?", a:"Issues and digitally signs certificates that bind a public key to an identity.", opts:["Revokes only","Issues & signs certificates","Stores user passwords","Filters traffic"], correct:1 },
  { d:1, q:"How does OCSP differ from a CRL?", a:"A CRL is a published list of revoked certificates; OCSP checks revocation status in real time per certificate.", opts:["OCSP is a list, CRL is real-time","OCSP checks revocation in real time","They are identical","CRL checks in real time"], correct:1 },
  { d:1, q:"What does steganography do?", a:"Hides data within another file/medium (image, audio) to conceal its existence — unlike encryption, which conceals content.", opts:["Encrypts data","Hides data within another file","Hashes passwords","Issues certificates"], correct:1 },
  { d:1, q:"AES is an example of which cipher type?", a:"A block cipher — encrypts fixed-size blocks of data (e.g., AES operates on 128-bit blocks).", opts:["Stream cipher","Block cipher","Hash function","Asymmetric algorithm"], correct:1 },
  { d:1, q:"What does a Trusted Platform Module (TPM) provide?", a:"A hardware chip for secure key storage, measured boot, and hardware-based cryptographic operations.", opts:["Email filtering","Hardware secure key storage","Web hosting","Network routing"], correct:1 },
  { d:1, q:"What is an HSM used for?", a:"A Hardware Security Module is a tamper-resistant device for secure key management and cryptographic operations.", opts:["Storing website files","Key management & crypto operations","Email routing","Patch management"], correct:1 },
  { d:1, q:"A security token is which type of authentication factor?", a:"Something you have (possession factor), vs. password = something you know, biometric = something you are.", opts:["Something you know","Something you have","Something you are","Somewhere you are"], correct:1 },

  // ===== Domain 2 — Threats, Vulnerabilities & Mitigations (22%) =====
  { d:2, q:"Spear phishing aimed at executives is called?", a:"Whaling — targeted phishing at high-ranking executives (the 'big fish').", opts:["Vishing","Whaling","Smishing","Tailgating"], correct:1 },
  { d:2, q:"Vishing attacks are delivered via?", a:"Voice calls — vishing is voice-based phishing.", opts:["SMS text","Voice/phone calls","Email","USB drives"], correct:1 },
  { d:2, q:"Smishing uses which channel?", a:"SMS text messages to deliver phishing links.", opts:["SMS","Voice calls","Email","Social media only"], correct:0 },
  { d:2, q:"Social engineering primarily exploits?", a:"Human psychology — manipulating people into divulging info or taking unsafe actions, rather than exploiting technology.", opts:["Software vulnerabilities","Human psychology","Hardware flaws","Network protocols"], correct:1 },
  { d:2, q:"The BEST mitigation against ransomware is?", a:"Offline/offsite backups, plus patching, email filtering, and least privilege. Paying the ransom is discouraged.", opts:["Paying the ransom","Regular offline backups","Disabling antivirus","Opening all attachments"], correct:1 },
  { d:2, q:"A supply chain attack typically targets?", a:"A less-protected vendor, software dependency, or hardware component to reach the ultimate target.", opts:["End users only","A vendor or software dependency","The firewall","The backup server"], correct:1 },
  { d:2, q:"What are Indicators of Compromise (IoCs)?", a:"Forensic artifacts signaling a breach — e.g., malicious IPs/domains, anomalous logins, known bad file hashes.", opts:["Future threat predictions","Forensic signs of a breach","Security policies","Vulnerability scores"], correct:1 },
  { d:2, q:"The 'T' in STRIDE stands for?", a:"Tampering — STRIDE = Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege.", opts:["Threat","Tampering","Trust","Testing"], correct:1 },
  { d:2, q:"A zero-day vulnerability is one where?", a:"The vendor is unaware and no patch exists yet, making it highly exploitable.", opts:["A patch already exists","No patch exists yet","It is low severity","It only affects old systems"], correct:1 },
  { d:2, q:"How does a worm differ from a virus?", a:"A worm self-replicates across networks without attaching to a host file; a virus attaches to files and needs user action.", opts:["A worm needs a host file","A worm self-replicates across networks","A worm is not malware","A worm cannot spread"], correct:1 },
  { d:2, q:"A Trojan horse is malware that?", a:"Disguises itself as legitimate software to trick users into installing it.", opts:["Self-replicates","Disguises as legitimate software","Encrypts data for ransom","Hides in images"], correct:1 },
  { d:2, q:"In a man-in-the-middle attack, the attacker?", a:"Intercepts and possibly alters communication between two parties who believe they're talking directly.", opts:["Only sends spam","Intercepts communication between parties","Physically steals devices","Patches systems"], correct:1 },
  { d:2, q:"A common DDoS mitigation is?", a:"Rate limiting, traffic scrubbing services, and CDNs that absorb and filter flood traffic.", opts:["Stronger passwords","Rate limiting & scrubbing services","Encrypting disks","Disabling logging"], correct:1 },
  { d:2, q:"A botnet is?", a:"A network of compromised machines (bots) controlled remotely, often for DDoS, spam, or crypto-mining.", opts:["A type of firewall","A network of compromised machines","A backup system","An encryption method"], correct:1 },
  { d:2, q:"Vertical privilege escalation means?", a:"Gaining higher-level permissions than authorized (e.g., normal user to admin).", opts:["Accessing another user's account","Gaining higher permissions","Scanning a network","A denial-of-service"], correct:1 },
  { d:2, q:"A watering hole attack targets?", a:"A website frequently visited by the target group, compromised to deliver malware to them.", opts:["Random users","A site the target group visits","The DNS root servers","Internal backups"], correct:1 },
  { d:2, q:"A logic bomb executes when?", a:"When a defined trigger condition occurs (a date, event, or state).", opts:["Immediately on install","A trigger condition occurs","Never","Only on reboot"], correct:1 },
  { d:2, q:"Credential stuffing uses?", a:"Stolen username/password pairs from one breach tried against other sites, exploiting password reuse.", opts:["Brute-force guessing","Stolen credential pairs reused","Social engineering","Malware encryption"], correct:1 },
  { d:2, q:"Tailgating is an attack where?", a:"Someone follows an authorized person through a secure door, often without their knowledge.", opts:["Scanning open ports","Following through a secure door","Sending phishing email","Planting malware"], correct:1 },
  { d:2, q:"An Advanced Persistent Threat (APT) is characterized by?", a:"A well-resourced, stealthy adversary maintaining long-term, often nation-state-backed access.", opts:["A quick opportunistic attack","Long-term stealthy access by a capable adversary","A type of malware only","A patch management tool"], correct:1 },

  // ===== Domain 3 — Security Architecture (18%) =====
  { d:3, q:"The principle of least privilege means?", a:"Granting users/processes only the access needed to perform their job — nothing more.", opts:["Everyone gets admin rights","Only the access needed to do the job","No access by default forever","Shared login accounts"], correct:1 },
  { d:3, q:"Defense in depth relies on?", a:"Multiple layered controls so that if one fails, others still protect the asset.", opts:["A single strong control","Multiple layered controls","One firewall","No redundancy"], correct:1 },
  { d:3, q:"A DMZ is used to host?", a:"Public-facing services (web, email) in a perimeter segment isolated from the trusted internal network.", opts:["Internal databases","Public-facing services","Admin accounts","Backup tapes"], correct:1 },
  { d:3, q:"How does an IPS differ from an IDS?", a:"An IDS passively detects and alerts; an IPS actively blocks detected attacks in line.", opts:["IPS only detects","IPS blocks, IDS detects","IDS blocks attacks","They are identical"], correct:1 },
  { d:3, q:"A firewall's primary function is?", a:"Filtering network traffic based on rules to control what can pass between zones.", opts:["Encrypting all data","Filtering traffic by rules","Issuing certificates","Storing passwords"], correct:1 },
  { d:3, q:"A WAF protects against?", a:"Web application attacks like SQL injection and XSS by inspecting HTTP traffic.", opts:["Network-level DDoS only","Web app attacks like SQLi/XSS","Physical intrusions","Disk encryption"], correct:1 },
  { d:3, q:"A VPN provides?", a:"An encrypted tunnel over a public network, giving confidentiality and integrity for remote access.", opts:["An open wireless network","An encrypted tunnel over public networks","Faster internet","A firewall replacement"], correct:1 },
  { d:3, q:"A reverse proxy sits in front of?", a:"Servers — handling inbound requests for load balancing, caching, TLS termination, and WAF.", opts:["Client devices","Servers","Endpoints","Routers only"], correct:1 },
  { d:3, q:"Network segmentation is used to?", a:"Divide a network into zones (e.g., VLANs) to limit lateral movement and contain breaches.", opts:["Combine all systems","Limit lateral movement & contain breaches","Speed up the internet","Disable encryption"], correct:1 },
  { d:3, q:"802.1X provides?", a:"Port-based network access control requiring authentication before granting switch/Wi-Fi access.", opts:["Faster Wi-Fi speeds","Network access control via authentication","Data encryption","IP routing"], correct:1 },
  { d:3, q:"An air-gapped system is?", a:"Physically isolated from any network or the internet.", opts:["A wireless network","Physically isolated from networks","A cloud deployment","A VPN connection"], correct:1 },
  { d:3, q:"TLS provides encryption?", a:"In transit — protecting data moving across networks. Disk/DB encryption protects data at rest.", opts:["At rest","In transit","In backups only","Never"], correct:1 },
  { d:3, q:"In the cloud shared responsibility model, the provider secures?", a:"The underlying infrastructure — physical, host, and network. The customer secures data, identities, and configs.", opts:["Customer data","The underlying infrastructure","IAM configuration","Application code"], correct:1 },
  { d:3, q:"Micro-segmentation provides?", a:"Granular, per-workload isolation enforcing least-privilege communication — common in zero-trust.", opts:["One large network zone","Granular per-workload isolation","Physical isolation","No access control"], correct:1 },
  { d:3, q:"A jump server (bastion host) is used to?", a:"Provide a single, hardened access point to administer systems in a different security zone.", opts:["Host public websites","Administer systems in another zone","Store backups","Filter email"], correct:1 },

  // ===== Domain 4 — Security Operations (28%) =====
  { d:4, q:"A SIEM's primary function is?", a:"Aggregate and correlate log/event data across the org for real-time analysis and alerting.", opts:["Encrypt hard drives","Aggregate & correlate logs and alert","Patch systems","Issue certificates"], correct:1 },
  { d:4, q:"What is the FIRST phase of incident response?", a:"Preparation — establishing policies, tools, and training before an incident occurs.", opts:["Recovery","Preparation","Eradication","Lessons learned"], correct:1 },
  { d:4, q:"The correct incident response order is?", a:"Preparation -> Detection & Analysis -> Containment -> Eradication -> Recovery -> Lessons learned.", opts:["Containment first, then prepare","Prepare, detect, contain, eradicate, recover, review","Recover, then detect","Eradicate, then detect"], correct:1 },
  { d:4, q:"Chain of custody documents?", a:"Who collected, handled, transferred, and stored evidence, preserving its admissibility.", opts:["Patch deployment","Evidence handling history","Backup schedules","User logins"], correct:1 },
  { d:4, q:"In forensics, which is collected FIRST?", a:"The most volatile data — CPU/registers and RAM — before it is lost.", opts:["Hard disk","RAM","Remote backups","Tape archives"], correct:1 },
  { d:4, q:"Threat hunting is?", a:"Proactively searching for threats that evaded automated detection, using hypotheses.", opts:["Reactive alert triage","Proactive searching for threats","Patch deployment","Compliance auditing"], correct:1 },
  { d:4, q:"PAM solutions secure?", a:"Privileged/admin accounts via credential vaulting, just-in-time access, and session recording.", opts:["Endpoint antivirus","Privileged/admin accounts","Backup storage","Email filtering"], correct:1 },
  { d:4, q:"MFA improves security by?", a:"Requiring multiple independent factors, so a stolen password alone is insufficient.", opts:["Reusing one password","Requiring multiple factors","Removing passwords","Logging less"], correct:1 },
  { d:4, q:"Single Sign-On (SSO) lets users?", a:"Authenticate once to access multiple applications without re-entering credentials.", opts:["Log in once for many apps","Use no credentials","Bypass all security","Store passwords in plaintext"], correct:1 },
  { d:4, q:"Federation extends trust?", a:"Across organizations or domains, letting users access partner resources with their home identity (e.g., SAML/OIDC).", opts:["Within one laptop","Across organizations/domains","Only on-premises","Without any identity"], correct:1 },
  { d:4, q:"An alert differs from an event because it?", a:"Is a notification generated when an event matches a rule indicating a potential issue.", opts:["Is any system occurrence","Signals a potential security issue","Is always malicious","Is identical to an event"], correct:1 },
  { d:4, q:"A false positive is when?", a:"Benign activity is flagged as malicious, causing alert fatigue.", opts:["A real attack is missed","Benign activity is flagged as malicious","An alert is correct","No alert is generated"], correct:1 },
  { d:4, q:"How does a penetration test differ from a vulnerability scan?", a:"A pen test actively exploits vulnerabilities to assess real exploitability; a scan identifies known weaknesses.", opts:["They are identical","Pen test actively exploits, scan identifies","Scan actively exploits","Neither finds issues"], correct:1 },
  { d:4, q:"CVSS is used to?", a:"Score vulnerability severity from 0-10 based on inherent exploitability and impact.", opts:["Measure uptime","Score vulnerability severity","Rate password strength","Count alerts"], correct:1 },
  { d:4, q:"EDR/XDR provides?", a:"Endpoint (and extended) detection, investigation, and automated response/remediation for advanced threats.", opts:["Network routing","Endpoint detection & response","Email storage","Backup compression"], correct:1 },
  { d:4, q:"Data Loss Prevention (DLP) is used to?", a:"Detect and prevent unauthorized exfiltration of sensitive data via endpoints, network, and email.", opts:["Encrypt disks","Prevent data exfiltration","Issue certificates","Filter spam"], correct:1 },
  { d:4, q:"Patch management is the process of?", a:"Systematically identifying, testing, and deploying software updates to remediate vulnerabilities.", opts:["Ignoring updates","Systematically deploying updates","Disabling antivirus","Deleting logs"], correct:1 },
  { d:4, q:"A differential backup copies?", a:"All data changed since the last full backup.", opts:["Everything every time","Changes since the last full backup","Changes since last backup","Only new files"], correct:1 },
  { d:4, q:"An incremental backup copies?", a:"Only data changed since the last backup of any type.", opts:["All data","Changes since the last backup","The full backup","Nothing"], correct:1 },
  { d:4, q:"SOAR is used to?", a:"Orchestrate tools and automate incident response workflows.", opts:["Manually triage tickets","Orchestrate & automate response","Filter email","Compress backups"], correct:1 },
  { d:4, q:"A honeypot is used to?", a:"Act as a decoy to attract attackers, gather intelligence, and divert them from real assets.", opts:["Serve production traffic","Act as a decoy for attackers","Filter network traffic","Store backups"], correct:1 },
  { d:4, q:"Containment in incident response aims to?", a:"Limit the incident's spread and prevent further damage.", opts:["Remove the threat entirely","Limit the spread","Restore from backup","Write the report"], correct:1 },
  { d:4, q:"Eradication means?", a:"Removing the threat and its artifacts from the environment after containment.", opts:["Limiting spread","Removing the threat","Restoring services","Gathering evidence"], correct:1 },
  { d:4, q:"A tabletop exercise is?", a:"A discussion-based simulation where teams walk through incident scenarios to test plans.", opts:["A live attack","A discussion-based scenario simulation","Patch deployment","Forensic imaging"], correct:1 },
  { d:4, q:"MTTR measures?", a:"Mean Time To Recover — the average time to restore service after an incident.", opts:["Time between failures","Time to recover","Data loss","Uptime percentage"], correct:1 },

  // ===== Domain 5 — Security Program Management & Oversight (20%) =====
  { d:5, q:"GRC stands for?", a:"Governance, Risk management, and Compliance — aligning security with business objectives.", opts:["Global Risk Center","Governance, Risk, Compliance","Group Recovery Control","Generic Risk Code"], correct:1 },
  { d:5, q:"Risk is commonly expressed as threat x vulnerability x ?", a:"Impact — so risk rises with stronger threats, more vulnerabilities, or greater impact.", opts:["Cost","Impact","Users","Time"], correct:1 },
  { d:5, q:"Qualitative risk assessment uses?", a:"Subjective categories like high/medium/low rather than numeric values.", opts:["Numeric values like ALE","High/Medium/Low categories","Exact dollar losses","Vulnerability scores"], correct:1 },
  { d:5, q:"ALE is calculated as?", a:"Annualized Loss Expectancy = SLE (single loss expectancy) x ARO (annual rate of occurrence).", opts:["SLE x ARO","RTO x RPO","MTTR x MTBF","CVSS x impact"], correct:1 },
  { d:5, q:"Transferring risk means?", a:"Shifting the risk to a third party, e.g., purchasing cybersecurity insurance.", opts:["Patching a system","Buying insurance","Accepting the loss","Shutting down the service"], correct:1 },
  { d:5, q:"Risk acceptance means?", a:"Acknowledging the risk and choosing to bear its potential impact without further mitigation.", opts:["Eliminating the risk","Bearing the risk as-is","Transferring it","Avoiding the activity"], correct:1 },
  { d:5, q:"The NIST CSF core functions include Identify, Protect, Detect, Respond, and?", a:"Recover (CSF 2.0 added Govern as a sixth function).", opts:["Report","Recover","Remediate","Restore"], correct:1 },
  { d:5, q:"ISO 27001 defines?", a:"An Information Security Management System (ISMS) for managing and improving security.", opts:["A payment standard","An ISMS","A network protocol","Password rules"], correct:1 },
  { d:5, q:"PCI-DSS protects?", a:"Cardholder data for organizations handling credit card payments.", opts:["Health records","Cardholder data","Password policies","Network routing"], correct:1 },
  { d:5, q:"HIPAA protects?", a:"The privacy and security of individuals' protected health information (PHI).", opts:["Credit card data","Protected health information","Employee passwords","Network logs"], correct:1 },
  { d:5, q:"GDPR governs?", a:"The processing of personal data of EU residents, with strict consent and breach-notification rules.", opts:["US healthcare data","EU personal data","Payment cards","Government secrets"], correct:1 },
  { d:5, q:"A procedure is?", a:"Step-by-step instructions for executing a task, supporting the higher-level policy.", opts:["A high-level mandate","Step-by-step instructions","Optional advice","A risk assessment"], correct:1 },
  { d:5, q:"How does a standard differ from a policy?", a:"A standard defines required rules/baselines; a policy is the high-level mandate.", opts:["Standard is optional, policy is mandatory","Standard = required rules; policy = high-level mandate","They are identical","Policy is technical, standard is not"], correct:1 },
  { d:5, q:"Separation of duties reduces risk by?", a:"Splitting a sensitive task across multiple people so no single person can cause harm.", opts:["One person doing everything","Splitting tasks across people","Sharing passwords","Removing all controls"], correct:1 },
  { d:5, q:"Mandatory vacation helps detect?", a:"Fraud or malicious activity that surfaces when the employee is away from their systems.", opts:["Vulnerabilities","Fraud during absence","Patch needs","Network outages"], correct:1 },
  { d:5, q:"Third-party risk management focuses on?", a:"Assessing and monitoring the security posture of suppliers and partners in the supply chain.", opts:["Internal employees only","Suppliers and partners","Hardware inventory","Password resets"], correct:1 },
  { d:5, q:"A Business Impact Analysis (BIA) identifies?", a:"Critical business functions and the impact of their disruption, feeding BC/DR planning.", opts:["Patch schedules","Critical functions & disruption impact","Password policies","IP addresses"], correct:1 },
  { d:5, q:"RTO is the?", a:"Recovery Time Objective — the maximum acceptable downtime before serious impact.", opts:["Maximum data loss","Maximum acceptable downtime","A backup type","A vulnerability score"], correct:1 },
  { d:5, q:"RPO is the?", a:"Recovery Point Objective — the maximum acceptable data loss, measured in time.", opts:["Maximum downtime","Maximum acceptable data loss","Recovery cost","Audit interval"], correct:1 },
  { d:5, q:"Due diligence refers to?", a:"Investigation and verification performed before taking an action or entering an agreement.", opts:["Doing the right thing afterward","Investigation beforehand","Paying insurance","Deploying patches"], correct:1 },
  { d:5, q:"Due care means?", a:"Taking the prudent, expected actions a reasonable professional would to prevent harm.", opts:["Investigation beforehand","Doing the prudent, right thing","Transferring risk","Auditing logs"], correct:1 },
  { d:5, q:"Security awareness training aims to?", a:"Reduce human-factor risk by educating staff on threats and safe practices.", opts:["Replace firewalls","Reduce human-factor risk","Issue certificates","Compress backups"], correct:1 },
];

// ===== Storage (backend-persisted with in-memory fallback) =====
// The preview iframe blocks browser storage, so SR state is persisted by a small
// backend keyed per visitor (X-Visitor-Id). If the backend is unreachable the
// app keeps working from in-memory state for the session.
const SR_API = 'port/8000'.startsWith('__') ? 'http://localhost:8000' : 'port/8000';
let srState = {};
let srBackend = false; // true once a backend round-trip succeeds

async function loadSR() {
  try {
    const res = await fetch(`${SR_API}/api/sr`, { cache: 'no-store' });
    if (!res.ok) throw new Error('http ' + res.status);
    const data = await res.json();
    if (data && data.state && typeof data.state === 'object') srState = data.state;
    srBackend = true;
  } catch (e) {
    srBackend = false; // in-memory only
  }
}
function saveSR() {
  if (!srBackend) return; // nothing to persist to; in-memory copy already updated
  try {
    fetch(`${SR_API}/api/sr`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state: srState }),
      keepalive: true,
    }).catch(() => {});
  } catch (e) { /* best effort */ }
}

// ===== Spaced repetition (Leitner) =====
// Boxes 1-5. Intervals: B1 now (1m), B2 10m, B3 1h, B4 1d, B5 3d.
const INTERVALS = [0, 1*60*1000, 10*60*1000, 60*60*1000, 24*60*60*1000, 3*24*60*60*1000];

function scheduleItem(idx, correct) {
  const cur = srState[idx] || { box: 0 };
  let box = cur.box;
  if (correct) box = Math.min(5, Math.max(2, box + 1)); // unseen(0)->2, 1->2, n->n+1
  else box = 1;
  srState[idx] = { box, next: Date.now() + INTERVALS[box], last: correct ? 'correct' : 'wrong' };
  saveSR();
}
function isDue(idx) {
  const s = srState[idx];
  if (!s) return true; // unseen = due
  return Date.now() >= (s.next || 0);
}
function srStatsFor(domain) {
  let due = 0, unseen = 0, learned = 0, total = 0;
  ITEMS.forEach((_, i) => {
    if (domain !== 'all' && String(ITEMS[i].d) !== String(domain)) return;
    total++;
    const s = srState[i];
    if (!s) { unseen++; due++; }
    else {
      if (isDue(i)) due++;
      if (s.box >= 4) learned++;
    }
  });
  return { due, unseen, learned, total };
}

// ===== App state =====
let mode = 'browse';
let activeDomain = 'all';
let known = new Set();
let seen = new Set();
const $ = (id) => document.getElementById(id);

// Filtered index lists per context
function filteredIdx(domain) {
  return ITEMS.map((_, i) => i).filter(i => domain === 'all' || String(ITEMS[i].d) === String(domain));
}

// ----- BROWSE (flip cards) -----
let browseOrder = [];
let browseCursor = 0;
function rebuildBrowse() {
  browseOrder = filteredIdx(activeDomain);
  if (browseCursor >= browseOrder.length) browseCursor = 0;
}
function browseRender() {
  const card = browseOrder[browseCursor];
  const el = $('card');
  el.classList.remove('is-flipped');
  if (!card && card !== 0) {
    $('card-question').textContent = 'No cards in this domain.';
    return;
  }
  const item = ITEMS[card];
  $('card-domain').textContent = `D${item.d} · ${DOMAINS[item.d].short}`;
  $('card-domain-back').textContent = `D${item.d} · ${DOMAINS[item.d].short}`;
  $('card-question').textContent = item.q;
  $('card-answer').textContent = item.a;
  $('card-position').textContent = browseCursor + 1;
  $('card-total').textContent = browseOrder.length;
  const isKnown = known.has(browseOrder[browseCursor]);
  $('known-btn').classList.toggle('is-known', isKnown);
  $('known-label').textContent = isKnown ? 'Known' : 'Mark known';
  browseRenderProgress();
}
function browseRenderProgress() {
  const total = browseOrder.length;
  const knownN = browseOrder.filter(i => known.has(i)).length;
  const seenN = browseOrder.filter(i => seen.has(i)).length;
  $('seen-count').textContent = seenN;
  $('known-count').textContent = knownN;
  $('remaining-count').textContent = Math.max(0, total - seenN);
  $('progress-fill').style.width = (total ? (seenN / total) * 100 : 0) + '%';
}
function flipCard() {
  const card = browseOrder[browseCursor];
  if (card === undefined) return;
  const el = $('card');
  el.classList.toggle('is-flipped');
  if (el.classList.contains('is-flipped')) seen.add(browseOrder[browseCursor]);
  browseRenderProgress();
}
function browseGo(dir) {
  if (!browseOrder.length) return;
  browseCursor = (browseCursor + dir + browseOrder.length) % browseOrder.length;
  browseRender();
}
function toggleKnown() {
  if (!browseOrder.length) return;
  const idx = browseOrder[browseCursor];
  if (known.has(idx)) known.delete(idx); else known.add(idx);
  browseRender();
}

// ----- QUIZ (multiple choice, no scheduling) -----
let quizOrder = [];
let quizCursor = 0;
let quizScore = 0;
let quizAnswered = 0;
function rebuildQuiz() {
  quizOrder = filteredIdx(activeDomain);
  // shuffle once per session
  for (let i = quizOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizOrder[i], quizOrder[j]] = [quizOrder[j], quizOrder[i]];
  }
  quizCursor = 0; quizScore = 0; quizAnswered = 0;
}
function quizRender() {
  const idx = quizOrder[quizCursor];
  if (idx === undefined) { quizShowEnd(); return; }
  const item = ITEMS[idx];
  $('quiz-domain').textContent = `D${item.d} · ${DOMAINS[item.d].short}`;
  $('quiz-question').textContent = item.q;
  $('quiz-position').textContent = quizCursor + 1;
  $('quiz-total').textContent = quizOrder.length;
  $('quiz-score').textContent = quizScore;
  $('quiz-answered').textContent = quizAnswered;
  $('quiz-feedback').hidden = true;
  $('quiz-next-btn').disabled = true;

  const opts = $('quiz-options');
  opts.innerHTML = '';
  // shuffle options but track correct index
  const order = item.opts.map((o, i) => ({ o, i })).sort(() => Math.random() - 0.5);
  order.forEach((entry, n) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.dataset.correct = entry.i === item.correct;
    btn.innerHTML = `<span class="option__key">${'ABCD'[n]}</span><span class="option__text">${entry.o}</span>`;
    btn.addEventListener('click', () => quizAnswer(btn, entry.i === item.correct, item));
    opts.appendChild(btn);
  });
  $('quiz-progress-fill').style.width = (quizCursor / quizOrder.length) * 100 + '%';
}
function quizAnswer(btn, correct, item) {
  $('quiz-options').querySelectorAll('.option').forEach(b => { b.disabled = true; if (b.dataset.correct === 'true') b.classList.add('option--correct'); });
  if (!correct) btn.classList.add('option--wrong');
  quizAnswered++;
  if (correct) quizScore++;
  $('quiz-score').textContent = quizScore;
  $('quiz-answered').textContent = quizAnswered;
  const fb = $('quiz-feedback');
  $('quiz-verdict').textContent = correct ? 'Correct' : 'Not quite';
  $('quiz-verdict').className = 'feedback__verdict ' + (correct ? 'feedback__verdict--correct' : 'feedback__verdict--wrong');
  $('quiz-explain').textContent = item.a;
  fb.hidden = false;
  $('quiz-next-btn').disabled = false;
}
function quizNext() {
  quizCursor++;
  quizRender();
}
function quizShowEnd() {
  $('quiz-options').innerHTML = '';
  $('quiz-question').textContent = `Quiz complete! You scored ${quizScore} / ${quizAnswered}.`;
  $('quiz-domain').textContent = 'Done';
  $('quiz-feedback').hidden = true;
  $('quiz-next-btn').disabled = true;
  $('quiz-next-btn').textContent = 'Restart';
  $('quiz-next-btn').disabled = false;
  $('quiz-progress-fill').style.width = '100%';
}

// ----- REVIEW (spaced repetition with MC) -----
let srQueue = [];
let srPos = 0;
let srCorrect = 0;
let srWrong = 0;
let srRequeueCount = {};
function rebuildReview() {
  const due = filteredIdx(activeDomain).filter(isDue);
  // unseen first, then by due time
  due.sort((a, b) => {
    const sa = srState[a], sb = srState[b];
    const ua = sa ? 1 : 0, ub = sb ? 1 : 0;
    if (ua !== ub) return ua - ub;
    return (sa?.next || 0) - (sb?.next || 0);
  });
  // cap session at 25
  srQueue = due.slice(0, 25);
  srPos = 0; srCorrect = 0; srWrong = 0; srRequeueCount = {};
}
function srRenderStats() {
  const s = srStatsFor(activeDomain);
  $('sr-due').textContent = s.due;
  $('sr-unseen').textContent = s.unseen;
  $('sr-learned').textContent = s.learned;
  $('sr-total').textContent = s.total;
}
function srRender() {
  srRenderStats();
  if (srQueue.length === 0) { srShowEmpty(); return; }
  const idx = srQueue[srPos];
  if (idx === undefined) { srShowSummary(); return; }
  const item = ITEMS[idx];
  $('sr-domain').textContent = `D${item.d} · ${DOMAINS[item.d].short}`;
  $('sr-position').textContent = srPos + 1;
  $('sr-session-total').textContent = srQueue.length;
  $('sr-question').textContent = item.q;
  $('sr-feedback').hidden = true;
  $('sr-continue-btn').disabled = true;
  $('sr-card').style.display = '';
  $('sr-summary').hidden = true;

  const opts = $('sr-options');
  opts.innerHTML = '';
  const order = item.opts.map((o, i) => ({ o, i })).sort(() => Math.random() - 0.5);
  order.forEach((entry, n) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.dataset.correct = entry.i === item.correct;
    btn.innerHTML = `<span class="option__key">${'ABCD'[n]}</span><span class="option__text">${entry.o}</span>`;
    btn.addEventListener('click', () => srAnswer(btn, entry.i === item.correct, item));
    opts.appendChild(btn);
  });
  $('sr-progress-fill').style.width = (srPos / srQueue.length) * 100 + '%';
}
function srAnswer(btn, correct, item) {
  $('sr-options').querySelectorAll('.option').forEach(b => { b.disabled = true; if (b.dataset.correct === 'true') b.classList.add('option--correct'); });
  if (!correct) btn.classList.add('option--wrong');
  if (correct) srCorrect++; else srWrong++;
  const idx = srQueue[srPos];
  scheduleItem(idx, correct);
  // requeue wrong answers (cap 2 requeues) to reinforce within session
  if (!correct && (srRequeueCount[idx] || 0) < 2) {
    srQueue.push(idx);
    srRequeueCount[idx] = (srRequeueCount[idx] || 0) + 1;
    $('sr-session-total').textContent = srQueue.length;
  }
  const fb = $('sr-feedback');
  $('sr-verdict').textContent = correct ? 'Got it' : 'Review again';
  $('sr-verdict').className = 'feedback__verdict ' + (correct ? 'feedback__verdict--correct' : 'feedback__verdict--wrong');
  $('sr-explain').textContent = item.a;
  fb.hidden = false;
  $('sr-continue-btn').disabled = false;
  srRenderStats();
}
function srContinue() {
  srPos++;
  if (srPos >= srQueue.length) { srShowSummary(); return; }
  srRender();
}
function srShowSummary() {
  $('sr-card').style.display = 'none';
  $('sr-summary').hidden = false;
  $('sr-summary-text').textContent = `You reviewed ${srQueue.length} card${srQueue.length === 1 ? '' : 's'}: ${srCorrect} recalled, ${srWrong} to review again. Cards you missed are scheduled to resurface soon.`;
  $('sr-progress-fill').style.width = '100%';
  srRenderStats();
}
function srShowEmpty() {
  $('sr-card').style.display = 'none';
  $('sr-summary').hidden = false;
  $('sr-summary-title').textContent = 'All caught up';
  $('sr-summary-text').textContent = 'No cards are due right now. Come back later — or switch domains to review something new.';
  $('sr-restart-btn').textContent = 'Check again';
  $('sr-progress-fill').style.width = '100%';
}

// ===== Mode switching =====
function switchMode(newMode) {
  mode = newMode;
  document.querySelectorAll('.mode').forEach(m => {
    const active = m.dataset.mode === newMode;
    m.classList.toggle('mode--active', active);
    m.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  document.querySelectorAll('.view').forEach(v => { v.hidden = true; v.classList.remove('is-active'); });
  const view = document.getElementById('view-' + newMode);
  view.hidden = false; view.classList.add('is-active');
  // context toolbar
  const tb = $('toolbar-actions');
  if (newMode === 'browse') tb.innerHTML = browseActionsHTML();
  else if (newMode === 'quiz') tb.innerHTML = quizActionsHTML();
  else tb.innerHTML = reviewActionsHTML();
  bindToolbarActions();
  if (newMode === 'browse') { rebuildBrowse(); browseRender(); }
  else if (newMode === 'quiz') { rebuildQuiz(); quizRender(); }
  else { rebuildReview(); srRender(); }
}

function browseActionsHTML() {
  return `<button class="btn btn--ghost" id="shuffle-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>Shuffle</button><button class="btn btn--ghost" id="reset-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>Reset</button>`;
}
function quizActionsHTML() {
  return `<button class="btn btn--ghost" id="shuffle-btn">New set</button>`;
}
function reviewActionsHTML() {
  return `<button class="btn btn--ghost" id="reset-btn">Reset review progress</button>`;
}
function bindToolbarActions() {
  const sh = $('shuffle-btn');
  const rs = $('reset-btn');
  if (sh) sh.addEventListener('click', () => {
    if (mode === 'browse') { for (let i = browseOrder.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [browseOrder[i], browseOrder[j]] = [browseOrder[j], browseOrder[i]]; } browseCursor = 0; browseRender(); }
    else if (mode === 'quiz') { rebuildQuiz(); quizRender(); }
  });
  if (rs) rs.addEventListener('click', () => {
    if (mode === 'browse') { known.clear(); seen.clear(); browseCursor = 0; rebuildBrowse(); browseRender(); }
    else if (mode === 'review') { srState = {}; saveSR(); rebuildReview(); srRender(); }
  });
}

// ===== Init =====
function initEvents() {
  // Browse
  $('card').addEventListener('click', flipCard);
  $('card').addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipCard(); } });
  $('prev-btn').addEventListener('click', () => browseGo(-1));
  $('next-btn').addEventListener('click', () => browseGo(1));
  $('known-btn').addEventListener('click', toggleKnown);

  // Quiz
  $('quiz-next-btn').addEventListener('click', () => {
    if (quizCursor >= quizOrder.length) { rebuildQuiz(); $('quiz-next-btn').textContent = 'Next'; quizRender(); }
    else quizNext();
  });

  // Review
  $('sr-continue-btn').addEventListener('click', srContinue);
  $('sr-restart-btn').addEventListener('click', () => {
    if (srQueue.length === 0 || srPos >= srQueue.length) { rebuildReview(); srRender(); }
  });

  // Mode tabs
  document.querySelectorAll('.mode').forEach(m => {
    m.addEventListener('click', () => switchMode(m.dataset.mode));
  });

  // Domain filters
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('chip--active'));
      chip.classList.add('chip--active');
      activeDomain = chip.dataset.domain;
      if (mode === 'browse') { rebuildBrowse(); browseRender(); }
      else if (mode === 'quiz') { rebuildQuiz(); quizRender(); }
      else { rebuildReview(); srRender(); }
    });
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (mode === 'browse') {
      switch (e.key) {
        case 'ArrowLeft': e.preventDefault(); browseGo(-1); break;
        case 'ArrowRight': e.preventDefault(); browseGo(1); break;
        case ' ': e.preventDefault(); flipCard(); break;
        case 's': case 'S': for (let i = browseOrder.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [browseOrder[i], browseOrder[j]] = [browseOrder[j], browseOrder[i]]; } browseCursor = 0; browseRender(); break;
        case 'k': case 'K': toggleKnown(); break;
      }
    } else if (mode === 'quiz') {
      if (e.key === 'n' || e.key === 'N' || e.key === 'Enter') { e.preventDefault(); $('quiz-next-btn').click(); }
    } else if (mode === 'review') {
      if (e.key === 'Enter' && !$('sr-continue-btn').disabled) { e.preventDefault(); srContinue(); }
    }
  });

  // Theme toggle
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', theme);
  const sync = () => {
    t.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    t.innerHTML = theme === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  };
  sync();
  t.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; r.setAttribute('data-theme', theme); sync(); });
}

async function init() {
  await loadSR();
  initEvents();
  $('count-all').textContent = ITEMS.length;
  rebuildBrowse();
  browseRender();
  if (srBackend) {
    $('sr-persistence-note').textContent = 'Your review progress is saved by the site and continues across sessions on this device.';
  } else {
    $('sr-persistence-note').textContent = 'Backend storage is unavailable in this preview, so review progress lasts for this session only.';
  }
}

init();
