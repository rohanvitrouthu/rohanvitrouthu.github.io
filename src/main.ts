import "./style.css";
import * as THREE from "three";

type Project = {
  title: string;
  date: string;
  tags: string[];
  bullets: string[];
  link?: string;
};

type Experience = {
  role: string;
  description: string;
  bullets: string[];
};

const projects: Project[] = [
  {
    title: "RoleForge | Agentic Job Application Tracker",
    date: "May 2024",
    tags: ["FastAPI", "SQLite", "Agentic AI", "PDF Automation"],
    bullets: [
      "Built a local-first platform that turns automation-discovered job postings into tailored resume and cover letter packets.",
      "Engineered staged AI tailoring with reusable candidate context, two-model inference, semantic verification, ATS checks, and PDF generation.",
      "Developed a review-centered workflow spanning job inbox ingestion, live run tracing, async queues, and application management.",
    ],
  },
  {
    title: "LinguaStream | Real-Time AI Audio Translation Engine",
    date: "Apr 2024",
    tags: ["FastAPI", "WebSockets", "Deepgram", "Web Audio API"],
    bullets: [
      "Architected a parallelized ASR, translation, and TTS pipeline for low-latency live dubbing.",
      "Built a full-duplex FastAPI backend for raw browser audio streaming between extension and AI microservices.",
      "Created a jitter buffer, gapless playback, and dynamic auto-ducking layer for synchronized translated speech.",
    ],
  },
  {
    title: "Enterprise Healthcare Revenue Cycle Management Data Platform",
    date: "Mar 2024",
    tags: ["Azure", "Databricks", "Terraform", "Delta Lake"],
    bullets: [
      "Architected a serverless RCM data platform using Azure Data Factory, Databricks, ADLS Gen2, SQL DB, and Terraform.",
      "Orchestrated Medallion pipelines with PySpark and Great Expectations validation before downstream consumption.",
      "Developed containerized source simulators that generated more than 16k synthetic medical claims and CPT records.",
    ],
  },
  {
    title: "Sectoral Stock Analysis of NIFTY-50 Stocks",
    date: "Feb 2024",
    tags: ["Python", "Forecasting", "LSTM", "Random Forest"],
    bullets: [
      "Organized 50 equities across 14 sectors for cross-sector and sector-level research workflows.",
      "Developed exploratory analytics and predictive modeling with correlation analysis, ARIMA, regression, Random Forest, and LSTM/RNN approaches.",
      "Designed the project as a foundation for a production-grade investment research pipeline.",
    ],
  },
  {
    title: "Azure End-to-End Data Engineering Pipeline",
    date: "Jan 2024",
    tags: ["Azure Data Factory", "PySpark", "Synapse", "Databricks"],
    bullets: [
      "Engineered a cloud pipeline using five Azure services to process and analyze Tokyo Olympics data covering 11,000 athletes.",
      "Executed cleansing and transformation logic in Databricks and staged output in Synapse for SQL analytics and dashboards.",
    ],
  },
  {
    title: "Serverless Portfolio Website",
    date: "Jan 2024",
    tags: ["Hugo", "JavaScript", "GitHub Pages"],
    bullets: [
      "Built the previous portfolio with Hugo and the PaperMod theme.",
      "Added a custom vanilla JavaScript time-based light and dark mode toggle.",
      "Deployed through Git CI/CD to GitHub Pages.",
    ],
    link: "https://github.com/rohanvitrouthu/rohanvitrouthu.github.io",
  },
  {
    title: "Automated Weather Data ETL Pipeline",
    date: "Dec 2023",
    tags: ["Docker", "n8n", "PostgreSQL", "OAuth2"],
    bullets: [
      "Engineered a containerized ETL workflow that ingests OpenMeteo weather data into a PostgreSQL warehouse.",
      "Deployed n8n workflows for transformation and scheduling with persistent storage and Docker networking.",
      "Integrated OAuth2-authenticated Gmail alerting for threshold-based notifications.",
    ],
  },
  {
    title: "Serverless LLM Gateway & Prompt-Engineered Agent System",
    date: "Nov 2023",
    tags: ["Open WebUI", "Groq", "Cerebras", "Prompt Engineering"],
    bullets: [
      "Designed a privacy-first generative AI platform using Open WebUI and serverless inference, reducing operational costs by 99%.",
      "Engineered specialized Mixture-of-Experts agents with custom cognitive reinforcement protocols and schema-focused hyperparameters.",
    ],
  },
];

