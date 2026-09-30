export interface FuturePillar {
  id: string;
  title: string;
  technology: string;
  horizon: string;
  summary: string;
  academicImplications: string;
  iconName: string;
}

export const FUTURE_PILLARS: FuturePillar[] = [
  {
    id: 'v2x-communication',
    title: 'Vehicle-to-Everything (V2X) Communication',
    technology: 'Cellular-V2X (C-V2X) & DSRC (IEEE 802.11p)',
    horizon: 'Near-to-Medium Term (2025–2030)',
    summary: 'Direct wireless telemetry exchanging speed, heading, and braking data between vehicles (V2V), roadside infrastructure (V2I), and pedestrians (V2P) with sub-10 millisecond latency.',
    academicImplications: 'Enables virtual cooperative intersection management (CIM), allowing vehicles to negotiate intersection passage without requiring conventional red/amber/green visual hardware.',
    iconName: 'Radio'
  },
  {
    id: 'digital-twin-simulation',
    title: 'City-Scale Digital Twin Simulation',
    technology: 'GPU-Accelerated Micro-Simulation & Synthetic Agents',
    horizon: 'Near-Term Emerging',
    summary: 'Real-time 1:1 computational replicas of entire metropolitan road networks continuously synchronizing with streaming IoT sensor data to simulate diversion strategies before physical execution.',
    academicImplications: 'Operators can test complex traffic management hypotheses (such as emergency diversions or road closure impacts) in synthetic simulation environments prior to real-world deployment.',
    iconName: 'Layers'
  },
  {
    id: 'ev-grid-integration',
    title: 'Smart EV Charging & Grid-Integrated Traffic',
    technology: 'Vehicle-to-Grid (V2G) & Smart Energy Scheduling',
    horizon: 'Medium Term',
    summary: 'Coupling dynamic traffic routing algorithms with electrical distribution grid capacity to guide electric commercial fleets and private vehicles to optimal charging stations without straining local substations.',
    academicImplications: 'Prevents spatial clustering of EV charging demand from causing localized arterial congestion and grid overloads.',
    iconName: 'Zap'
  },
  {
    id: 'autonomous-fleet-transit',
    title: 'Connected Autonomous Mobility On-Demand (AMoD)',
    technology: 'Level 4/5 Autonomous Shuttles & Platooning Systems',
    horizon: 'Longer Term (2030+)',
    summary: 'High-density shared autonomous shuttles operating as flexible, demand-responsive transit systems that dynamically platoon closely together to triple the effective passenger capacity of road lanes.',
    academicImplications: 'Replaces individual car ownership models with high-efficiency multi-passenger shared autonomous services, drastically reducing parking footprint requirements.',
    iconName: 'Cpu'
  }
];
