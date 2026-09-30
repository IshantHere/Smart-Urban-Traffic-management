export interface StrategyItem {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  iconName: string;
  summary: string;
  keyMechanisms: string[];
  comparisons?: {
    traditional: string;
    smart: string;
  };
  technicalDetails: {
    heading: string;
    points: string[];
  }[];
  realWorldExample: string;
}

export const SMART_TRAFFIC_STRATEGIES: StrategyItem[] = [
  {
    id: 'intelligent-signals',
    number: 1,
    title: 'Intelligent Traffic Signals',
    subtitle: 'Adaptive Green-Split & Dynamic Corridor Coordination',
    iconName: 'Sliders',
    summary: 'Replacing static, clock-based traffic timers with closed-loop adaptive signal controllers that dynamically adjust green phase durations based on actual vehicular queue lengths and real-time approach volumes.',
    keyMechanisms: [
      'In-road inductive loops, microwave radar, and overhead optical sensors detecting approaching vehicle counts',
      'Adaptive algorithms (e.g., SCOOT, SCATS, CoSiCoSt) recalculating cycle times every 30–60 seconds',
      'Corridor synchronization ("green wave") coordinating consecutive intersections to minimize stop-and-go delays',
      'Dynamic pedestrian crossing phase allocation responding to push-button and thermal presence sensors'
    ],
    comparisons: {
      traditional: 'Fixed 90-second cycle rotating blindly 24/7 regardless of whether an approach is empty or backed up.',
      smart: 'Dynamic green phase extended or terminated early based on live vehicle clearance rates and platoon arrivals.'
    },
    technicalDetails: [
      {
        heading: 'Sensing Layer',
        points: [
          'Inductive loop detectors embedded beneath pavement measure electromagnetic changes when vehicles pass.',
          'Video analytics cameras capture approach volume, lane occupancy, and headway distance.'
        ]
      },
      {
        heading: 'Optimization Logic',
        points: [
          'Cycle Length Optimization: Maximizes throughput based on saturation flow rates.',
          'Split Allocation: Proportionally allocates green time according to critical lane volumes.',
          'Offset Adjustment: Synchronizes phase offsets between neighboring nodes to maintain moving vehicular platoons.'
        ]
      }
    ],
    realWorldExample: 'Mumbai Area Traffic Control System (ATCS) deployed across 250+ junctions, reducing average delay by 18–25% along major arterial connectors.'
  },
  {
    id: 'ai-prediction',
    number: 2,
    title: 'AI & Traffic Prediction',
    subtitle: 'Machine Learning & Spatial-Temporal Demand Forecasting',
    iconName: 'BrainCircuit',
    summary: 'Leveraging historical traffic logs, weather inputs, civic calendar events, and streaming road sensor feeds to anticipate congestion shockwaves 15–45 minutes before they physically manifest.',
    keyMechanisms: [
      'Spatial-Temporal Graph Neural Networks (ST-GNN) modeling urban road topologies and multi-hop traffic dependencies',
      'Time-series recurrence models forecasting bottleneck probability and queue spillover rates',
      'Proactive signal plan pre-emption shifting signal timings before secondary gridlock occurs',
      'Anomaly detection identifying irregular flow patterns indicative of accidents or lane closures'
    ],
    comparisons: {
      traditional: 'Reactive response: Police or operators discover congestion only after multi-kilometer jams develop.',
      smart: 'Predictive mitigation: Computational models anticipate demand surge and adjust surrounding corridor signals ahead of time.'
    },
    technicalDetails: [
      {
        heading: 'Model Architecture',
        points: [
          'Graph Convolutional Networks (GCN) capture spatial topological road network constraints.',
          'Long Short-Term Memory (LSTM) / Temporal Convolutional Networks (TCN) capture non-linear diurnal rush-hour cycles.'
        ]
      },
      {
        heading: 'Control Integration',
        points: [
          'Prediction vectors feed directly into Central Command software to simulate diversion scenarios and dispatch alerts.'
        ]
      }
    ],
    realWorldExample: 'Bengaluru ASTaC (Adaptive Signal Control) leverages predictive traffic pattern libraries to adjust signals across 160 core tech-corridor junctions.'
  },
  {
    id: 'cctv-monitoring',
    number: 3,
    title: 'CCTV & Computer Vision Traffic Monitoring',
    subtitle: 'Automated Incident Detection & Queue Density Analytics',
    iconName: 'Camera',
    summary: 'High-definition optical cameras integrated with deep learning computer vision models that continuously track vehicle counts, classify vehicle categories, and automatically detect collisions or stalled vehicles in seconds.',
    keyMechanisms: [
      'Automated Number Plate Recognition (ANPR/ALPR) for electronic enforcement and vehicle tracing',
      'Optical density estimation classifying lane occupancy into free, creeping, and standstill states',
      'Automated Incident Detection (AID) flagging stalled vehicles, wrong-way driving, debris, and lane encroachment',
      'Edge-computing processing on roadside units (RSUs) to minimize bandwidth transmission to central data centers'
    ],
    comparisons: {
      traditional: 'Human operators manually scanning dozens of CCTV monitor walls, often missing incidents for 20+ minutes.',
      smart: 'Vision AI algorithms detect halted vehicles or lane obstructions in under 15 seconds and trigger instant audio-visual operator alarms.'
    },
    technicalDetails: [
      {
        heading: 'Object Detection & Tracking',
        points: [
          'YOLO / SSD models trained on heterogeneous traffic to identify two-wheelers, auto-rickshaws, cars, and heavy commercial vehicles.',
          'ByteTrack / DeepSORT tracking algorithms calculate instantaneous velocity vectors and trajectory anomalies.'
        ]
      },
      {
        heading: 'Incident Detection Rules',
        points: [
          'Stationary object threshold in active carriage lane (>30 seconds triggers alert).',
          'Sudden deceleration signatures and lane boundary crossing vectors.'
        ]
      }
    ],
    realWorldExample: 'Surat Smart City Integrated Command and Control Centre (ICCC) operates 2,800+ AI-enabled cameras with automated red-light and speed enforcement.'
  },
  {
    id: 'smart-parking',
    number: 4,
    title: 'Smart Parking Management',
    subtitle: 'IoT Occupancy Sensing & Real-Time Guidance Systems',
    iconName: 'ParkingSquare',
    summary: 'Eliminating the 30% of downtown congestion caused by drivers searching for open spots through wireless ground sensors, digital Variable Message Signs (VMS), and mobile reservation systems.',
    keyMechanisms: [
      'In-ground geomagnetic and ultrasonic IoT sensors detecting individual bay occupancy in real-time',
      'Dynamic roadside Variable Message Signs (VMS) displaying available space counts before drivers enter congested lanes',
      'Mobile reservation apps enabling drivers to navigate directly to guaranteed empty bays and pay electronically',
      'Dynamic curbside pricing algorithms incentivizing turnover in high-demand central business districts'
    ],
    comparisons: {
      traditional: 'Drivers circle city blocks for 15–20 minutes, double-parking and choking active traffic lanes.',
      smart: 'Drivers check real-time availability on overhead signs or smartphone apps, routing directly to vacant spaces.'
    },
    technicalDetails: [
      {
        heading: 'Sensor Infrastructure',
        points: [
          'Surface-mounted NB-IoT / LoRaWAN wireless magnetometers with 5–7 year battery lifespans.',
          'Overhead multi-space camera sensors covering 6–8 outdoor bays simultaneously.'
        ]
      },
      {
        heading: 'Dynamic Guidance',
        points: [
          'APIs publish live bay status (vacant/occupied) to municipal navigation displays and Google Maps / OpenStreetMap.'
        ]
      }
    ],
    realWorldExample: 'New Delhi Municipal Council (NDMC) smart parking initiative in Connaught Place, featuring automated ground sensors and mobile bay booking across 88 parking lots.'
  },
  {
    id: 'public-transit-integration',
    number: 5,
    title: 'Public Transport Priority & Multimodal Integration',
    subtitle: 'Transit Signal Priority (TSP) & Live Fleet Synchronization',
    iconName: 'Bus',
    summary: 'Prioritizing high-capacity public transport over single-occupant private automobiles through Transit Signal Priority (TSP) and unified multi-modal timetable synchronization.',
    keyMechanisms: [
      'Transit Signal Priority (TSP) granting green light extensions or phase truncation when scheduled buses approach junctions',
      'Real-time automated vehicle location (AVL) via onboard GPS feeding live General Transit Feed Specification (GTFS-RT)',
      'Multimodal transit interchange synchronization linking Metro rail schedules with feeder bus arrivals',
      'Unified mobility-as-a-service (MaaS) ticketing systems simplifying transfers across buses, metro, and shared mobility'
    ],
    comparisons: {
      traditional: 'Buses carrying 70 passengers wait stuck in identical red-light queues behind single-occupant cars.',
      smart: 'Junction controllers detect approaching bus transponders and hold the green phase, moving dozens of passengers smoothly through intersections.'
    },
    technicalDetails: [
      {
        heading: 'TSP Priority Logic',
        points: [
          'Green Extension: If a bus is detected 50 meters away and the green phase is expiring, the green is extended by up to 15 seconds.',
          'Early Green: If the signal is currently red for the transit approach, cross-street green phases are safely truncated to advance transit movement.'
        ]
      },
      {
        heading: 'Passenger Information Systems (PIS)',
        points: [
          'Digital roadside displays at bus shelters show real-time GPS arrivals accurate to within 60 seconds.'
        ]
      }
    ],
    realWorldExample: 'Ahmedabad Janmarg Bus Rapid Transit System (BRTS) with dedicated lanes, GPS tracking, and intelligent signal coordination across key junctions.'
  },
  {
    id: 'real-time-info',
    number: 6,
    title: 'Real-Time Traveler Information Systems (ATIS)',
    subtitle: 'Crowdsourced GPS, Dynamic Routing & Variable Message Signs',
    iconName: 'Navigation',
    summary: 'Empowering travelers to make informed pre-trip and en-route decisions by broadcasting instantaneous travel times, congestion hot-spots, and alternate bypass suggestions through roadside VMS and digital navigation feeds.',
    keyMechanisms: [
      'Crowdsourced Floating Car Data (FCD) collected from millions of smartphone and connected vehicle GPS trajectories',
      'Roadside dynamic Variable Message Signs (VMS) alerting drivers to upcoming lane closures or estimated minutes to key junctions',
      'Dynamic navigation algorithms distributing traffic evenly across parallel corridors rather than overburdening single routes',
      'Multi-modal trip planning tools recommending transit alternatives when roadway corridors exceed congestion thresholds'
    ],
    comparisons: {
      traditional: 'Commuters embark blindly on customary routes, becoming trapped behind unexpected blockages with no escape.',
      smart: 'Continuous digital telemetry alerts commuters prior to critical decision forks, encouraging optimal route diversification.'
    },
    technicalDetails: [
      {
        heading: 'Data Aggregation Layer',
        points: [
          'Probe vehicle speeds sampled every 5–10 seconds are map-matched to road graph segments to compute harmonic mean speeds.',
          'Traffic Flow REST APIs provide real-time travel times and free-flow comparative ratios.'
        ]
      },
      {
        heading: 'Commuter Dissemination',
        points: [
          'Dynamic LED matrix displays positioned at major ring-road interchanges.',
          'Open APIs integrated into consumer navigation apps.'
        ]
      }
    ],
    realWorldExample: 'Delhi Traffic Police Integrated Traffic Management System (ITMS) publishing live traffic advisories and operating 50+ overhead electronic Variable Message Signs across arterial bypasses.'
  }
];
