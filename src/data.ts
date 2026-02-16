export type BlueprintKey =
  | "web_apps"
  | "mobile_apps"
  | "api_microservices"
  | "game_dev"
  | "iot_embedded"
  | "desktop_apps"
  | "real_time"
  | "cloud_saas"
  | "ecommerce"
  | "ai_ml_platforms"
  | "data_engineering"
  | "devops_infra"
  | "blockchain_web3"
  | "robotics"
  | "ar_vr_metaverse";

export type BlueprintTemplate = {
  title: string;
  source_inspiration: string;
  content: string;
};

export const BLUEPRINT_DATA: Record<BlueprintKey, BlueprintTemplate> = {
  web_apps: {
    title: "Web Applications (Frontend + Backend)",
    source_inspiration: "Next.js / Django / Shopify",
    content: `# WEB_APPLICATION_MASTER_SPEC.md\n## 1. Purpose & Core Flows\n- **Client-Side:** [Framework: React/Vue/Next]\n- **Server-Side:** [Language: Node/Go/Python]\n- **Rendering Strategy:** [SSG/SSR/ISR/SPA]\n\n## 2. System Architecture\n- **Entry Point:** Edge/CDN -> Load Balancer -> Web Server.\n- **State Management:** [Zustand/Redux/Context]\n- **Data Fetching:** [SWR/React Query/GraphQL]\n\n## 3. Agent Development Rules\n- Use functional components with hooks only.\n- NEVER use 'any' type in TypeScript definitions.\n- Components must be documented with JSDoc @param tags.\n- Implement 'Error Boundaries' at the route level.\n\n## 4. Security & Performance\n- **CSP Headers:** Restricted to self and trusted CDNs.\n- **Hydration:** Maximize TTI (Time to Interactive) < 2s.\n- **Auth:** JWT stored in HttpOnly cookies.\n\n## 5. CI/CD & Testing\n- Unit: Vitest | E2E: Playwright | Quality: SonarQube.`
  },
  mobile_apps: {
    title: "Mobile Applications (Native + Cross-Platform)",
    source_inspiration: "React Native / Flutter / Uber Engineering",
    content: `# MOBILE_APP_MASTER_SPEC.md\n## 1. Platform Strategy\n- **Type:** [Native (Swift/Kotlin) / Hybrid (RN/Flutter)]\n- **Bridge/Renderer:** [Fabric/JSI/Skia]\n\n## 2. Navigation & State\n- **Pattern:** Navigation Stack + Deep Linking.\n- **Offline-First:** [SQLite/Realm/WatermelonDB] with sync-conflict resolution.\n\n## 3. Agent Coding Guidelines\n- Optimize for 60FPS; avoid unnecessary re-renders in Lists.\n- Use Native Modules only when JS performance is insufficient.\n- Assets must be optimized per platform (SVG vs PNG).\n\n## 4. Release & CI/CD\n- **Beta:** TestFlight / Firebase App Distribution.\n- **OTA Updates:** [CodePush/Expo] for urgent fixes.\n- **Review:** App Store/Play Store compliance checklist.`
  },
  api_microservices: {
    title: "API Backends & Microservices",
    source_inspiration: "Stripe / Netflix IEP / AWS",
    content: `# API_BACKEND_MASTER_SPEC.md\n## 1. Communication Protocol\n- **Interface:** [REST / gRPC / GraphQL]\n- **Auth:** [OAuth2 / mTLS / API Keys]\n\n## 2. Resilience Patterns\n- **Circuit Breaker:** Implement via [Resilience4j/Hystrix].\n- **Idempotency:** 'Idempotency-Key' header required for POST/PATCH.\n- **Rate Limiting:** Sliding window algorithm at Gateway.\n\n## 3. Data Integrity\n- Database-per-service pattern.\n- Saga pattern for distributed transactions.\n- Zero-downtime migrations (Expand/Contract pattern).\n\n## 4. Observability\n- **Traces:** OpenTelemetry integration.\n- **Logs:** Structured JSON logs (ELK/Splunk compatible).\n- **Metrics:** RED Pattern (Rate, Errors, Duration).`
  },
  game_dev: {
    title: "Games (Unity, Unreal, Custom)",
    source_inspiration: "Bevy / Godot / Unity Docs",
    content: `# GAME_DESIGN_MASTER_SPEC.md\n## 1. Game Loop & Logic\n- **Paradigm:** [ECS (Entity Component System) / Object-Oriented]\n- **Target FPS:** [30/60/120/Uncapped]\n\n## 2. Asset Pipeline\n- Asset Bundles & Lazy Loading.\n- LOD (Level of Detail) thresholds.\n\n## 3. Networking (If Multi-player)\n- **Model:** [Client-Side Prediction / Server Authoritative]\n- **Protocol:** UDP/WebSockets with Jitter Buffer.`
  },
  iot_embedded: {
    title: "Embedded & IoT Systems",
    source_inspiration: "Zephyr / ROS2 / Arduino",
    content: `# EMBEDDED_IOT_MASTER_SPEC.md\n## 1. Hardware Abstraction\n- **RTOS:** [Zephyr/FreeRTOS/None]\n- **Connectivity:** [MQTT/LoRaWAN/Zigbee]\n\n## 2. Energy & Memory\n- Sleep Cycles & Interrupt Handling.\n- Stack/Heap limit monitoring.\n\n## 3. OTA & Safety\n- Dual-bank firmware updates (Fail-safe).\n- Watchdog timer implementation.`
  },
  desktop_apps: {
    title: "Desktop Applications",
    source_inspiration: "VS Code / Tauri / Electron",
    content: `# DESKTOP_APP_MASTER_SPEC.md\n## 1. Architecture Model\n- **Process:** Main Process + Sandboxed Renderers.\n- **IPC:** Typed communication via [IPC/Bridge].\n\n## 2. Resource Management\n- Memory leak prevention in Chromium/WebView.\n- Native API access (File System, System Tray).\n\n## 3. Packaging\n- [MSI / DMG / AppImage] targets.\n- Code signing requirements (Apple/Windows).`
  },
  real_time: {
    title: "Real-Time Systems (WebRTC/Streaming)",
    source_inspiration: "LiveKit / Matrix / Discord",
    content: `# REALTIME_SYSTEM_MASTER_SPEC.md\n## 1. Protocol Stack\n- **Signaling:** WebSockets/HTTP Long Polling.\n- **Media:** WebRTC (ICE/STUN/TURN).\n\n## 2. Scaling\n- Selective Forwarding Unit (SFU) vs Mesh.\n- Global Edge acceleration.`
  },
  cloud_saas: {
    title: "Cloud Platforms & SaaS",
    source_inspiration: "Kubernetes / ArgoCD / AWS Well-Architected",
    content: `# CLOUD_SAAS_MASTER_SPEC.md\n## 1. Multi-Tenancy\n- [Silo / Pool / Bridge] isolation models.\n- Tenant-specific encryption keys.\n\n## 2. Infrastructure as Code\n- Terraform/Pulumi state management.\n- GitOps (ArgoCD/Flux) workflow.`
  },
  ecommerce: {
    title: "E-Commerce & Marketplaces",
    source_inspiration: "Shopify / Saleor / Amazon",
    content: `# ECOMMERCE_MASTER_SPEC.md\n## 1. Checkout & Payment\n- PCI-DSS Compliance.\n- Cart reservation & TTL logic.\n\n## 2. Catalog & Search\n- Elasticsearch/Algolia indexing.\n- Multi-currency/Multi-language routing.`
  },
  ai_ml_platforms: {
    title: "AI / ML Platforms & Pipelines",
    source_inspiration: "Ray / Hugging Face / PyTorch",
    content: `# AI_ML_PLATFORM_MASTER_SPEC.md\n## 1. Data Ingestion\n- Feature Store (Feast) integration.\n- Data versioning (DVC).\n\n## 2. Model Lifecycle\n- Training: Distributed GPU scheduling.\n- Serving: Canary rollouts for LLM/Model weights.`
  },
  data_engineering: {
    title: "Data Engineering & Analytics",
    source_inspiration: "dbt / Snowflake / Airflow",
    content: `# DATA_ENG_MASTER_SPEC.md\n## 1. Pipeline Design\n- ELT vs ETL logic.\n- DAG (Directed Acyclic Graph) monitoring.\n\n## 2. Data Quality\n- Schema Enforcement (Protobuf/Avro).\n- Great Expectations (Testing) integration.`
  },
  devops_infra: {
    title: "DevOps / Infrastructure Tools",
    source_inspiration: "Prometheus / Terraform / Docker",
    content: `# DEVOPS_TOOL_MASTER_SPEC.md\n## 1. Execution Environment\n- CLI toolchain (Golang/Rust).\n- Configuration: YAML/HCL support.\n\n## 2. Provider Logic\n- Plugin/Provider architecture.\n- State locking and concurrency control.`
  },
  blockchain_web3: {
    title: "Blockchain & Web3",
    source_inspiration: "Ethereum (EIPs) / Solana / OpenZeppelin",
    content: `# BLOCKCHAIN_WEB3_MASTER_SPEC.md\n## 1. Protocol Layer\n- **Network:** [L1 / L2 / AppChain]\n- **Contract Language:** [Solidity/Rust/Move]\n\n## 2. Security\n- Reentrancy Guards.\n- Gas optimization patterns.\n- Audit trail requirements.`
  },
  robotics: {
    title: "Robotics & Automation",
    source_inspiration: "Autoware / ROS2 / NASA JPL",
    content: `# ROBOTICS_MASTER_SPEC.md\n## 1. Control Loop\n- Deterministic execution (<10ms).\n- Safety-Critical Watchdogs.\n\n## 2. Simulation\n- Gazebo/NVIDIA Isaac integration.\n- Digital Twin state-sync.`
  },
  ar_vr_metaverse: {
    title: "AR/VR & Metaverse Apps",
    source_inspiration: "MRTK3 / Meta Presence Platform / OpenXR",
    content: `# AR_VR_MASTER_SPEC.md\n## 1. Interaction Model\n- Gaze-based vs Hand-tracking.\n- Spatial Anchor management.\n\n## 2. Performance\n- Render thread priority.\n- Latency-to-photon optimization (<20ms).`
  }
};

