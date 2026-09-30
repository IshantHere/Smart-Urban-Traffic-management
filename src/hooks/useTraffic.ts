import { useState, useEffect, useCallback, useRef } from 'react';
import { TrafficFlowData, LocationPreset } from '../types/traffic';
import { fetchTrafficFlow, isLiveConfigured } from '../services/trafficService';
import { LOCATION_PRESETS } from '../data/presets';

export function useTraffic() {
  const [selectedPreset, setSelectedPreset] = useState<LocationPreset>(LOCATION_PRESETS[0]);
  const [customLocation, setCustomLocation] = useState<{ lat: number; lon: number; name: string } | null>(null);
  const [trafficData, setTrafficData] = useState<TrafficFlowData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);
  const isConfigured = isLiveConfigured();

  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const currentLat = customLocation ? customLocation.lat : selectedPreset.lat;
  const currentLon = customLocation ? customLocation.lon : selectedPreset.lon;
  const activePreset = customLocation ? undefined : selectedPreset;

  const loadTraffic = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchTrafficFlow(currentLat, currentLon, activePreset);
      if (isMounted.current) {
        setTrafficData(data);
        setLastRefreshed(new Date());
        setIsLoading(false);
      }
    } catch (err) {
      if (isMounted.current) {
        setError(err instanceof Error ? err.message : 'Failed to retrieve traffic information.');
        setIsLoading(false);
      }
    }
  }, [currentLat, currentLon, activePreset]);

  // Fetch when location changes
  useEffect(() => {
    loadTraffic();
  }, [loadTraffic]);

  const selectPreset = useCallback((preset: LocationPreset) => {
    setCustomLocation(null);
    setSelectedPreset(preset);
  }, []);

  const setManualCoords = useCallback((lat: number, lon: number, name: string = 'Custom Point') => {
    setCustomLocation({ lat, lon, name });
  }, []);

  return {
    selectedPreset,
    customLocation,
    currentLat,
    currentLon,
    trafficData,
    isLoading,
    error,
    lastRefreshed,
    isConfigured,
    refresh: loadTraffic,
    selectPreset,
    setManualCoords,
  };
}
