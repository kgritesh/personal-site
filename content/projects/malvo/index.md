---
title: 'Malvo'
date: '2017-10-30'
period: 'Aug - Oct, 2017'
technologies: 'C, C++, webassembly, websockets, nodejs, android ndk, rust, terraform, electron'
source: null
type: 'project'
published: true
description: 'Experiment to allow crypto mining on the browser and mobile phones'
---

An experiment to build out a platform that allows publishers to replace adds with crypto miners(monero) running on user's browser / mobile phones. This project involved following components

- Cross compilied a monero mining app into web assembly. This involved a lot of low level stuff and forking the original miner
- Built a js sdk that allows publishers to integrate the webassembly powered monero miner on their website. It also consisted of websocket that allowed it to interact with the mining pool,
- Built an android sdk powered by rust that allowed android developers to integrate the monero miner in their android apps
- A backend to support registration of publishers and keeping track of their revenue
- A service that act as a middlelayer between monero miners running on millions of user browser and mobile phones and couple of monero mining pools.
- A desktop app that allowed publishers to calculate their revenue based on price of monero and their current daily active users.