export const BLUEPRINT_KEYS = Object.keys(BLUEPRINT_DATA) as BlueprintKey[];

export const KEYWORD_CATEGORY_MAP: Record<string, BlueprintKey[]> = {
  react: ["web_apps"],
  website: ["web_apps"],
  frontend: ["web_apps"],
  dashboard: ["web_apps"],
  saas: ["web_apps", "cloud_saas"],
  html: ["web_apps"],
  ios: ["mobile_apps"],
  android: ["mobile_apps"],
  flutter: ["mobile_apps"],
  swift: ["mobile_apps"],
  "app store": ["mobile_apps"],
  appstore: ["mobile_apps"],
  crypto: ["blockchain_web3"],
  "smart contract": ["blockchain_web3"],
  token: ["blockchain_web3"],
  nft: ["blockchain_web3"],
  ethereum: ["blockchain_web3"],
  training: ["ai_ml_platforms"],
  llm: ["ai_ml_platforms"],
  "neural network": ["ai_ml_platforms"],
  python: ["ai_ml_platforms", "data_engineering"],
  "data science": ["ai_ml_platforms", "data_engineering"]
};

export type StackOption = {
  id: string;
  name: string;
  frontend: string;
  backend: string;
  database: string;
  infra: string;
  auth: string;
  testing: string;
};

