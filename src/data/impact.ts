export interface ImpactCategory {
  title: string;
  description: string;
  items: {
    heading: string;
    detail: string;
    metric?: string;
  }[];
}

export const BENEFITS_DATA: ImpactCategory = {
  title: 'Quantifiable Systemic Benefits',
  description: 'Evidence-based improvements achieved through dynamic data-driven traffic management.',
  items: [
    {
      heading: 'Arterial Travel Time Reduction',
      detail: 'Coordinated adaptive signals minimize unnecessary red-light deceleration and idle waiting, smoothing vehicle progression along high-capacity corridors.',
      metric: '15% – 25% reduction in average commute trip delay on synchronized corridors.'
    },
    {
      heading: 'Reduction in Stop-and-Go Emissions',
      detail: 'Smoother vehicular flow significantly cuts internal combustion engine idling, lowering localized particulate matter (PM2.5), nitrogen oxides (NOx), and carbon monoxide emissions.',
      metric: '10% – 18% decrease in junction-area fuel consumption and idling emissions.'
    },
    {
      heading: 'Enhanced Intersection Road Safety',
      detail: 'Automated Red Light Violation Detection (RLVD), radar speed enforcement, and dynamic clearance intervals directly reduce high-speed right-angle and broadside collisions.',
      metric: '20% – 35% decline in signal-running infractions and severe intersection crashes.'
    },
    {
      heading: 'Rapid Emergency Vehicle Dispatch',
      detail: 'Transit and emergency signal preemption dynamically clears green paths for ambulances and fire trucks, saving critical response minutes.',
      metric: 'Up to 40% faster emergency response clearance along pre-empted hospital routes.'
    },
    {
      heading: 'Data-Informed Urban Planning',
      detail: 'Continuous sensor logging replaces costly one-off manual sample counts with continuous origin-destination and volume-capacity analytics for evidence-based infrastructure investment.',
      metric: '100% continuous data visibility versus traditional biennial manual counts.'
    }
  ]
};

export const CHALLENGES_DATA: ImpactCategory = {
  title: 'Technical & Socio-Economic Challenges',
  description: 'Real-world hurdles and structural constraints that prevent technology from being a panacea.',
  items: [
    {
      heading: 'Substantial Capital & Operational Expenditure',
      detail: 'Deploying thousands of optical sensors, server clusters, fiber backbones, and uninterruptible power units demands heavy municipal budgets and ongoing maintenance allocations.',
      metric: 'High CapEx (₹15–₹30 lakh per junction) + recurrent sensor maintenance contracts.'
    },
    {
      heading: 'Physical Right-of-Way & Road Space Deficits',
      detail: 'Software optimization cannot expand physical asphalt. When volume exceeds the absolute theoretical carrying capacity of a narrow road corridor, gridlock occurs regardless of algorithm sophistication.',
      metric: 'Algorithms cannot overcome volume-to-capacity ratios exceeding 1.4.'
    },
    {
      heading: 'Data Privacy & Surveillance Concerns',
      detail: 'Ubiquitous Automated Number Plate Recognition (ANPR) and facial-resolution CCTV networks raise civil liberties, digital privacy, and automated profiling questions that demand strict data governance frameworks.',
      metric: 'Need for strict data retention policies, cryptographic hashing, and legal guardrails.'
    },
    {
      heading: 'Cybersecurity & Infrastructure Vulnerability',
      detail: 'Connecting roadside traffic controllers to municipal IP networks exposes critical civic infrastructure to cyber threats, denial-of-service (DoS) attacks, and sensor spoofing.',
      metric: 'Mandatory air-gapping, end-to-end encryption, and robust intrusion detection.'
    },
    {
      heading: 'Inter-Agency Coordination Friction',
      detail: 'Fragmented municipal governance—divided between City Traffic Police, Municipal Corporations, Road Transport Authorities, and Metro Rail—often hinders cohesive multi-modal data sharing.',
      metric: 'Multiple independent stakeholders requiring unified operational consensus.'
    }
  ]
};
