export type TrafficStatus = 'normal' | 'moderate' | 'heavy' | 'unknown';

export interface LocationPreset {
  id: string;
  name: string;
  state: string;
  landmark: string;
  lat: number;
  lon: number;
  zoom: number;
  description: string;
  corridorName: string;
}

export interface TrafficFlowData {
  currentSpeed: number; // km/h
  freeFlowSpeed: number; // km/h
  congestionIndex: number; // Percentage delay: ((freeFlow - current) / freeFlow) * 100
  currentTravelTime: number; // seconds
  freeFlowTravelTime: number; // seconds
  confidence: number; // 0.0 - 1.0 confidence score
  roadClosure: boolean;
  status: TrafficStatus;
  isLive: boolean; // True ONLY if fetched from live API. False if demonstration mode
  dataSource: string;
  lastUpdated: string; // ISO string
  roadName?: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  demonstrationReason?: string;
}

export interface TrafficProviderConfig {
  apiKey?: string;
  provider: 'tomtom' | 'demo';
}
