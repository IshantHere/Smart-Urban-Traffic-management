import { LocationPreset } from '../types/traffic';

export const LOCATION_PRESETS: LocationPreset[] = [
  {
    id: 'delhi-cp',
    name: 'New Delhi',
    state: 'Delhi NCR',
    landmark: 'Connaught Place & Outer Ring Road',
    corridorName: 'Connaught Circus - Barakhamba Corridor',
    lat: 28.6328,
    lon: 77.2197,
    zoom: 14,
    description: 'Central commercial and administrative hub experiencing high multidirectional arterial traffic and rotary congestion.'
  },
  {
    id: 'bengaluru-silkboard',
    name: 'Bengaluru',
    state: 'Karnataka',
    landmark: 'Central Silk Board Junction',
    corridorName: 'Outer Ring Road - Hosur Road Interchange',
    lat: 12.9172,
    lon: 77.6228,
    zoom: 14,
    description: 'High-density tech corridor connecting Electronic City, BTM Layout, and HSR Layout; historically a major urban bottleneck.'
  },
  {
    id: 'mumbai-bkc',
    name: 'Mumbai',
    state: 'Maharashtra',
    landmark: 'Bandra-Kurla Complex (BKC)',
    corridorName: 'BKC Connector - Western Express Highway',
    lat: 19.0657,
    lon: 77.8687,
    zoom: 14,
    description: 'Premier financial district experiencing heavy directional peak-hour commuter flows and junction queuing.'
  },
  {
    id: 'hyderabad-hitec',
    name: 'Hyderabad',
    state: 'Telangana',
    landmark: 'HITEC City Cyber Towers',
    corridorName: 'Madhapur - Gachibowli Tech Corridor',
    lat: 17.4504,
    lon: 78.3808,
    zoom: 14,
    description: 'Major IT and financial cluster with high vehicular volume during morning and evening rush hours.'
  },
  {
    id: 'chennai-annasalai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    landmark: 'Anna Salai (Mount Road)',
    corridorName: 'Anna Salai Arterial Axis',
    lat: 13.0604,
    lon: 80.2496,
    zoom: 14,
    description: 'Primary north-south commercial arterial road carrying substantial mixed bus, two-wheeler, and car volume.'
  },
  {
    id: 'pune-hinjawadi',
    name: 'Pune',
    state: 'Maharashtra',
    landmark: 'Hinjawadi Rajiv Gandhi Infotech Park',
    corridorName: 'Wakad - Hinjawadi Phase 1 Flyover',
    lat: 18.5913,
    lon: 73.7389,
    zoom: 14,
    description: 'Suburban IT hub with acute single-corridor access bottlenecks during shift changeover hours.'
  },
  {
    id: 'kolkata-parkstreet',
    name: 'Kolkata',
    state: 'West Bengal',
    landmark: 'Park Street & Jawaharlal Nehru Road',
    corridorName: 'Central Business District Corridor',
    lat: 22.5535,
    lon: 88.3512,
    zoom: 14,
    description: 'Dense historical commercial core with narrow right-of-ways, high pedestrian volumes, and trams/taxis.'
  }
];