const experience: Experience[] = [
  {
    role: "The Home Depot | Software Engineer - Data Platform",
    description: "August 2024 - Present | Remote, United States",
    bullets: [
      "Designed a serverless Medallion data platform on Databricks and Delta Lake, eliminating idle compute and reducing infrastructure overhead by 40%.",
      "Engineered an async FastAPI backend with WebSockets and parallel task pools, reducing pipeline execution latency from 40s to about 2.5s.",
      "Developed LangGraph-compatible agentic workflows for logistics anomaly detection over 16,000 daily supply chain events.",
      "Built a staged two-LLM architecture with OpenRouter and serverless inference, reducing repeated AI inference costs by 99%.",
      "Implemented semantic verification, Great Expectations validation, and GitHub Actions workflows, contributing to a 25% MTTR reduction.",
    ],
  },
  {
    role: "PepsiCo | Informatica ETL Developer",
    description: "July 2021 - June 2022 | Hyderabad, India",
    bullets: [
      "Led migration of 50+ legacy workflows into optimized Informatica IICS mappings, reducing operational overhead and pipeline failures by 50%.",
      "Engineered ETL pipelines for 10+ TB of daily global inventory data with automated monitoring and failure notifications.",
      "Optimized Oracle and flat-file extraction logic with SQL, improving query performance by 25% and reducing prep time by 35%.",
      "Partnered with BI teams on dataset structures and technical documentation, reducing cross-team troubleshooting time by 60%.",
    ],
  },
];

const skillGroups = [
  ["Cloud & Infrastructure", "AWS", "Azure", "Kubernetes", "Docker", "Terraform"],
  ["Data Engineering", "Lakehouse", "Medallion Architecture", "Iceberg", "Delta Lake", "Airflow", "Spark"],
  ["Programming & Backend", "Python", "FastAPI", "SQL", "PostgreSQL", "WebSockets", "OAuth2"],
  ["Observability & AI/ML", "Prometheus", "Grafana", "TensorFlow", "LangGraph", "Agentic Orchestration"],
];

const education = [
  "Master of Science in Data Science | University of Maryland, Baltimore County (UMBC) - August 2022 - May 2024",
  "Bachelor of Technology in Information Technology | Jawaharlal Nehru Technological University (JNTU) - July 2017 - June 2021",
];

const certifications = [
  "Databricks Lakehouse Fundamentals",
  "Microsoft Azure AZ-900: Azure Fundamentals",
  "Informatica Cloud Data Integration Developer",
  "NVIDIA Deep Learning Institute: Accelerating End-to-End Data Science Workflows",
];

