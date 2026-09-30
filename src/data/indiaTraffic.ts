export interface IndiaInitiative {
  id: string;
  name: string;
  agency: string;
  scope: string;
  description: string;
  keyFeatures: string[];
  impactMetric: string;
  status: 'Operational' | 'Expanding' | 'Nationwide Rollout';
}

export interface IndiaChallenge {
  id: string;
  title: string;
  engineeringReality: string;
  mitigationApproach: string;
  iconName: string;
}

export const INDIA_INITIATIVES: IndiaInitiative[] = [
  {
    id: 'smart-cities-iccc',
    name: 'Integrated Command and Control Centres (ICCC)',
    agency: 'Ministry of Housing and Urban Affairs (MoHUA), Govt. of India',
    scope: '100 Smart Cities across India',
    description: 'Serving as the unified digital nervous system for Indian municipalities, aggregating feeds from CCTV surveillance, adaptive traffic signals, emergency dispatch, and environmental air sensors into a centralized municipal operational dashboard.',
    keyFeatures: [
      'Centralized video walls monitoring live intersection video feeds and junction queues',
      'Integration between municipal traffic police, emergency services (112), and public transport fleets',
      'Standardized data exchange frameworks (India Urban Data Exchange - IUDX)',
      'Automated e-challan enforcement for signal violations and speeding'
    ],
    impactMetric: 'Operational across all 100 designated Smart Cities, managing over 50,000 integrated video streams.',
    status: 'Operational'
  },
  {
    id: 'delhi-itms',
    name: 'Delhi Intelligent Traffic Management System (ITMS)',
    agency: 'Delhi Traffic Police & Ministry of Home Affairs',
    scope: 'National Capital Territory of Delhi',
    description: 'A comprehensive traffic enforcement and monitoring infrastructure integrating high-resolution Automated Number Plate Recognition (ANPR), Red Light Violation Detection (RLVD), and radar-based speed enforcement systems across Delhi arterials.',
    keyFeatures: [
      'Gantry-mounted 3D radar speed detectors across major express corridors',
      'High-speed optical ANPR cameras linked directly to the national VAHAN vehicle database',
      'Dynamic Variable Message Signs (VMS) on Ring Road displaying congestion advisories',
      'Central Traffic Management Centre operating 24/7 incident response units'
    ],
    impactMetric: 'Over 1,200 automated enforcement cameras operating across 200+ major intersections in Delhi.',
    status: 'Operational'
  },
  {
    id: 'bengaluru-btrac-astac',
    name: 'Bengaluru B-TRAC & Adaptive Traffic Signalling (ASTaC)',
    agency: 'Bengaluru Traffic Police & BBMP',
    scope: 'Bengaluru Urban District (Karnataka)',
    description: 'A phased technological modernization project aimed at easing bottlenecks in India’s leading technology hub, combining sensor-driven adaptive signal cycle allocation with intelligent surveillance and real-time transit bus tracking.',
    keyFeatures: [
      'Vehicle-actuated controllers and camera sensors measuring queue lengths in real time',
      'Coordinated signal synchronization along critical IT corridors (Outer Ring Road, Hosur Road)',
      'BMTC open transit data feeds providing live GPS tracking for thousands of city buses',
      'Automated Traffic Enforcement Centre processing contactless digital infractions'
    ],
    impactMetric: '160+ major intersections upgraded to automated vehicle-actuated adaptive signal controls.',
    status: 'Expanding'
  },
  {
    id: 'mumbai-atcs',
    name: 'Mumbai Area Traffic Control System (ATCS)',
    agency: 'Brihanmumbai Municipal Corporation (BMC) & Mumbai Traffic Police',
    scope: 'Greater Mumbai (Maharashtra)',
    description: 'Implementation of computerized area traffic control using the SCOOT and indigenous CoSiCoSt (Composite Signal Control Strategy developed by C-DAC) algorithms to coordinate traffic lights across closely spaced junctions.',
    keyFeatures: [
      'Real-time green-time optimization responding to sudden vehicle surges along Western and Eastern corridors',
      'Inductive loop sensors and video vehicle detectors communicating with central server',
      'Emergency vehicle preemption routing priority for ambulances and fire services',
      'Pedestrian-actuated crossing phases at high-footfall railway station approaches'
    ],
    impactMetric: '253 signalized intersections interconnected under centralized computer control, reducing commuter delay by ~20%.',
    status: 'Operational'
  },
  {
    id: 'nhai-fastag',
    name: 'FASTag National Electronic Toll Collection (NETC)',
    agency: 'National Highways Authority of India (NHAI) & NPCI',
    scope: 'Nationwide (National & State Highways)',
    description: 'Passive Radio Frequency Identification (RFID) technology affixed to vehicle windscreens, enabling electronic toll deduction while vehicles are in motion without requiring manual cash transactions.',
    keyFeatures: [
      'ISO 18000-6C compliant passive RFID tags scanned by overhead toll gantry readers',
      'Seamless interoperability across 1,000+ national and state highway toll plazas',
      'Drastic reduction in toll plaza queue waiting times and idling emissions',
      'Digital audit trail for freight tracking and interstate commerce analytics'
    ],
    impactMetric: 'Over 98% toll penetration nationwide; average toll clearance time reduced from ~8 minutes to under 47 seconds.',
    status: 'Nationwide Rollout'
  }
];

export const INDIA_CHALLENGES: IndiaChallenge[] = [
  {
    id: 'heterogeneous-traffic',
    title: 'Heterogeneous Mixed Traffic Flow',
    engineeringReality: 'Unlike Western cities where traffic consists largely of standardized passenger cars maintaining lane discipline, Indian traffic comprises two-wheelers (60–70% of modal share), three-wheelers, buses, cycles, and pedestrians sharing the same road space without strict lane alignment.',
    mitigationApproach: 'Western lane-tracking algorithms fail in non-lane-based flow. Indian deployments utilize area-occupancy and volumetric pixel density computer vision algorithms specifically trained on local vehicle aspect ratios.',
    iconName: 'Users'
  },
  {
    id: 'monsoon-waterlogging',
    title: 'Monsoon Flooding & Infrastructure Resilience',
    engineeringReality: 'Heavy monsoon rains frequently flood road carriageways, submerging underground inductive loop sensors, eroding road markings needed by vision sensors, and altering pavement traction drastically.',
    mitigationApproach: 'Transitioning from in-pavement inductive loops to elevated pole-mounted radar and high-grade IP67/IP68 thermal/optical cameras with waterproof conduit networks.',
    iconName: 'CloudRain'
  },
  {
    id: 'power-network-continuity',
    title: 'Power Outages & Telecommunication Latency',
    engineeringReality: 'Intermittent electrical grid fluctuations and fiber optic line severance during civic construction can disconnect roadside signal controllers from central servers, risking uncontrolled intersection flashing.',
    mitigationApproach: 'Equipping all signalized nodes with solar photovoltaic backup, uninterruptible power supplies (UPS), dual-SIM 4G/5G cellular fallback, and autonomous local failsafe cycle plans.',
    iconName: 'ZapOff'
  },
  {
    id: 'geometric-irregularities',
    title: 'Complex & Irregular Junction Geometries',
    engineeringReality: 'Historical road alignments, asymmetrical multi-leg rotaries (5-way or 6-way junctions), and unpredictable pedestrian crossing demand challenge standard 4-way orthogonal signal timing logic.',
    mitigationApproach: 'Bespoke micro-simulation modeling (using VISSIM/Aimsun) to customize multi-phase stage diagrams, combined with physical road channelization islands and dedicated pedestrian refuge zones.',
    iconName: 'GitFork'
  }
];
