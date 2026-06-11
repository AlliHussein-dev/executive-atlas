import { IMG } from "./images";

export const client = {
  name: "Mr. Ahmed Al Mansoori",
  shortName: "Ahmed",
  company: "Mansoori Holdings LLC",
  membership: "Sovereign Tier · Since 2019",
};

export const advisor = {
  name: "Khalid Al Hashimi",
  title: "Senior Partner · Corporate Practice",
  image: IMG.advisor,
  phone: "+971 50 412 8821",
  email: "k.alhashimi@etihadconsultancy.ae",
};

export const upcomingMeetings = [
  {
    id: "m1",
    title: "Quarterly Strategy Review",
    date: "Tuesday, 18 June",
    time: "10:00 GST",
    location: "Etihad Office · Boardroom A",
  },
  {
    id: "m2",
    title: "Golden Visa Renewal Briefing",
    date: "Thursday, 27 June",
    time: "14:30 GST",
    location: "Private Video Conference",
  },
];

export const documents = [
  {
    id: "d1",
    title: "Mansoori Holdings · Commercial License",
    category: "Licensing",
    date: "Updated 02 Jun 2026",
    status: "Active",
    size: "1.2 MB",
  },
  {
    id: "d2",
    title: "Passport Records · Principal Shareholder",
    category: "Identity",
    date: "Verified 14 May 2026",
    status: "Encrypted",
    size: "640 KB",
  },
  {
    id: "d3",
    title: "Shareholder Agreement · 2024 Amendment",
    category: "Corporate",
    date: "Signed 21 Apr 2026",
    status: "Approved",
    size: "2.4 MB",
  },
  {
    id: "d4",
    title: "Federal Tax Authority · Registration Certificate",
    category: "Regulatory",
    date: "Issued 09 Mar 2026",
    status: "Active",
    size: "880 KB",
  },
  {
    id: "d5",
    title: "Memorandum of Association (Arabic)",
    category: "Legal",
    date: "Notarised 18 Feb 2026",
    status: "Attested",
    size: "1.6 MB",
  },
  {
    id: "d6",
    title: "Office Lease · Electra Street",
    category: "Premises",
    date: "Renewed 11 Jan 2026",
    status: "Active",
    size: "3.1 MB",
  },
];

export const progress = [
  {
    id: "p1",
    title: "Subsidiary formation · Mansoori Industrial FZE",
    status: "In Progress",
    pct: 68,
    note: "Awaiting final approval from JAFZA authority. Expected 22 Jun.",
  },
  {
    id: "p2",
    title: "Investor visa renewal · 3 dependents",
    status: "Awaiting Documents",
    pct: 35,
    note: "Pending medical clearance for Mrs. Al Mansoori.",
  },
  {
    id: "p3",
    title: "Trade license renewal · Mansoori Holdings",
    status: "Scheduled",
    pct: 10,
    note: "Auto-renewal initiated for 11 Sep 2026.",
  },
];

export const deadlines = [
  { date: "22 Jun", label: "JAFZA establishment approval — final review" },
  { date: "08 Jul", label: "VAT quarterly filing — Federal Tax Authority" },
  { date: "11 Sep", label: "Trade license renewal — Mansoori Holdings" },
  { date: "30 Nov", label: "Annual UBO declaration" },
];

export const invoices = [
  {
    id: "INV-2026-0142",
    description: "Subsidiary formation · advisory retainer",
    amount: "AED 28,500",
    date: "01 Jun 2026",
    status: "Paid",
  },
  {
    id: "INV-2026-0118",
    description: "Government fees · DED reservation",
    amount: "AED 6,200",
    date: "18 May 2026",
    status: "Paid",
  },
  {
    id: "INV-2026-0107",
    description: "Legal translation · MoA amendment",
    amount: "AED 3,450",
    date: "02 May 2026",
    status: "Outstanding",
  },
  {
    id: "INV-2026-0091",
    description: "Quarterly advisory retainer · Q2",
    amount: "AED 42,000",
    date: "01 Apr 2026",
    status: "Paid",
  },
];

export const messages = [
  {
    id: "msg1",
    from: "Khalid Al Hashimi",
    role: "Senior Partner",
    time: "Today · 09:42",
    body: "Good morning, Mr. Ahmed. The JAFZA correspondence has been received. I have arranged a private review at our office on Tuesday — I shall prepare the dossier in advance.",
    self: false,
  },
  {
    id: "msg2",
    from: "You",
    role: "Client",
    time: "Today · 10:11",
    body: "Thank you, Khalid. Please also include the updated capital structure summary. I would like to review the dividend treatment ahead of the meeting.",
    self: true,
  },
  {
    id: "msg3",
    from: "Khalid Al Hashimi",
    role: "Senior Partner",
    time: "Today · 10:19",
    body: "Understood. I shall coordinate with our tax counsel and circulate the memorandum tomorrow morning.",
    self: false,
  },
];
