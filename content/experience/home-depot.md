---
title: "The Home Depot | Software Engineer – Data Platform"
description: "August 2024 – Present | Remote, United States"
date: 2024-08-01
draft: false
---

* Designed an end-to-end serverless data platform utilizing a **Medallion architecture** (Bronze/Silver/Gold layers) on **Databricks** with **Delta Lake** to process daily global inventory and logistics data, successfully eliminating idle compute and reducing infrastructure overhead by **40%**.  
* Engineered a high-throughput, asynchronous **FastAPI** backend utilizing **WebSockets** and parallelized task pools to process real-time logistics events, significantly reducing pipeline execution latency from **40s to ~2.5s** while achieving **sub-200ms** roundtrip latency.  
* Developed an agentic AI workflow with a **LangGraph**-compatible orchestration pipeline to automate logistics anomaly detection, balancing graph-based stage modeling with efficient execution to process over **16,000** daily supply chain events.  
* Designed a staged, two-LLM architecture using **OpenRouter** and serverless inference that separates low-cost anomaly triage from higher-value report generation, reducing repeated AI inference and operational costs by **99%**.  
* Implemented semantic verification and grounding checks within the AI analysis flow to prevent hallucinations and unsupported claims in automated supplier communications, ensuring **100% evidence-backed outputs**.  
* Integrated **Great Expectations** for rigorous schema validation on incoming logistics data, and established CI/CD workflows via **GitHub Actions** for automated infrastructure deployments, contributing to a **25%** reduction in Mean Time to Resolution (**MTTR**) for production issues.
