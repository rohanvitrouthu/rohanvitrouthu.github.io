---
title: "LinguaStream | Real-Time AI Audio Translation Engine"
date: 2024-04-01
draft: false
---

* **Real-Time 3-Stage Pipeline**: Architected and deployed a parallelized pipeline integrating Deepgram (ASR), Sarvam AI (Translation), and Sarvam AI (TTS bulbul:v3) to deliver human-like dubbing with minimal latency.
* **Full-Duplex Orchestration**: Engineered a FastAPI-based backend utilizing WebSockets for raw audio processing, ensuring seamless bidirectional streaming between the browser extension and AI microservices.
* **Advanced Audio Synchronization**: Built a robust front-end using the Web Audio API with a custom jitter buffer, gapless playback, and dynamic auto-ducking to superimpose translated, synthesized speech over live videos.
