import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { GoogleTrafficMap } from '../components/GoogleTrafficMap';
import { TrafficMap } from '../components/TrafficMap';
import { TrafficLegend } from '../components/TrafficLegend';
import { StatusBadge } from '../components/StatusBadge';
import { MetricCard } from '../components/MetricCard';
import { LoadingState } from '../components/LoadingState';
import { ErrorState } from '../components/ErrorState';
import { useTraffic } from '../hooks/useTraffic';
import { LOCATION_PRESETS } from '../data/presets';
import { 
  RefreshCw, 
  MapPin, 
  Clock, 
  Gauge, 
  AlertTriangle, 
  ShieldCheck, 
  Info,
  ArrowRight,
  TrendingDown,
  Navigation,
  Map as MapIcon
} from 'lucide-react';

export const LiveTraffic: React.FC = () => {
  const {
    selectedPreset,
    customLocation,
    currentLat,
    currentLon,
    trafficData,
    isLoading,
    error,
    lastRefreshed,
    isConfigured,
    refresh,
    selectPreset,
  } = useTraffic();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [mapEngine, setMapEngine] = useState<'google' | 'leaflet'>('google');

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    await refresh();
    setIsRefreshing(false);
  };

  const getCongestionStatus = () => {
    if (!trafficData) return 'neutral';
    if (trafficData.status === 'heavy') return 'heavy';
    if (trafficData.status === 'moderate') return 'moderate';
    return 'normal';
  };

  return (
    <section id="live-traffic" className="py-16 sm:py-20 border-b border-charcoal-200 bg-charcoal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="04 / Interactive Technical Demonstration"
          title="Live Traffic Monitor"
          subtitle="Explore real-time spatial traffic flow telemetry across major Indian metropolitan arterial corridors. Visualizes current speeds, congestion delays, and segment level of service."
        />

        {/* Live / Demonstration Mode Notice Banner */}
        {!isConfigured ? (
          <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 shadow-xs flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1 text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong className="font-semibold block sm:inline">Live traffic data unavailable — demonstration mode: </strong>
              The external traffic API credentials (<code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-xs">VITE_TRAFFIC_API_KEY</code>) are not configured. The map is operating in <strong>calibrated academic demonstration mode</strong> simulating typical peak/off-peak corridor bottlenecks. Simulated telemetry is strictly labeled as demonstration data.
            </div>
          </div>
        ) : (
          <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 shadow-xs flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1 text-xs sm:text-sm text-emerald-900 leading-relaxed">
              <strong className="font-semibold block sm:inline">Live Telemetry Active: </strong>
              Streaming verified real-time speed, travel time, and flow segment data directly from the <strong>TomTom Traffic Flow API v4</strong>.
            </div>
          </div>
        )}

        {/* City & Corridor Preset Selector */}
        <div className="mb-6 bg-white p-4 rounded-2xl border border-charcoal-200 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-700">
                Select Metropolitan Arterial Corridor
              </span>
            </div>
            <span className="text-xs text-charcoal-400">
              {LOCATION_PRESETS.length} Monitored Hubs
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {LOCATION_PRESETS.map((preset) => {
              const isSelected = selectedPreset?.id === preset.id && !customLocation;
              return (
                <button
                  key={preset.id}
                  onClick={() => selectPreset(preset)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-charcoal-50 hover:bg-charcoal-100 text-charcoal-700 border border-charcoal-200'
                  }`}
                >
                  <span className="font-bold">{preset.name}</span>
                  <span className={`text-[10px] ${isSelected ? 'text-brand-100' : 'text-charcoal-400'}`}>
                    ({preset.landmark.split('&')[0].trim()})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Monitor Console */}
        <div className="bg-white rounded-2xl border border-charcoal-200 shadow-sm p-6 sm:p-8 mb-10">
          {/* Header Bar: Location Title, Status Badge & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-charcoal-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
                  {selectedPreset.name}
                </h3>
                <span className="text-xs font-medium text-charcoal-400">&bull;</span>
                <span className="text-xs font-medium text-charcoal-600">{selectedPreset.state}</span>
              </div>
              <div className="text-xs sm:text-sm text-charcoal-600 flex items-center gap-2">
                <span className="font-semibold text-brand-700">{selectedPreset.landmark}</span>
                <span className="text-charcoal-300">|</span>
                <span className="text-charcoal-500">{selectedPreset.corridorName}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-center flex-wrap">
              {/* Map Engine Switcher */}
              <div className="inline-flex rounded-lg border border-charcoal-200 bg-charcoal-50 p-0.5 text-xs">
                <button
                  onClick={() => setMapEngine('google')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition flex items-center gap-1.5 ${
                    mapEngine === 'google'
                      ? 'bg-white text-charcoal-900 shadow-xs'
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  <MapIcon className="w-3.5 h-3.5 text-brand-600" />
                  <span>Google Maps</span>
                </button>
                <button
                  onClick={() => setMapEngine('leaflet')}
                  className={`px-2.5 py-1 rounded-md font-semibold transition ${
                    mapEngine === 'leaflet'
                      ? 'bg-white text-charcoal-900 shadow-xs'
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  <span>OpenStreetMap</span>
                </button>
              </div>

              <StatusBadge
                status={trafficData?.status || 'normal'}
                isLive={trafficData?.isLive ?? false}
                size="lg"
              />
              <button
                onClick={handleManualRefresh}
                disabled={isRefreshing || isLoading}
                className="p-2 rounded-lg border border-charcoal-200 bg-charcoal-50 hover:bg-charcoal-100 text-charcoal-700 transition disabled:opacity-50"
                title="Refresh Traffic Data"
                aria-label="Refresh traffic flow data"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-brand-600' : ''}`} />
              </button>
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="my-6">
            {mapEngine === 'google' ? (
              <GoogleTrafficMap
                lat={currentLat}
                lon={currentLon}
                zoom={selectedPreset.zoom}
                trafficData={trafficData}
                preset={selectedPreset}
              />
            ) : (
              <TrafficMap
                lat={currentLat}
                lon={currentLon}
                zoom={selectedPreset.zoom}
                trafficData={trafficData}
                preset={selectedPreset}
              />
            )}
          </div>

          {/* Traffic Legend Component */}
          <div className="mb-6">
            <TrafficLegend />
          </div>

          {/* Metric Telemetry Cards */}
          {isLoading && !trafficData ? (
            <LoadingState message="Connecting to traffic service and querying segment flow data..." />
          ) : error ? (
            <ErrorState message={error} onRetry={handleManualRefresh} />
          ) : trafficData ? (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <MetricCard
                  label="Observed Speed"
                  value={trafficData.currentSpeed}
                  unit="km/h"
                  subtext={`Free-flow: ${trafficData.freeFlowSpeed} km/h`}
                  status={getCongestionStatus()}
                  icon={<Gauge className="w-4 h-4" />}
                />

                <MetricCard
                  label="Congestion Delay Index"
                  value={`${trafficData.congestionIndex}%`}
                  subtext={
                    trafficData.congestionIndex > 50
                      ? 'Severe corridor impedance'
                      : trafficData.congestionIndex > 20
                      ? 'Sluggish approaching capacity'
                      : 'Free-flow conditions'
                  }
                  status={getCongestionStatus()}
                  icon={<TrendingDown className="w-4 h-4" />}
                />

                <MetricCard
                  label="Est. Segment Travel Time"
                  value={Math.round(trafficData.currentTravelTime / 60) || '< 1'}
                  unit="min"
                  subtext={`Free-flow time: ${Math.round(trafficData.freeFlowTravelTime / 60) || 1} min`}
                  status="neutral"
                  icon={<Clock className="w-4 h-4" />}
                />

                <MetricCard
                  label="Confidence & Road Status"
                  value={trafficData.roadClosure ? 'CLOSED' : `${Math.round(trafficData.confidence * 100)}%`}
                  unit={trafficData.roadClosure ? '' : 'conf.'}
                  subtext={trafficData.roadClosure ? 'Physical barricade or incident' : 'Sensor sample density rating'}
                  status={trafficData.roadClosure ? 'heavy' : 'neutral'}
                  icon={<ShieldCheck className="w-4 h-4" />}
                />
              </div>

              {/* Data Provenance Metadata Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-charcoal-500 pt-3 border-t border-charcoal-100">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-charcoal-700">Source:</span>
                  <span>{trafficData.dataSource}</span>
                  {!trafficData.isLive && (
                    <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                      [DEMONSTRATION DATA - NOT LIVE]
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-charcoal-400" />
                  <span>Last Updated: {lastRefreshed ? lastRefreshed.toLocaleTimeString() : 'Just now'}</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Educational Connection: Section 17 Requirement */}
        <div className="bg-white rounded-2xl border border-charcoal-200 p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200">
              Curricular Connection (CHE 110)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mt-2">
              How Live Traffic Data Supports Smart Traffic Management
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed">
              Real-time traffic flow data transforms passive surveillance into an active cyber-physical optimization system. The live telemetry displayed above feeds directly into modern municipal control architectures:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 relative">
            <div className="bg-charcoal-50 p-3 rounded-xl border border-charcoal-200 text-center">
              <span className="text-[10px] font-bold text-charcoal-400 block mb-1">01</span>
              <div className="text-xs font-bold text-charcoal-900">Real-Time Data</div>
              <div className="text-[10px] text-charcoal-500 mt-1">Continuous speed probes</div>
            </div>

            <div className="bg-charcoal-50 p-3 rounded-xl border border-charcoal-200 text-center">
              <span className="text-[10px] font-bold text-charcoal-400 block mb-1">02</span>
              <div className="text-xs font-bold text-charcoal-900">Traffic Monitoring</div>
              <div className="text-[10px] text-charcoal-500 mt-1">Arterial speed tracking</div>
            </div>

            <div className="bg-charcoal-50 p-3 rounded-xl border border-charcoal-200 text-center">
              <span className="text-[10px] font-bold text-charcoal-400 block mb-1">03</span>
              <div className="text-xs font-bold text-charcoal-900">Traffic Analysis</div>
              <div className="text-[10px] text-charcoal-500 mt-1">Delay index derivation</div>
            </div>

            <div className="bg-charcoal-50 p-3 rounded-xl border border-charcoal-200 text-center">
              <span className="text-[10px] font-bold text-charcoal-400 block mb-1">04</span>
              <div className="text-xs font-bold text-charcoal-900">Congestion Detection</div>
              <div className="text-[10px] text-charcoal-500 mt-1">Bottleneck localization</div>
            </div>

            <div className="bg-charcoal-50 p-3 rounded-xl border border-charcoal-200 text-center">
              <span className="text-[10px] font-bold text-charcoal-400 block mb-1">05</span>
              <div className="text-xs font-bold text-charcoal-900">Better Decisions</div>
              <div className="text-[10px] text-charcoal-500 mt-1">Signal plan adjustment</div>
            </div>

            <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-center">
              <span className="text-[10px] font-bold text-emerald-600 block mb-1">06</span>
              <div className="text-xs font-bold text-emerald-950">Improved Mobility</div>
              <div className="text-[10px] text-emerald-700 mt-1">Free-flowing corridors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
