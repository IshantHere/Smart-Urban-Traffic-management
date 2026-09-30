/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAPS_API_KEY?: string;
  readonly VITE_TRAFFIC_API_KEY?: string;
  readonly VITE_TOMTOM_API_KEY?: string;
  readonly VITE_MAP_PROVIDER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
