# Smart Urban Traffic Management Strategies
### CHE 110 Continuous Assessment Project

An interactive academic project and educational website exploring how modern cyber-physical technologies, real-time spatial telemetry, and computational modeling can alleviate urban traffic congestion and enhance mobility—with an in-depth focus on the Indian urban landscape.

---

## 1. Project Overview

Urban traffic congestion represents a classic multi-variable optimization problem constrained by static physical rights-of-way and non-linear peak-demand queuing. Traditional civil engineering solutions centered exclusively on roadway expansion (widening asphalt) often fail due to the Downs-Thomson Paradox and induced demand.

This project demonstrates how **Smart Urban Traffic Management (SUTM)** utilizes closed-loop sensor-data-intelligence cycles to:
- Dynamically calibrate traffic signal cycle times and offsets.
- Detect roadway incidents and bottlenecks in seconds via computer vision.
- Minimize search-traffic congestion using IoT smart parking systems.
- Prioritize public transit (buses and metro feeders) at intersections.
- Stream live traffic telemetry to commuters and municipal traffic command centers.

The website also features a **Live Traffic Monitor** demonstration across key Indian arterial corridors.

---

## 2. Core Features & Information Architecture

The website is structured as a single-page scrolling academic resource:

1. **Hero Section:** Concise introduction, project context, and the fundamental paradigm: `Traffic → Data → Intelligence → Better Mobility`.
2. **The Traffic Problem:** Problem → Effect breakdown covering recurrent congestion, static signaling, surging vehicle volumes, parking cruising, collision hotspots, and vehicular emissions.
3. **What is Smart Traffic Management?:** Academic definition contrasting open-loop vs. closed-loop control, featuring an interactive 7-stage SVG workflow diagram.
4. **Six Core Strategies:**
   - *Strategy 1:* Intelligent Traffic Signals (Adaptive green-splits, SCOOT/SCATS/CoSiCoSt algorithms).
   - *Strategy 2:* AI & Predictive Analytics (Spatial-temporal graph neural networks, bottleneck forecasting).
   - *Strategy 3:* CCTV & Computer Vision Traffic Monitoring (ANPR, queue density analytics, automated incident detection).
   - *Strategy 4:* Smart Parking Systems (IoT magnetometers, dynamic VMS, cruising traffic reduction).
   - *Strategy 5:* Public Transport Integration (Transit Signal Priority - TSP, live GTFS-RT tracking).
   - *Strategy 6:* Real-Time Traveler Information Systems (Floating car data - FCD, dynamic routing).
5. **Live Traffic Monitor (Practical Demonstration):**
   - Interactive spatial map rendered with CartoDB Positron minimalist academic basemap tiles.
   - Live traffic flow overlay powered by the **TomTom Traffic Flow API v4**.
   - Preset selector for 7 Indian metropolitan arterial hubs (New Delhi, Bengaluru, Mumbai, Hyderabad, Chennai, Pune, Kolkata).
   - Real-time flow analytics: observed speed, free-flow speed, congestion delay index percentage, estimated segment travel time, and sensor confidence.
   - Dynamic status badges: *Normal Flow*, *Moderate Delay*, *Heavy Congestion*, or *Demonstration Mode*.
   - Educational curriculum tie-in: *"How Live Traffic Data Supports Smart Traffic Management"*.
6. **Smart Traffic in India:**
   - Operational initiatives: MoHUA Smart Cities Mission (ICCC in 100 cities), Delhi ITMS, Bengaluru B-TRAC/ASTaC, Mumbai ATCS, and NHAI FASTag electronic tolling.
   - Unique engineering challenges: Heterogeneous mixed traffic (non-lane-based flow), monsoon waterlogging resilience, telecommunication continuity, and irregular intersection geometries.
7. **Systemic Benefits vs. Implementation Challenges:** Balanced two-column engineering evaluation (environmental, safety, and throughput gains vs. high CapEx, privacy concerns, and cybersecurity).
8. **Future of Urban Traffic:** Cellular-V2X (Vehicle-to-Everything), digital twin city simulation, smart EV charging coordination, and connected autonomous shuttles.
9. **Academic Conclusion:** Synthesis of key engineering takeaways for CHE 110 presentation and defense.
10. **References & Provenance:** Traceable citations to MoHUA, MoRTH, IRC:93-1985, CSIR-CRRI, and TomTom documentation.