export type CategoryDetail = {
  summary: string;
  architecture_focus: string[];
  feature_modules: string[];
  ux_screen_starter_pack: string[];
  stack_options: StackOption[];
};

export type DeliveryProfile = {
  id: "mvp" | "growth" | "enterprise";
  title: string;
  timeline: string;
  team_shape: string;
  quality_gates: string[];
};

export type UxProfile = {
  id: "ops_dense" | "consumer_guided" | "minimal_pro";
  title: string;
  voice: string;
  layout_principle: string;
  motion_principle: string;
  color_tokens: {
    primary: string;
    accent: string;
    background: string;
    panel: string;
    text: string;
  };
  typography: string;
};

export const DELIVERY_PROFILES: DeliveryProfile[] = [
  {
    id: "mvp",
    title: "MVP (4-8 weeks)",
    timeline: "Lean scope with one core user journey fully production-ready.",
    team_shape: "1 product engineer, 1 frontend engineer, 1 designer, shared DevOps.",
    quality_gates: ["Core happy path E2E tests", "Basic observability", "Security baseline checklist"]
  },
  {
    id: "growth",
    title: "Growth (2-4 months)",
    timeline: "Adds reliability layers, analytics instrumentation, and expansion modules.",
    team_shape: "2 frontend, 2 backend, 1 designer, 1 QA automation engineer.",
    quality_gates: ["Performance budgets", "Regression E2E + contract tests", "Release train and rollback policy"]
  },
  {
    id: "enterprise",
    title: "Enterprise (4-9 months)",
    timeline: "Multi-team delivery with compliance, auditability, and tenant controls.",
    team_shape: "Cross-functional squad with SRE, security, and product analytics.",
    quality_gates: ["Threat modeling", "Disaster recovery rehearsal", "Formal architecture review board sign-off"]
  }
];