function listItems(items: string[]): string {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function tags(items: string[]): string {
  return items.map((item) => `<span>${item}</span>`).join("");
}

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing #app root element");
}

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#home" aria-label="Rohan Vitrouthu home">
      <span class="brand-mark"></span>
      <span>Rohan Vitrouthu</span>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="home" class="hero panel">
      <p class="eyebrow">Software and Data Engineer</p>
      <h1>Building data platforms, AI workflows, and backend systems on the grid.</h1>
      <p class="hero-copy">
        I specialize in scalable data architectures, robust ETL pipelines, high-performance APIs, and cloud-native systems across AWS, Azure, Databricks, and modern lakehouse formats.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="#projects">View Projects</a>
        <a class="button" href="#experience">View Experience</a>
      </div>
      <div class="signal-strip" aria-label="Portfolio highlights">
        <span>Medallion Architecture</span>
        <span>Serverless AI</span>
        <span>Realtime APIs</span>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section-heading">
        <p class="eyebrow">Projects</p>
      </div>
      <div class="project-grid">
        ${projects
          .map(
            (project) => `
              <article class="project-card">
                <div class="card-meta">
                  <span>${project.date}</span>
                  ${project.link ? `<a href="${project.link}" target="_blank" rel="noreferrer">Source</a>` : ""}
                </div>
                <h3>${project.title}</h3>
                <div class="tag-row">${tags(project.tags)}</div>
                <ul>${listItems(project.bullets)}</ul>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section id="experience" class="section">
      <div class="section-heading">
        <p class="eyebrow">Experience</p>
        <h2>Professional history focused on data platforms, backend performance, and operational reliability.</h2>
      </div>
      <div class="timeline">
        ${experience
          .map(
            (item) => `
              <article class="timeline-item">
                <div class="node"></div>
                <div>
                  <p class="timeline-date">${item.description}</p>
                  <h3>${item.role}</h3>
                  <ul>${listItems(item.bullets)}</ul>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section id="about" class="section about-layout">
      <div class="about-copy">
        <p class="eyebrow">About</p>
        <h2>From enterprise ETL in Hyderabad to cloud-native data platforms in the United States.</h2>
        <p>
          I bridge raw data and actionable intelligence. My path started with Informatica pipelines for PepsiCo, continued through a Data Science master's at UMBC, and now centers on serverless data platforms, Delta Lake orchestration, and agentic AI workflows at The Home Depot.
        </p>
        <p>
          I like systems that are resilient under pressure: pipelines with verification, APIs with predictable latency, and AI workflows grounded in evidence instead of vibes.
        </p>
      </div>
      <div class="arsenal">
        <h3>Technical Arsenal</h3>
        ${skillGroups
          .map(
            ([heading, ...items]) => `
              <div class="skill-group">
                <p>${heading}</p>
                <div class="tag-row">${tags(items)}</div>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="section details-grid" aria-label="Education and certifications">
      <article>
        <p class="eyebrow">Education</p>
        <ul>${listItems(education)}</ul>
      </article>
      <article>
        <p class="eyebrow">Certifications</p>
        <ul>${listItems(certifications)}</ul>
      </article>
    </section>

    <section id="contact" class="section contact panel">
      <p class="eyebrow">Contact</p>
      <h2>Open to new projects, creative ideas, and opportunities to build useful systems.</h2>
      <div class="contact-links">
        <a href="mailto:rov052mdus@gmail.com">rov052mdus@gmail.com</a>
        <a href="https://github.com/rohanvitrouthu" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/rohaanv2025" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  </main>
`;

const canvas = document.querySelector<HTMLCanvasElement>("#bg");

if (!canvas) {
  throw new Error("Missing #bg canvas");
}

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x020507, 0.034);

const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 1200);
camera.position.set(0, 18, 46);
camera.lookAt(0, 0, -40);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const cyan = 0x00f0ff;
const orange = 0xff8a2a;
const blue = 0x006dff;

scene.add(new THREE.AmbientLight(0x1ad7ff, 0.38));

const horizonLight = new THREE.PointLight(cyan, 130, 220);
horizonLight.position.set(0, 16, -58);
scene.add(horizonLight);

const sideLight = new THREE.PointLight(orange, 75, 170);
sideLight.position.set(-38, 10, 10);
scene.add(sideLight);

const gridGroup = new THREE.Group();
scene.add(gridGroup);

function makeGrid(size: number, divisions: number, color: number, opacity: number): THREE.LineSegments {
  const helper = new THREE.GridHelper(size, divisions, color, color);
  const material = helper.material as THREE.Material | THREE.Material[];

  if (Array.isArray(material)) {
    material.forEach((entry) => {
      entry.transparent = true;
      entry.opacity = opacity;
    });
  } else {
    material.transparent = true;
    material.opacity = opacity;
  }

  return helper;
}

const floorGrid = makeGrid(360, 72, cyan, 0.34);
floorGrid.position.y = -7;
gridGroup.add(floorGrid);

const farGrid = makeGrid(360, 72, blue, 0.18);
farGrid.position.set(0, -6.6, -180);
gridGroup.add(farGrid);

const sunGeometry = new THREE.RingGeometry(18, 18.45, 96);
const sunMaterial = new THREE.MeshBasicMaterial({
  color: orange,
  transparent: true,
  opacity: 0.8,
  side: THREE.DoubleSide,
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(0, 9, -95);
scene.add(sun);

const cityGroup = new THREE.Group();
scene.add(cityGroup);

const buildingMaterial = new THREE.MeshBasicMaterial({
  color: cyan,
  wireframe: true,
  transparent: true,
  opacity: 0.33,
});

const blockPositions = [
  [-42, -4, -72, 8, 16, 8],
  [-28, -3, -92, 7, 21, 7],
  [-12, -2, -82, 10, 13, 10],
  [16, -3, -96, 8, 24, 8],
  [34, -4, -78, 9, 17, 9],
  [48, -5, -112, 8, 28, 8],
] as const;

blockPositions.forEach(([x, y, z, width, height, depth]) => {
  const geometry = new THREE.BoxGeometry(width, height, depth, 2, 6, 2);
  const block = new THREE.Mesh(geometry, buildingMaterial);
  block.position.set(x, y + height / 2, z);
  cityGroup.add(block);
});

const vehicleGroup = new THREE.Group();
scene.add(vehicleGroup);

const trailGeometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(-18, -5.25, 20),
  new THREE.Vector3(18, -5.25, -32),
]);
const trail = new THREE.Line(
  trailGeometry,
  new THREE.LineBasicMaterial({
    color: orange,
    transparent: true,
    opacity: 0.85,
  }),
);
vehicleGroup.add(trail);

const cycle = new THREE.Mesh(
  new THREE.BoxGeometry(1.6, 0.55, 3.2),
  new THREE.MeshBasicMaterial({ color: orange }),
);
cycle.position.set(18, -5, -32);
vehicleGroup.add(cycle);

function animate(): void {
  const elapsed = performance.now() * 0.001;
  const scrollProgress =
    document.documentElement.scrollTop /
    Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

  gridGroup.position.z = (elapsed * 8) % 20;
  sun.rotation.z = elapsed * 0.08;
  cityGroup.rotation.y = Math.sin(elapsed * 0.18) * 0.035;

  vehicleGroup.position.x = Math.sin(elapsed * 0.7) * 18;
  vehicleGroup.position.z = Math.cos(elapsed * 0.55) * 8;

  camera.position.x = Math.sin(elapsed * 0.12) * 4;
  camera.position.y = 18 + scrollProgress * 12;
  camera.position.z = 46 - scrollProgress * 34;
  camera.lookAt(0, -3 + scrollProgress * 7, -48);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
