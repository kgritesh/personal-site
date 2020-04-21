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
description: 'Collect and analyse transactional SMS for generating a credit score'
---

This was a project that i built for my startup [Loanzen](https://loanzen.in). At Loanzen, we were lending capital to unregulated and often unorganized SME sector. We built this module to collect transactional SMS from our borrower's phone. process them, categorise them and provide us with rich source of their day to day financial transactions.

The project composed of modules

- I built an android sdk that was responsible to continuosly monitor and collect the transactional( non personal) SMS from our borrowers, anonymize them and send it back to the server. The SDK tried to minimize battery usage, as well as could also work in offline mode.

- A backend server written in golang responsible for storing the sms received from the android sdk.

- An unsupervised ML model that helped my team to manually tag the huge corpus of SMS to generate training data.

- A python service responsible for tagging the SMS using our own version of hierarchical Bayseian model. The python service was also responsible for updating the model everyday based on the new incoming data. It also performed cross validation to ensure that performance of the model is not degrading, in which case it used to alert the dev team.

- A python module responsible for further processing SMS tagged as 'financial transaction' and capture the actual amounts in the SMS. We experimented with ML model, but finally decided to use regexes depending upon the SMS tags as they gave the best performance.
