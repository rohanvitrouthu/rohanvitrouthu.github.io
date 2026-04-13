---
title: "Enterprise Healthcare Revenue Cycle Management (RCM) Data Platform"
date: 2024-03-01
draft: false
---

* **Engineered a Serverless Cloud Data Platform**: Architected an end-to-end, serverless Revenue Cycle Management (RCM) data platform using Azure (Data Factory, Databricks, ADLS Gen2, SQL DB). Fully managed the infrastructure as code (IaC) via customizable Terraform deployments to ensure rapid scalability and strict cost compliance.
* **Orchestrated Robust Data Pipelines & Verification**: Designed automated data ingestion and transformation pipelines using Azure Data Factory and PySpark, driving data through a Medallion architecture (Bronze/Silver/Gold Delta Lake layers). Integrated Great Expectations for rigorous schema validation and data quality checks prior to downstream consumption.
* **Source Simulation & Containerization**: Developed containerized, Python-based source simulation tools to emulate real-world hospital EMR activity. Programmatically populated Azure SQL databases and ADLS landing zones with over 16k synthetic medical claims and CPT reference records to simulate enterprise integration environments.
