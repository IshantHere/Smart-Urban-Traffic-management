import React, { useEffect, useState } from 'react';
import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps';
import { TrafficFlowData, LocationPreset } from '../types/traffic';
import { ExternalLink, Layers, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

interface GoogleTrafficMapProps {
  lat: number;
  lon: number;
  zoom?: number;
  trafficData: TrafficFlowData | null;
  preset?: LocationPreset;
}

// Inner component that attaches Google's native TrafficLayer to the active Google Map
const TrafficLayerAttachment: React.FC<{ enabled: boolean }> = ({ enabled }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    let trafficLayer: google.maps.TrafficLayer | null = null;

    if (enabled) {
      trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    }

    return () => {
      if (trafficLayer) {
        trafficLayer.setMap(null);
      }
    };
  }, [map, enabled]);

  return null;
};

// Inner component to dynamically update center and pan smoothly
const MapController: React.FC<{ lat: number; lng: number; zoom: number }> = ({ lat, lng, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.panTo({ lat, lng });
    map.setZoom(zoom);
  }, [map, lat, lng, zoom]);

  return null;
};

export const GoogleTrafficMap: React.FC<GoogleTrafficMapProps> = ({
  lat,
  lon,
  zoom = 14,
  trafficData,
  preset,
}) => {
  const apiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '').trim();
  const hasValidKey = apiKey.length > 10 && apiKey !== 'your_google_maps_api_key_here';
  const [trafficLayerActive, setTrafficLayerActive] = useState(true);

  // Direct Google Maps live traffic web URL
  const googleMapsLiveUrl = `https://www.google.com/maps/@${lat},${lon},${zoom}z/data=!5m1!1e1`;

  // Standard interactive Google Maps Embed URL with roadmap view (t=m) and traffic layer query
  const embedUrl = `https://maps.google.com/maps?q=${lat},${lon}&t=m&z=${zoom}&output=embed&layer=t`;

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-xl overflow-hidden border border-charcoal-200 shadow-sm bg-charcoal-100 flex flex-col">
      {/* Top Map Header Overlay */}
      <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-charcoal-200 shadow-xs text-xs flex items-center gap-2">
        <span className="font-bold text-charcoal-900">
          {preset?.name || 'Selected Location'}
        </span>
        <span className="text-charcoal-400">&bull;</span>
        <span className="text-charcoal-600 font-mono">
          {lat.toFixed(4)}°N, {lon.toFixed(4)}°E
        </span>
      </div>

      {/* Top Right Controls & Status Pill */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
        <a
          href={googleMapsLiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2.5 py-1.5 rounded-lg bg-white/95 hover:bg-white text-charcoal-700 border border-charcoal-200 shadow-xs text-xs font-semibold flex items-center gap-1.5 transition"
          title="Open in full Google Maps with live traffic"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 text-brand-600" />
        </a>

        {hasValidKey ? (
          <button
            onClick={() => setTrafficLayerActive(!trafficLayerActive)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border shadow-xs flex items-center gap-1.5 transition ${
              trafficLayerActive
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white text-charcoal-700 border-charcoal-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Traffic Layer: {trafficLayerActive ? 'ON' : 'OFF'}</span>
          </button>
        ) : (
          <span className="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Google Maps Live Embedded
          </span>
        )}
      </div>

      {/* Map Content Rendering */}
      <div className="w-full h-full relative">
        {hasValidKey ? (
          // Programmatic Google Maps JS API with TrafficLayer via @vis.gl/react-google-maps
          <APIProvider apiKey={apiKey}>
            <Map
              defaultCenter={{ lat, lng: lon }}
              defaultZoom={zoom}
              style={{ width: '100%', height: '100%' }}
              disableDefaultUI={false}
              zoomControl={true}
              internalUsageAttributionIds={['gmp_git_agentskills_v1']}
              gestureHandling="cooperative"
            >
              <MapController lat={lat} lng={lon} zoom={zoom} />
              <TrafficLayerAttachment enabled={trafficLayerActive} />
            </Map>
          </APIProvider>
        ) : (
          // Instant Interactive Google Maps Embed (No Key Required)
          <iframe
            key={`${lat}-${lon}-${zoom}`}
            title={`Google Map - ${preset?.name || 'Selected Location'}`}
            src={embedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>

      {/* Bottom Information & Disclaimer Banner */}
      <div className="absolute bottom-2 left-2 right-2 z-20 bg-white/95 backdrop-blur-xs border border-charcoal-200 rounded-lg p-2.5 text-center text-xs text-charcoal-700 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-left">
          <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
          <span>
            <strong>Google Maps Live Traffic:</strong> Real-time road congestion lines (Green = Free flow, Orange = Moderate, Red = Heavy).
          </span>
        </div>
        <div className="text-[11px] text-charcoal-500 font-mono flex items-center gap-1">
          <span>{hasValidKey ? 'Google Maps JS API v3' : 'Interactive Google Maps Embed'}</span>
          <span>&bull;</span>
          <span>© Google Maps</span>
        </div>
      </div>
    </div>
  );
};
