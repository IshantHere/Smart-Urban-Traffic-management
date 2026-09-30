export interface ReferenceItem {
  id: string;
  category: 'Government & Standards' | 'Academic & Research' | 'Technical API Documentation' | 'Cartographic & Open Data';
  authorsOrAgency: string;
  year: string;
  title: string;
  publicationOrSource: string;
  url?: string;
  verifiedNotes: string;
}

export const ACADEMIC_REFERENCES: ReferenceItem[] = [
  {
    id: 'mohua-smart-cities',
    category: 'Government & Standards',
    authorsOrAgency: 'Ministry of Housing and Urban Affairs (MoHUA), Government of India',
    year: '2020–2023',
    title: 'Smart Cities Mission Guidelines & Integrated Command and Control Centre (ICCC) Framework',
    publicationOrSource: 'National Smart Cities Mission Portal, New Delhi',
    url: 'https://smartcities.gov.in',
    verifiedNotes: 'Official guidelines detailing functional specifications for 100 urban ICCC deployments, CCTV surveillance standards, and traffic management center integration.'
  },
  {
    id: 'morth-road-accidents',
    category: 'Government & Standards',
    authorsOrAgency: 'Ministry of Road Transport and Highways (MoRTH), Transport Research Wing',
    year: '2022',
    title: 'Road Accidents in India 2022 Report',
    publicationOrSource: 'Government of India, New Delhi',
    url: 'https://morth.nic.in',
    verifiedNotes: 'National statistical compendium on road crash incidence, urban collision hotspots, junction vulnerabilities, and vulnerable road user casualty metrics.'
  },
  {
    id: 'irc-signal-guidelines',
    category: 'Government & Standards',
    authorsOrAgency: 'Indian Roads Congress (IRC)',
    year: '1985 (Reaffirmed 2014)',
    title: 'Guidelines on Design and Installation of Road Traffic Signals (IRC:93-1985)',
    publicationOrSource: 'Indian Roads Congress, New Delhi',
    url: 'https://irc.nic.in',
    verifiedNotes: 'National technical code of practice governing signal cycle designs, amber clearance intervals, inter-green safety calculations, and detector placement on Indian roadways.'
  },
  {
    id: 'crri-traffic-studies',
    category: 'Academic & Research',
    authorsOrAgency: 'Central Road Research Institute (CSIR-CRRI)',
    year: '2019',
    title: 'Evaluation of Area Traffic Control Systems in Indian Metropolitan Conditions',
    publicationOrSource: 'CSIR-CRRI Research Reports & Indian Journal of Transportation',
    url: 'https://crridom.gov.in',
    verifiedNotes: 'Empirical comparative evaluation of fixed-time vs. adaptive signal performance (CoSiCoSt/SCOOT) under non-lane-based heterogeneous traffic conditions.'
  },
  {
    id: 'tomtom-traffic-index',
    category: 'Technical API Documentation',
    authorsOrAgency: 'TomTom International BV',
    year: '2024',
    title: 'TomTom Traffic Flow API v4 Documentation & TomTom Traffic Index 2023/2024',
    publicationOrSource: 'TomTom Developer Portal',
    url: 'https://developer.tomtom.com/traffic-api/documentation/traffic-flow/flow-segment-data',
    verifiedNotes: 'Official technical specification for Traffic Flow relative0 speed ratio, flow segment calculation parameters, road closure flags, and raster flow tile services.'
  },
  {
    id: 'nhai-fastag-report',
    category: 'Government & Standards',
    authorsOrAgency: 'National Highways Authority of India (NHAI) & NPCI',
    year: '2023',
    title: 'National Electronic Toll Collection (NETC) Program Report: RFID FASTag Impact on Toll Delay and Revenue Leakage',
    publicationOrSource: 'NHAI / NPCI National Portal',
    url: 'https://www.npci.org.in',
    verifiedNotes: 'Operational audit demonstrating the transition to 98%+ electronic tolling across 1,000+ national and state highway plazas, cutting average dwell times from ~8 minutes to under 47 seconds.'
  },
  {
    id: 'osm-carto-attribution',
    category: 'Cartographic & Open Data',
    authorsOrAgency: 'OpenStreetMap Contributors & CartoDB',
    year: '2024',
    title: 'CartoDB Positron Light Basemap Tiles & OpenStreetMap Geographic Database',
    publicationOrSource: 'OpenStreetMap Foundation & CARTO',
    url: 'https://www.openstreetmap.org/copyright',
    verifiedNotes: 'Open geographic data and minimalist academic light tile layer licensed under Open Data Commons Open Database License (ODbL) and CC BY 3.0.'
  }
];