export const UX_PROFILES: UxProfile[] = [
  {
    id: "ops_dense",
    title: "Operations Console",
    voice: "High signal, low decoration, keyboard-first workflows.",
    layout_principle: "Two-panel layout with persistent nav rail and high-density data surfaces.",
    motion_principle: "Motion only for state transition clarity; 120-180ms easing for panel transitions.",
    color_tokens: {
      primary: "#1c7ed6",
      accent: "#2f9e44",
      background: "#0b1220",
      panel: "#121a2a",
      text: "#e6edf7"
    },
    typography: "IBM Plex Sans + IBM Plex Mono for metrics and code surfaces."
  },
  {
    id: "consumer_guided",
    title: "Guided Consumer Product",
    voice: "Clear, supportive, progressive disclosure for decision-heavy flows.",
    layout_principle: "Single-column narrative sections with sticky progress and contextual help.",
    motion_principle: "Short enter transitions with staggered content reveal to guide focus.",
    color_tokens: {
      primary: "#0ca678",
      accent: "#f08c00",
      background: "#0f1724",
      panel: "#172033",
      text: "#f2f6fb"
    },
    typography: "Sora for headings, Inter for UI labels and body copy."
  },
  {
    id: "minimal_pro",
    title: "Minimal Professional",
    voice: "Editorial precision, few colors, strong hierarchy.",
    layout_principle: "Modular cards with generous whitespace and strong section framing.",
    motion_principle: "Minimal motion, mostly opacity and subtle elevation shifts.",
    color_tokens: {
      primary: "#1971c2",
      accent: "#e67700",
      background: "#0c111b",
      panel: "#151d2b",
      text: "#ebf1fa"
    },
    typography: "Manrope for interface text and JetBrains Mono for technical snippets."
  }
];

