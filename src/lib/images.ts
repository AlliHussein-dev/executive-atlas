// Curated Unsplash photography. Stable IDs, premium executive aesthetic.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  // Hero / skyline
  abuDhabiSkyline: u("photo-1512453979798-5ea266f8880c", 2000),
  abuDhabiDusk: u("photo-1518684079-3c830dcef090", 2000),
  abuDhabiNight: u("photo-1580674684081-7617fbf3d745", 2000),

  // Architecture / office
  facadeArchitecture: u("photo-1486325212027-8081e485255e", 1400),
  modernTower: u("photo-1577415124269-fc1140a69e91", 1400),
  receptionLobby: u("photo-1497366216548-37526070297c", 1600),
  officeInterior: u("photo-1497366811353-6870744d04b2", 1600),

  // Boardrooms / meetings
  boardroom: u("photo-1517502884422-41eaead166d4", 1800),
  meetingTable: u("photo-1542744173-8e7e53415bb0", 1800),
  executiveTalk: u("photo-1556761175-5973dc0f32e7", 1800),
  privateConsult: u("photo-1573496359142-b8d87734a5a2", 1600),
  signing: u("photo-1450101499163-c8848c66ca85", 1600),

  // Leadership portraits
  portraitMale1: u("photo-1560250097-0b93528c311a", 800),
  portraitMale2: u("photo-1507003211169-0a1dd7228f2d", 800),
  portraitFemale1: u("photo-1573496359142-b8d87734a5a2", 800),
  portraitFemale2: u("photo-1494790108377-be9c29b29330", 800),
  portraitMale3: u("photo-1472099645785-5658abf4ff4e", 800),

  // Documentation / legal
  contracts: u("photo-1450101499163-c8848c66ca85", 1400),
  documents: u("photo-1521791136064-7986c2920216", 1400),
  fountainPen: u("photo-1583521214690-73421a1829a9", 1400),

  // Industries
  construction: u("photo-1503387762-592deb58ef4e", 1800),
  technology: u("photo-1518770660439-4636190af475", 1800),
  healthcare: u("photo-1519494026892-80bbd2d6fd0d", 1800),
  realEstate: u("photo-1582407947304-fd86f028f716", 1800),
  manufacturing: u("photo-1581094794329-c8112a89af12", 1800),
  hospitality: u("photo-1566073771259-6a8506099945", 1800),

  // Gallery
  gallery1: u("photo-1604328698692-f76ea9498e76", 1200),
  gallery2: u("photo-1497366754035-f200968a6e72", 1200),
  gallery3: u("photo-1568992687947-868a62a9f521", 1200),
  gallery4: u("photo-1556761175-b413da4baf72", 1200),
  gallery5: u("photo-1565793298595-6a879b1d9492", 1200),
  gallery6: u("photo-1554469384-e58fac16e23a", 1200),

  // Portal / advisor
  advisor: u("photo-1560250097-0b93528c311a", 600),
};