---

## 3. Technology Stack

- **Frontend Framework:** React 18 / 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Light academic palette: pure whites, slate-50, dark charcoal typography, academic blue `#2563eb`)
- **Icons:** Lucide React
- **Mapping & GIS:** Google Maps Platform (`@vis.gl/react-google-maps`, Google Maps JavaScript API with native `TrafficLayer`, and interactive Google Maps Embed) + Leaflet / OpenStreetMap fallback
- **Live Traffic API:** TomTom Traffic Flow API v4 (Segment Flow Data & Raster Flow Tiles)
- **Deployment Compatibility:** Vercel, Netlify, GitHub Pages, Cloudflare Pages

---

## 4. Local Setup & Installation

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Step-by-Step Instructions

1. **Clone or Navigate to the Project Directory:**
   ```bash
   cd "/Users/ishantsingh/Documents/Che project"
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional for Live API):**
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - (See Section 5 below to obtain a free TomTom API key, or leave it blank to run in Demonstration Mode).

4. **Start the Local Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` (or the port shown in your terminal).

---

## 5. Traffic API Configuration (TomTom Traffic Flow)

The application isolates provider-specific logic inside `src/services/trafficService.ts`.

### How to Get a Free TomTom Developer API Key (Takes 2 minutes, no credit card required):
1. Visit the [TomTom Developer Portal](https://developer.tomtom.com/).
2. Click **Register** to create a free student/developer account.
3. Once logged in, go to **My Dashboard** → **Keys**.
4. Click **Add a Key** and name it (e.g. `CHE-110-Traffic-Project`).
5. Ensure the **Traffic Flow API** and **Traffic Map Tile API** products are checked.
6. Copy the generated Key and paste it into your `.env` file:
   ```env
   VITE_TRAFFIC_API_KEY=your_copied_key_here
   ```
7. Restart your development server (`npm run dev`). The top navbar indicator and monitor banner will now display **"Live API Active"**.

### Demonstration Mode (Zero-Configuration Fallback)
If no API key is provided, the application automatically enters **Demonstration Mode**:
- Prominently labeled with an alert: `"Live traffic data unavailable — demonstration mode"`.
- Displays calibrated mathematical models for the selected Indian metropolitan intersections.
- Every simulated readout is explicitly tagged `[DEMONSTRATION DATA - NOT LIVE]`.
- Strictly adheres to the project's anti-hallucination rules.

---

## 6. Development & Build Commands

| Command | Action |
|---|---|
| `npm run dev` | Starts the Vite local development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript (`tsc`) and builds the optimized production bundle in `dist/`. |
| `npm run preview` | Locally serves the production `dist/` bundle for pre-deployment testing. |

---

## 7. Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Under **Environment Variables**, add:
   - Key: `VITE_TRAFFIC_API_KEY`
   - Value: *(Your TomTom developer key)*
6. Click **Deploy**. Your academic project will be live with a global HTTPS URL!

### Deploying to Netlify
1. Sign in to [Netlify](https://www.netlify.com/) and select **Add new site** → **Import an existing project**.
2. Select your repository.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. In **Site Configuration** → **Environment Variables**, add `VITE_TRAFFIC_API_KEY`.
5. Click **Deploy Site**.

---

## 8. API Licensing & Attribution

- **Base Map Cartography:** © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, under Open Database License (ODbL). Tiles courtesy of © [CARTO](https://carto.com/attributions).
- **Traffic Telemetry:** © [TomTom International BV](https://developer.tomtom.com/), used in accordance with the TomTom Developer Terms and Conditions.
- **Icons:** [Lucide React](https://lucide.dev/), MIT License.
- **Academic Citation:** Designed for academic assessment under the CHE 110 curriculum. All government initiatives (MoHUA, MoRTH, NHAI) reference official public domain reports.
