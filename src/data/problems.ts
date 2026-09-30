export interface ProblemItem {
  id: string;
  problem: string;
  causes: string[];
  effects: string[];
  academicContext: string;
  metric?: string;
  iconName: string;
}

export const TRAFFIC_PROBLEMS: ProblemItem[] = [
  {
    id: 'congestion',
    problem: 'Chronic Traffic Congestion',
    causes: [
      'Unbalanced spatial distribution of travel demand',
      'Bottlenecks at high-volume intersections and arterial merging zones'
    ],
    effects: [
      'Severe travel time unpredictability and productivity loss',
      'Multi-kilometer vehicular queues spilling into secondary networks'
    ],
    academicContext: 'Congestion exhibits non-linear queuing behavior: when traffic volume approaches 85% of road capacity, small flow perturbations induce backward-propagating shockwaves.',
    metric: 'Indian metro commuters spend an average of 1.5–2 hours extra per day in peak congestion.',
    iconName: 'ClockAlert'
  },
  {
    id: 'poor-signaling',
    problem: 'Static & Uncoordinated Traffic Signals',
    causes: [
      'Fixed-time signal plans calculated from outdated manual traffic counts',
      'Absence of real-time corridor synchronization across adjacent junctions'
    ],
    effects: [
      'Vehicles forced to stop at red signals despite empty cross-streets',
      'Unnecessary engine idling, fuel burn, and intersection spillback'
    ],
    academicContext: 'Isolated fixed-time signals fail to accommodate dynamic diurnal demand fluctuations or sudden incident-induced diversion surges.',
    metric: 'Fixed-cycle junctions cause up to 40% unnecessary idle delay during off-peak and transition hours.',
    iconName: 'TrafficCone'
  },
  {
    id: 'vehicle-growth',
    problem: 'Surging Vehicular Volume vs. Static Infrastructure',
    causes: [
      'Rapid urban population growth and high rate of personal vehicle acquisition',
      'Physical right-of-way (RoW) constraints that prevent physical road widening'
    ],
    effects: [
      'Road volume-to-capacity (V/C) ratios exceeding 1.2 across key arterials',
      'Pervasive gridlock across primary, secondary, and neighborhood collector roads'
    ],
    academicContext: 'Induced demand (Downs-Thomson Paradox) indicates physical capacity expansion quickly fills with latent vehicular demand, making intelligent throughput optimization necessary.',
    metric: 'Over 20 million motorized vehicles registered annually in India, heavily outpacing road network expansion.',
    iconName: 'Car'
  },
  {
    id: 'parking-chaos',
    problem: 'Inefficient Parking Management & Cruising Traffic',
    causes: [
      'Lack of real-time parking spot availability information',
      'Unregulated curbside parking encroaching into active carriage lanes'
    ],
    effects: [
      '30% of dense downtown traffic generated solely by vehicles searching for parking',
      'Effective roadway capacity reduced by 25–40% due to illegal double-parking'
    ],
    academicContext: 'Search-for-parking cruising generates significant parasitic vehicle-kilometers traveled (VKT), amplifying arterial friction and collision probabilities.',
    metric: 'Studies indicate cruising for parking accounts for 30% of congestion in commercial central business districts.',
    iconName: 'CircleParking'
  },
  {
    id: 'accidents-safety',
    problem: 'Elevated Road Accidents & Incident Delays',
    causes: [
      'Complex multi-modal conflict points and speed disparity between vehicles',
      'Delayed emergency response and protracted incident clearance protocols'
    ],
    effects: [
      'Severe safety vulnerabilities for vulnerable road users (pedestrians and two-wheelers)',
      'Protracted non-recurrent congestion lasting hours following minor fender-benders'
    ],
    academicContext: 'Non-recurrent incidents account for over 50% of total urban system delay; without automated CCTV incident detection, detection-to-clearance times remain elevated.',
    metric: 'Over 4.5 lakh road crashes reported annually in India (MoRTH), with urban junctions presenting critical collision clusters.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'air-pollution',
    problem: 'Air Pollution & Carbon Emissions from Idling',
    causes: [
      'Repetitive stop-and-go acceleration cycles in dense traffic queues',
      'Prolonged engine idling at unresponsive red signals and bottlenecks'
    ],
    effects: [
      'Concentrated microclimate spikes of particulate matter (PM2.5, PM10), NOx, and CO',
      'Acute public health impacts on roadside residents and active commuters'
    ],
    academicContext: 'Vehicular internal combustion engines operate at minimum thermal and combustion efficiency during low-speed crawling and idle states, generating maximum specific emissions.',
    metric: 'Urban stop-and-go traffic increases vehicular emissions by 200–300% compared to smooth steady-state arterial flow.',
    iconName: 'Wind'
  }
];
