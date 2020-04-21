---
title: 'Fraud Detection Engine'
date: '2019-03-01T18:30:00.000Z'
period: 'July, 2018 - March, 2020'
technologies: 'Python, Gunicorn, Docker, AWS, Redis, MySQL, SQS, Data Pipeline, NewRelic, Microservices'
source: null
type: 'project'
company: 'Xapo'
companyURL: 'https://xapo.com'
published: true
description: 'Transactional Fraud Detection Enine'
---

This was a project that I built while contracting for Xapo. I designed and built a complete fraud detecting system from scratch that allowed Xapo to identify fraudulent transactions / hack on its system in real time. It was designed as set of microservices and had 4 major components

1. A central orchestrator responsible for listening to real time transactions and orchestrating the flow of events throughout the entire pipeline. It also consisted of a plugin based service responsible for collecting different kind of information about the event needed by the further stages in pipeline.

2. A powerful rule engine that uses the information collected by different plugins above and identifying if the event is a fraud or not

3. A machine learning system that calculates a risk score again using information collected by plugins as features

4. A client dashboard that allows internal risk teams in Xapo to look at all the events as well as manually verifying events marked for manual review.

I was primarily involved in designing the overall architecture, data pipeline, plugin architecture, rules architecture as well as first machine learning model. The new engine led to order of magnitude improvement in performance (Avg of < 3 seconds compare to ~ 5 mins earlier). The new design also had strong error tolerance and retry mechanism built in.
