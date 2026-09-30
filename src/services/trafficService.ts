import { TrafficFlowData, TrafficStatus, LocationPreset } from '../types/traffic';

/**
 * Traffic Service Abstraction Layer
 * Isolates provider-specific logic (TomTom Traffic API / Fallback Demonstration Engine)
 * Adheres strictly to anti-hallucination rules:
 * - isLive is ONLY true when genuine live data is retrieved from verified API endpoints.
 * - When credentials are unavailable or API calls fail, clearly tags data as demonstration mode.
 */

const API_KEY = import.meta.env.VITE_TRAFFIC_API_KEY || import.meta.env.VITE_TOMTOM_API_KEY || '';

/**
 * Checks whether a live API provider key is configured in the environment
 */
export function isLiveConfigured(): boolean {
  return typeof API_KEY === 'string' && API_KEY.trim().length > 0 && API_KEY !== 'your_tomtom_api_key_here';
}

/**
 * Interprets quantitative speed and delay metrics into standardized UI traffic statuses
 * Formula: Delay Ratio = (FreeFlowSpeed - CurrentSpeed) / FreeFlowSpeed
 * - Delay < 20%: Normal (Free-flowing / minimal impedance)
 * - 20% <= Delay < 50%: Moderate (Sluggish flow / approaching capacity)
 * - Delay >= 50% or Road Closure: Heavy (Severe congestion / bottleneck)
 */
export function calculateTrafficStatus(currentSpeed: number, freeFlowSpeed: number, roadClosure: boolean): { status: TrafficStatus; congestionIndex: number } {
  if (roadClosure) {
    return { status: 'heavy', congestionIndex: 100 };
  }
  
  if (freeFlowSpeed <= 0) {
    return { status: 'normal', congestionIndex: 0 };
  }

  const speedDiff = Math.max(0, freeFlowSpeed - currentSpeed);
  const congestionIndex = Math.min(100, Math.round((speedDiff / freeFlowSpeed) * 100));

  let status: TrafficStatus = 'normal';
  if (congestionIndex >= 50) {
    status = 'heavy';
  } else if (congestionIndex >= 20) {
    status = 'moderate';
  } else {
    status = 'normal';
  }

  return { status, congestionIndex };
}

/**
 * Fetch real-time traffic flow segment data for a specific geographic coordinate.
 * Uses official TomTom Traffic Flow API v4 endpoint:
 * https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json?key={key}&point={lat},{lon}&unit=KMPH
 */
