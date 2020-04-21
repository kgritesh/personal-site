---
title: 'Spyception'
date: '2017-08-30'
period: 'Dec, 2016 - Oct, 2017'
technologies: 'Java, Golang, Python, scikit-learn, numpy, Android, React, AWS, Docker'
company: Loanzen
companyURL: 'https://loanzen.in'
source: null
type: 'project'
published: true
description: 'Automated SMS Tagging, and Bank Statement Analysis'
---

This was a project that i built for my startup [Loanzen](https://loanzen.in). At Loanzen, we were lending capital to unregulated and often unorganized SME sector. We built this module to collect transactional SMS from our borrower's phone. process them, categorise them and provide us with rich source of their day to day financial transactions.

The project composed of following modules

- An android SDK that was responsible for collecting user's non personal sms and sending them back to a configurable backend. The SDK was extremely configurable, allowing the app to decide at what frequency and what efficiency level they wanted to collect data at. We, also experimented with collecting notifications, user app usage and browser history.

- A backend server written in golang responsible for storing the sms received from the android sdk.

- An unsupervised clustering algorithm to convert our huge corpus of SMS data into clusters such that SMS in each cluster was similar in terms of its domain. We also built a custom UI that then allowed manually tagging these clusters instead of manually going over this huge corpus of SMS individually. This dramatically reduced the time to construct a training set for our supervised ML algorithm to automatically tag incoming SMS.

- Implemented a new modified hierarchical Naive Bayes Algorithm to automatically tag incoming SMS. The system was designed with great instrumentation support as well as ability to automatically update the model everyday with new incoming data.

- Built a parser to create bank statement for the user from all the SMS tagged by our ML system to be related to banking transaction.