export const CATEGORY_DETAILS: Record<BlueprintKey, CategoryDetail> = {
  web_apps: {
    summary: "Browser-first products with API-backed workflows and mixed rendering strategies.",
    architecture_focus: ["Route-level error boundaries", "Caching strategy per route", "Edge-aware auth/session design"],
    feature_modules: ["Authentication and onboarding", "Main dashboard", "Settings and account management", "Audit/event feed"],
    ux_screen_starter_pack: ["Landing/entry", "Sign in + sign up", "Primary dashboard", "Entity detail", "Settings", "Error states"],
    stack_options: [
      {
        id: "next-node-postgres",
        name: "Next.js + Node + PostgreSQL",
        frontend: "Next.js App Router + React + TypeScript",
        backend: "Node.js (Fastify) or Next server actions for light APIs",
        database: "PostgreSQL + Prisma",
        infra: "Vercel/Cloudflare + managed Postgres",
        auth: "JWT in HttpOnly cookies + refresh rotation",
        testing: "Vitest + Playwright + API contract tests"
      },
      {
        id: "vue-go-postgres",
        name: "Vue + Go + PostgreSQL",
        frontend: "Vue 3 + Vite + Pinia",
        backend: "Go (Fiber or Chi)",
        database: "PostgreSQL + SQL migrations",
        infra: "Docker + Kubernetes or ECS",
        auth: "OIDC provider + secure session cookies",
        testing: "Vue Test Utils + k6 + integration tests"
      }
    ]
  },
  mobile_apps: {
    summary: "Mobile-first apps prioritizing runtime performance and offline tolerance.",
    architecture_focus: ["Offline sync policy", "Navigation/state boundaries", "Crash and ANR observability"],
    feature_modules: ["Onboarding", "Offline data sync", "Push notifications", "Profile and preferences"],
    ux_screen_starter_pack: ["Splash", "Auth flow", "Home feed", "Detail screen", "Offline/error screen", "Profile"],
    stack_options: [
      {
        id: "react-native-firebase",
        name: "React Native + Firebase",
        frontend: "React Native + TypeScript + Reanimated",
        backend: "Firebase Functions or lightweight Node services",
        database: "Firestore + local SQLite cache",
        infra: "Firebase project + CDN assets",
        auth: "Firebase Auth + provider linking",
        testing: "Detox + Jest + device farm smoke tests"
      },
      {
        id: "flutter-dotnet",
        name: "Flutter + .NET APIs",
        frontend: "Flutter + Dart + Riverpod",
        backend: ".NET minimal APIs",
        database: "PostgreSQL + Redis cache",
        infra: "Azure App Services + managed DB",
        auth: "OAuth2 PKCE + refresh tokens",
        testing: "Flutter test + integration_test + API tests"
      }
    ]
  },
  api_microservices: {
    summary: "Service-oriented backends designed for resilient, observable distributed systems.",
    architecture_focus: ["Idempotency for mutating endpoints", "Service boundaries", "Trace propagation"],
    feature_modules: ["Gateway", "Core domain services", "Background workers", "Admin/ops APIs"],
    ux_screen_starter_pack: ["API docs portal", "Service health dashboard", "Developer key management", "Incident timeline"],
    stack_options: [
      {
        id: "node-grpc-kafka",
        name: "Node gRPC + Kafka",
        frontend: "Internal admin console in React",
        backend: "Node.js microservices (gRPC + REST edge)",
        database: "PostgreSQL per service + Kafka event log",
        infra: "Kubernetes + service mesh",
        auth: "mTLS between services + OAuth2 at edge",
        testing: "Pact contracts + integration suites + load tests"
      },
      {
        id: "go-rest-nats",
        name: "Go REST + NATS",
        frontend: "Admin panel in Next.js",
        backend: "Go services with REST + async events",
        database: "PostgreSQL + NATS JetStream",
        infra: "Kubernetes + Terraform",
        auth: "API keys + OIDC for admin users",
        testing: "Unit + integration + chaos testing"
      }
    ]
  },
  game_dev: {
    summary: "Real-time interactive systems where frame pacing and asset pipeline are core constraints.",
    architecture_focus: ["Frame budget governance", "Asset streaming strategy", "Input and simulation determinism"],
    feature_modules: ["Core loop", "Matchmaking/lobby", "Progression", "Telemetry events"],
    ux_screen_starter_pack: ["Main menu", "Gameplay HUD", "Inventory", "Settings", "Results screen"],
    stack_options: [
      {
        id: "unity-csharp",
        name: "Unity C# Stack",
        frontend: "Unity UI Toolkit + custom shaders",
        backend: "Node or Go game services",
        database: "Player profile DB + analytics store",
        infra: "Multiregion game servers + CDN",
        auth: "Platform account + token exchange",
        testing: "PlayMode tests + soak tests + telemetry validation"
      },
      {
        id: "unreal-cpp",
        name: "Unreal C++ Stack",
        frontend: "Unreal UMG + C++ systems",
        backend: "C++ or Rust authoritative server",
        database: "Event store + profile DB",
        infra: "Dedicated servers + matchmaking service",
        auth: "Identity provider with anti-cheat hooks",
        testing: "Automated replay tests + perf captures"
      }
    ]
  },
  iot_embedded: {
    summary: "Constrained device systems with telemetry, remote updates, and safety-critical behavior.",
    architecture_focus: ["Power budgets", "OTA fail-safe plan", "Device-to-cloud protocol compatibility"],
    feature_modules: ["Provisioning", "Telemetry ingest", "Device command/control", "Firmware rollout manager"],
    ux_screen_starter_pack: ["Device inventory", "Device detail", "Firmware rollout", "Alert center"],
    stack_options: [
      {
        id: "zephyr-mqtt",
        name: "Zephyr + MQTT",
        frontend: "Web ops console in React",
        backend: "Device gateway in Go",
        database: "Timeseries DB + config store",
        infra: "MQTT broker cluster + OTA service",
        auth: "Mutual TLS cert-based auth",
        testing: "Hardware-in-loop + protocol fuzz tests"
      },
      {
        id: "freertos-lorawan",
        name: "FreeRTOS + LoRaWAN",
        frontend: "Telemetry dashboard in Vue",
        backend: "Ingestion service + rule engine",
        database: "InfluxDB + PostgreSQL",
        infra: "LoRaWAN network server + stream processing",
        auth: "Device identity + signed firmware",
        testing: "Power profiling + long-run stability tests"
      }
    ]
  },
  desktop_apps: {
    summary: "Desktop software with native OS integrations and robust local resource handling.",
    architecture_focus: ["IPC boundaries", "Local storage model", "Packaging and update channel strategy"],
    feature_modules: ["Workspace shell", "File manager", "Command palette", "Auto-update pipeline"],
    ux_screen_starter_pack: ["Workspace home", "Editor/viewer", "Settings", "Update and restart prompt"],
    stack_options: [
      {
        id: "tauri-rust-react",
        name: "Tauri + Rust + React",
        frontend: "React + Vite desktop renderer",
        backend: "Rust commands exposed over typed bridge",
        database: "SQLite local-first",
        infra: "Signed release artifacts via CI",
        auth: "Local credential vault + optional SSO",
        testing: "Vitest + desktop E2E smoke tests"
      },
      {
        id: "electron-node-react",
        name: "Electron + Node + React",
        frontend: "React renderer process",
        backend: "Node main process + preload bridge",
        database: "SQLite or IndexedDB",
        infra: "Auto-update with staged rollout",
        auth: "OAuth device flow + secure token store",
        testing: "Playwright electron + leak profiling"
      }
    ]
  },
  real_time: {
    summary: "Low-latency media/data systems where sync quality and global routing dominate design.",
    architecture_focus: ["SFU routing", "Latency budgets", "Connection recovery strategy"],
    feature_modules: ["Session setup", "Realtime transport", "Presence", "Recording/replay"],
    ux_screen_starter_pack: ["Room lobby", "Live session", "Participant controls", "Network quality diagnostics"],
    stack_options: [
      {
        id: "webrtc-sfu",
        name: "WebRTC + SFU",
        frontend: "React session client + adaptive UI",
        backend: "Node signaling + SFU orchestration",
        database: "Session metadata + recordings index",
        infra: "Global TURN + edge routing",
        auth: "Short-lived room tokens",
        testing: "Synthetic multi-client load + packet loss tests"
      },
      {
        id: "ws-event-stream",
        name: "WebSocket Event Stream",
        frontend: "Next.js live dashboards",
        backend: "Go event fanout services",
        database: "Redis streams + Postgres",
        infra: "Autoscaling websocket gateway",
        auth: "JWT with scoped channels",
        testing: "Chaos disconnect tests + p99 latency checks"
      }
    ]
  },
  cloud_saas: {
    summary: "Tenant-aware platforms balancing isolation, velocity, and operational cost.",
    architecture_focus: ["Tenant model", "Entitlement system", "Audit/compliance trails"],
    feature_modules: ["Tenant provisioning", "Billing and plans", "Admin console", "Usage analytics"],
    ux_screen_starter_pack: ["Tenant selector", "Main product workspace", "Billing", "Admin and roles"],
    stack_options: [
      {
        id: "next-nest-multi-tenant",
        name: "Next.js + NestJS Multi-Tenant",
        frontend: "Next.js + server components",
        backend: "NestJS modular services",
        database: "PostgreSQL + row-level tenant isolation",
        infra: "Kubernetes + GitOps",
        auth: "SSO (SAML/OIDC) + RBAC",
        testing: "Tenant isolation tests + billing regression suite"
      },
      {
        id: "django-react-saas",
        name: "Django + React SaaS",
        frontend: "React + React Query",
        backend: "Django + DRF",
        database: "PostgreSQL + Redis",
        infra: "Docker + managed cloud services",
        auth: "Django auth + optional SSO",
        testing: "Pytest + Playwright + security scans"
      }
    ]
  },
  ecommerce: {
    summary: "Catalog, checkout, and fulfillment pipelines with uptime and conversion priorities.",
    architecture_focus: ["Cart consistency", "Search relevance", "Payment and fraud workflows"],
    feature_modules: ["Catalog browsing", "Checkout", "Order tracking", "Merchant operations"],
    ux_screen_starter_pack: ["Home/catalog", "Product detail", "Cart", "Checkout", "Order history"],
    stack_options: [
      {
        id: "next-commerce-stripe",
        name: "Next Commerce + Stripe",
        frontend: "Next.js storefront",
        backend: "Node commerce APIs",
        database: "PostgreSQL + Elasticsearch",
        infra: "Edge cache + queue workers",
        auth: "Email/password + social login",
        testing: "Checkout E2E + payment webhook tests"
      },
      {
        id: "saleor-headless",
        name: "Headless Saleor Stack",
        frontend: "React storefront",
        backend: "Saleor GraphQL backend",
        database: "PostgreSQL + Redis",
        infra: "Containerized services + CDN",
        auth: "Customer accounts + admin SSO",
        testing: "GraphQL contracts + conversion funnel tests"
      }
    ]
  },
  ai_ml_platforms: {
    summary: "Data/model platforms focused on reproducibility, serving quality, and controlled rollout.",
    architecture_focus: ["Dataset versioning", "Model registry discipline", "Serving rollback strategy"],
    feature_modules: ["Data ingestion", "Experiment tracking", "Model deployment", "Monitoring and drift alerts"],
    ux_screen_starter_pack: ["Experiment list", "Run detail", "Model registry", "Inference dashboard"],
    stack_options: [
      {
        id: "python-fastapi-ray",
        name: "Python + FastAPI + Ray",
        frontend: "React ops dashboard",
        backend: "FastAPI orchestration services",
        database: "PostgreSQL + object store + vector DB",
        infra: "GPU node pool + autoscaling",
        auth: "Role-based access with audit logs",
        testing: "Data validation + model eval + load tests"
      },
      {
        id: "mlflow-kubeflow",
        name: "MLflow + Kubeflow",
        frontend: "Next.js control plane",
        backend: "Python platform APIs",
        database: "Metadata DB + artifact store",
        infra: "Kubernetes + workflow scheduler",
        auth: "OIDC + scoped service accounts",
        testing: "Pipeline contract tests + drift alarms"
      }
    ]
  },
  data_engineering: {
    summary: "Reliable data movement and transformation platforms serving analytics and reporting.",
    architecture_focus: ["Data contracts", "Lineage", "Backfill and replay procedures"],
    feature_modules: ["Ingestion connectors", "Transformation DAGs", "Data quality monitor", "Analytics serving layer"],
    ux_screen_starter_pack: ["Pipeline catalog", "DAG run detail", "Quality report", "Schema change explorer"],
    stack_options: [
      {
        id: "airflow-dbt-snowflake",
        name: "Airflow + dbt + Snowflake",
        frontend: "Internal monitoring dashboard",
        backend: "Python orchestration services",
        database: "Snowflake warehouse + metadata DB",
        infra: "Cloud scheduler + container workers",
        auth: "SSO + role-based data permissions",
        testing: "dbt tests + Great Expectations + SLA alerts"
      },
      {
        id: "spark-kafka-lakehouse",
        name: "Spark + Kafka + Lakehouse",
        frontend: "React operations console",
        backend: "Scala/Python stream processors",
        database: "Delta Lake + query engine",
        infra: "Cluster compute + object storage",
        auth: "IAM-integrated access control",
        testing: "Schema compatibility + replay verification"
      }
    ]
  },
  devops_infra: {
    summary: "Infrastructure tooling for provisioning, release automation, and service reliability.",
    architecture_focus: ["Provider abstraction boundaries", "State management", "Policy enforcement"],
    feature_modules: ["CLI core", "Config parser", "State backend", "Plugin SDK"],
    ux_screen_starter_pack: ["CLI docs portal", "Execution history", "Plan/apply diff viewer", "Policy violations"],
    stack_options: [
      {
        id: "go-cli-terraform",
        name: "Go CLI + Terraform Providers",
        frontend: "Optional web console for run history",
        backend: "Go core engine + provider plugins",
        database: "State storage + run metadata",
        infra: "Containerized control plane",
        auth: "OIDC + short-lived run tokens",
        testing: "Golden tests + integration sandbox environments"
      },
      {
        id: "rust-cli-ansible",
        name: "Rust CLI + Automation Runtime",
        frontend: "Doc-first workflow UI",
        backend: "Rust execution engine",
        database: "State lock storage",
        infra: "Self-hosted or managed runner pools",
        auth: "RBAC + signed execution artifacts",
        testing: "Property tests + failure injection"
      }
    ]
  },
  blockchain_web3: {
    summary: "On-chain/off-chain systems requiring deterministic contract behavior and careful security controls.",
    architecture_focus: ["Contract upgradability policy", "Wallet/session model", "Transaction failure UX"],
    feature_modules: ["Wallet connect", "Contract interaction", "Portfolio/state indexing", "Governance/admin controls"],
    ux_screen_starter_pack: ["Wallet onboarding", "Asset dashboard", "Transaction review", "Signature status"],
    stack_options: [
      {
        id: "solidity-next-indexer",
        name: "Solidity + Next + Indexer",
        frontend: "Next.js + wagmi + viem",
        backend: "Node indexer + API gateway",
        database: "PostgreSQL + chain event store",
        infra: "RPC provider failover + queue workers",
        auth: "Wallet signature sessions",
        testing: "Foundry tests + fuzzing + forked network tests"
      },
      {
        id: "solana-rust-anchor",
        name: "Solana Rust + Anchor",
        frontend: "React + Solana wallet adapter",
        backend: "Rust programs + indexer services",
        database: "Event index + cache",
        infra: "RPC pool + observability stack",
        auth: "Wallet challenge-response",
        testing: "Anchor tests + simulation + security review"
      }
    ]
  },
  robotics: {
    summary: "Control and autonomy software integrating deterministic loops with sensor-rich environments.",
    architecture_focus: ["Real-time loop determinism", "Sensor fusion pipeline", "Fail-safe behavior"],
    feature_modules: ["Mission planner", "Perception stack", "Control stack", "Diagnostics and replay"],
    ux_screen_starter_pack: ["Mission control", "Sensor visualization", "Fault diagnostics", "Simulation monitor"],
    stack_options: [
      {
        id: "ros2-cpp",
        name: "ROS2 + C++",
        frontend: "Web-based mission dashboard",
        backend: "ROS2 node graph + control services",
        database: "Telemetry and replay storage",
        infra: "Edge compute + cloud sync",
        auth: "Operator identity + command authorization",
        testing: "Simulation regression + HIL tests"
      },
      {
        id: "ros2-python-hybrid",
        name: "ROS2 Hybrid (Python/C++)",
        frontend: "Operator UI in React",
        backend: "Python orchestration + C++ control loops",
        database: "Timeseries storage",
        infra: "On-device runtime + remote ops",
        auth: "Signed command channel",
        testing: "Latency tests + safety watchdog validation"
      }
    ]
  },
  ar_vr_metaverse: {
    summary: "Spatial applications where interaction comfort and render latency define product quality.",
    architecture_focus: ["Input model consistency", "Frame timing budget", "Spatial persistence strategy"],
    feature_modules: ["Session and avatar setup", "Spatial interaction", "Shared state sync", "Performance diagnostics"],
    ux_screen_starter_pack: ["Experience onboarding", "Interaction tutorial", "Main spatial scene", "Comfort settings"],
    stack_options: [
      {
        id: "unity-openxr",
        name: "Unity + OpenXR",
        frontend: "Unity scene/UI systems",
        backend: "Realtime sync services",
        database: "Session and world-state storage",
        infra: "Low-latency edge relay",
        auth: "Account + device binding",
        testing: "Comfort tests + frame-time profiling"
      },
      {
        id: "unreal-multiplayer-vr",
        name: "Unreal Multiplayer VR",
        frontend: "Unreal interaction layer",
        backend: "Authoritative session servers",
        database: "Identity + social graph storage",
        infra: "Regional multiplayer routing",
        auth: "Secure matchmaking tokens",
        testing: "Motion-to-photon and desync tests"
      }
    ]
  }
};