export async function fetchTrafficFlow(
  lat: number,
  lon: number,
  preset?: LocationPreset
): Promise<TrafficFlowData> {
  const configured = isLiveConfigured();

  if (!configured) {
    // Graceful, transparent demonstration mode
    return getDemonstrationTraffic(lat, lon, preset, 'Live traffic API key is not configured in .env');
  }

  try {
    const url = `https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json?key=${encodeURIComponent(
      API_KEY
    )}&point=${lat},${lon}&unit=KMPH`;

    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 403 || response.status === 401) {
        console.warn('Traffic API authorization failed. Falling back to demonstration mode.');
        return getDemonstrationTraffic(
          lat,
          lon,
          preset,
          'Live traffic API credentials unauthorized or quota exceeded'
        );
      }
      throw new Error(`Traffic API HTTP error: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    const segment = json.flowSegmentData;

    if (!segment) {
      throw new Error('Malformed traffic API response: missing flowSegmentData');
    }

    const currentSpeed = Math.round(segment.currentSpeed || 0);
    const freeFlowSpeed = Math.round(segment.freeFlowSpeed || currentSpeed);
    const currentTravelTime = Math.round(segment.currentTravelTime || 0);
    const freeFlowTravelTime = Math.round(segment.freeFlowTravelTime || currentTravelTime);
    const confidence = typeof segment.confidence === 'number' ? segment.confidence : 1.0;
    const roadClosure = Boolean(segment.roadClosure);

    const { status, congestionIndex } = calculateTrafficStatus(currentSpeed, freeFlowSpeed, roadClosure);

    return {
      currentSpeed,
      freeFlowSpeed,
      congestionIndex,
      currentTravelTime,
      freeFlowTravelTime,
      confidence,
      roadClosure,
      status,
      isLive: true,
      dataSource: 'TomTom Live Traffic Flow API v4 (Official REST Stream)',
      lastUpdated: new Date().toISOString(),
      roadName: segment.name || preset?.corridorName || 'Monitored Arterial Corridor',
      coordinates: { lat, lon },
    };
  } catch (err: unknown) {
    console.error('Live Traffic API fetch failure:', err);
    // Fall back to calibrated demonstration mode with explicit disclaimer
    const errorMsg = err instanceof Error ? err.message : 'Network error communicating with Traffic API';
    return getDemonstrationTraffic(lat, lon, preset, `Live API temporary failure: ${errorMsg}`);
  }
}

/**
 * Returns realistic, calibrated demonstration data when live API is unavailable.
 * Explicitly sets isLive: false and tags every readout with demonstration metadata.
 */
function getDemonstrationTraffic(
  lat: number,
  lon: number,
  preset?: LocationPreset,
  reason?: string
): TrafficFlowData {
  // Preset-specific calibrated baselines for Indian arterial corridors
  let baseFreeFlow = 45;
  let baseCurrent = 28;
  let corridor = preset?.corridorName || 'Urban Arterial Corridor';

  if (preset?.id === 'bengaluru-silkboard') {
    baseFreeFlow = 45;
    baseCurrent = 14; // Renowned bottleneck
  } else if (preset?.id === 'delhi-cp') {
    baseFreeFlow = 50;
    baseCurrent = 32;
  } else if (preset?.id === 'mumbai-bkc') {
    baseFreeFlow = 50;
    baseCurrent = 24;
  } else if (preset?.id === 'hyderabad-hitec') {
    baseFreeFlow = 55;
    baseCurrent = 36;
  } else if (preset?.id === 'chennai-annasalai') {
    baseFreeFlow = 45;
    baseCurrent = 26;
  } else if (preset?.id === 'pune-hinjawadi') {
    baseFreeFlow = 50;
    baseCurrent = 20;
  } else if (preset?.id === 'kolkata-parkstreet') {
    baseFreeFlow = 40;
    baseCurrent = 19;
  }

  // Slight realistic dynamic variance based on current minute so UI updates on manual refresh
  const minute = new Date().getMinutes();
  const variance = (minute % 7) - 3; // -3 to +3 km/h
  const currentSpeed = Math.max(10, baseCurrent + variance);
  const freeFlowSpeed = baseFreeFlow;
  const currentTravelTime = Math.round((1200 / (currentSpeed * (1000 / 3600)))); // ~1.2 km segment
  const freeFlowTravelTime = Math.round((1200 / (freeFlowSpeed * (1000 / 3600))));
  const { status, congestionIndex } = calculateTrafficStatus(currentSpeed, freeFlowSpeed, false);

  return {
    currentSpeed,
    freeFlowSpeed,
    congestionIndex,
    currentTravelTime,
    freeFlowTravelTime,
    confidence: 0.85,
    roadClosure: false,
    status,
    isLive: false,
    dataSource: 'Calibrated Academic Demonstration Engine (Simulated Flow Model)',
    lastUpdated: new Date().toISOString(),
    roadName: corridor,
    coordinates: { lat, lon },
    demonstrationReason: reason || 'Live traffic credentials not configured',
  };
}

/**
 * Returns the tile URL template for map layers
 */
export function getTrafficTileLayer(): { url: string; attribution: string; isLive: boolean } {
  if (isLiveConfigured()) {
    return {
      url: `https://api.tomtom.com/traffic/map/4/tile/flow/relative0/{z}/{x}/{y}.png?key=${encodeURIComponent(
        API_KEY
      )}`,
      attribution: '&copy; <a href="https://www.tomtom.com" target="_blank" rel="noreferrer">TomTom</a> Real-Time Traffic',
      isLive: true,
    };
  }
  return {
    url: '',
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    isLive: false,
  };
}
