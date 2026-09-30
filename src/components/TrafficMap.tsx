import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { TrafficFlowData, LocationPreset } from '../types/traffic';
import { isLiveConfigured } from '../services/trafficService';

interface TrafficMapProps {
  lat: number;
  lon: number;
  zoom?: number;
  trafficData: TrafficFlowData | null;
  preset?: LocationPreset;
}

export const TrafficMap: React.FC<TrafficMapProps> = ({
  lat,
  lon,
  zoom = 14,
  trafficData,
  preset,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const trafficLayerRef = useRef<L.TileLayer | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const demoCorridorsRef = useRef<L.LayerGroup | null>(null);

  const liveConfigured = isLiveConfigured();
  const apiKey = import.meta.env.VITE_TRAFFIC_API_KEY || import.meta.env.VITE_TOMTOM_API_KEY || '';

  // Initialize map once
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Fix default Leaflet icon paths
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(mapContainerRef.current, {
        center: [lat, lon],
        zoom: zoom,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // CartoDB Positron Light basemap (Clean, minimal, academic design)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Create group for demo corridor lines
      demoCorridorsRef.current = L.layerGroup().addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update center position when lat/lon/zoom change
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.setView([lat, lon], zoom, {
      animate: true,
      duration: 0.8,
    });
  }, [lat, lon, zoom]);

  // Update marker and traffic layer
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Update marker
    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lon]);
    } else {
      const customIcon = L.divIcon({
        className: 'custom-traffic-pin',
        html: `<div style="
          width: 24px;
          height: 24px;
          background-color: #2563eb;
          border: 3px solid #ffffff;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      markerRef.current = L.marker([lat, lon], { icon: customIcon }).addTo(map);
    }

    // Bind popup info
    const locationName = preset?.landmark || `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
    const statusText = trafficData?.status ? trafficData.status.toUpperCase() : 'MONITORED';
    const modeText = trafficData?.isLive ? 'LIVE DATA' : 'DEMO MODE';
    
    markerRef.current.bindPopup(`
      <div style="font-family: Inter, sans-serif; font-size: 12px; line-height: 1.4;">
        <strong style="color: #0f172a; font-size: 13px;">${locationName}</strong><br/>
        <span style="color: #2563eb; font-weight: 600;">${modeText}</span> &bull; 
        <span>Status: <b>${statusText}</b></span><br/>
        <span>Current Speed: <b>${trafficData?.currentSpeed ?? '--'} km/h</b></span><br/>
        <span>Free-Flow: <b>${trafficData?.freeFlowSpeed ?? '--'} km/h</b></span>
      </div>
    `);

    // Manage Traffic Layer
    if (liveConfigured && apiKey) {
      // Remove demo corridors if previously drawn
      demoCorridorsRef.current?.clearLayers();

      // Add or update TomTom live traffic raster tile layer
      if (!trafficLayerRef.current) {
        trafficLayerRef.current = L.tileLayer(
          `https://api.tomtom.com/traffic/map/4/tile/flow/relative0/{z}/{x}/{y}.png?key=${encodeURIComponent(apiKey)}`,
          {
            attribution: '&copy; <a href="https://www.tomtom.com">TomTom</a> Real-Time Traffic',
            maxZoom: 18,
            opacity: 0.85,
          }
        ).addTo(map);
      }
    } else {
      // Demonstration mode: Draw simulated demonstration corridors around the selected center
      if (trafficLayerRef.current) {
        map.removeLayer(trafficLayerRef.current);
        trafficLayerRef.current = null;
      }

      if (demoCorridorsRef.current) {
        demoCorridorsRef.current.clearLayers();

        // Color based on status
        let strokeColor = '#16a34a'; // normal
        if (trafficData?.status === 'heavy') strokeColor = '#dc2626';
        else if (trafficData?.status === 'moderate') strokeColor = '#d97706';

        // Draw radial / arterial corridors representing calibrated simulation
        const offset = 0.008;
        const line1 = [
          [lat - offset, lon - offset],
          [lat, lon],
          [lat + offset, lon + offset],
        ];
        const line2 = [
          [lat + offset, lon - offset],
          [lat, lon],
          [lat - offset, lon + offset],
        ];

        const corridorOptions: L.PolylineOptions = {
          color: strokeColor,
          weight: 6,
          opacity: 0.75,
          lineCap: 'round',
        };

        const poly1 = L.polyline(line1 as [number, number][], corridorOptions);
        const poly2 = L.polyline(line2 as [number, number][], {
          ...corridorOptions,
          color: trafficData?.status === 'heavy' ? '#d97706' : strokeColor,
        });

        poly1.bindTooltip('Simulated Arterial Corridor [DEMO]', { sticky: true });
        poly2.bindTooltip('Simulated Secondary Arterial [DEMO]', { sticky: true });

        demoCorridorsRef.current.addLayer(poly1);
        demoCorridorsRef.current.addLayer(poly2);
      }
    }
  }, [lat, lon, trafficData, preset, liveConfigured, apiKey]);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] rounded-xl overflow-hidden border border-charcoal-200 shadow-sm bg-charcoal-100">
      <div ref={mapContainerRef} className="w-full h-full z-0" />
      
      {/* Map Header Overlay */}
      <div className="absolute top-3 left-3 z-[400] bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-charcoal-200 shadow-xs text-xs">
        <span className="font-semibold text-charcoal-900">
          {preset?.name || 'Selected Location'}
        </span>
        <span className="text-charcoal-400 mx-1.5">&bull;</span>
        <span className="text-charcoal-600 font-mono">
          {lat.toFixed(4)}°N, {lon.toFixed(4)}°E
        </span>
      </div>

      {/* Mode Tag Overlay */}
      <div className="absolute top-3 right-3 z-[400]">
        {liveConfigured ? (
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            TomTom Live Stream
          </span>
        ) : (
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-300 shadow-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Demonstration Mode
          </span>
        )}
      </div>

      {/* Bottom Disclaimer for Demo Mode */}
      {!liveConfigured && (
        <div className="absolute bottom-2 left-2 right-2 z-[400] bg-white/95 backdrop-blur-xs border border-amber-200 rounded-md p-2 text-center text-[11px] text-amber-900 shadow-xs">
          <strong>Academic Demonstration Mode:</strong> Displaying calibrated corridor models for Indian arterial intersections. Set <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[10px]">VITE_TRAFFIC_API_KEY</code> in <code className="font-mono text-[10px]">.env</code> to stream live TomTom traffic tiles.
        </div>
      )}
    </div>
  );
};
