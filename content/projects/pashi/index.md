---
title: 'Pashi Analytics Integration'
date: '2023-10-26T18:30:00.000Z'
period: Jan, 2021 - Oct, 2021'
technologies: 'Golang, Postgres, Metabase, Redis, RabbitMQ, CDC, OLAP'
source: null
type: 'project'
company: 'Pashi'
companyURL: 'https://www.linkedin.com/company/pashi'
published: true
description: 'Self-Serve BI Tool for Manufacturing OS'
---

At Pashi, a YC-backed startup pioneering an operating system for manufacturing, I played a pivotal role in integrating Metabase into our SaaS platform, empowering our enterprise clients to craft and monitor custom dashboards based on their production data. This system was being used on assembly lines of a major two wheeler manufacturer.

**Key Achievements**:

- Designed an in-house streaming engine ensuring real-time data transmission from Pashi's event-focused datastore to the analytics service.
- Developed an adaptive parser capable of dynamically forming analytics data models, accounting for the unique devices and stages in each production line.
- Reverse-engineered the Metabase API, resulting in the creation of a bespoke OSS client in Golang and automated generation of queries, visualizations, and dashboards tailored for clients.
- Implemented a custom OSS CDC solution for Postgres in Golang, tackling the challenge of converting an event-centric datastore into an OLAP database.
- Ensured system resilience and performance, handling thousands of assembly line events per second.
