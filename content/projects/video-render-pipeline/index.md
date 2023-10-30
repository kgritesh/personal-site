---
title: 'Case Study: Video Rendering Pipeline for an AI-Driven Text-to-Video Platform'
date: '2023-01-01T18:30:00.000Z'
period: 'Jan, 2023 - Apr, 2023'
technologies: 'Typescript, pnpm, ffmpeg, python'
source: null
type: 'project'
companyURL: 'https://rephrase.ai'
published: true
description: 'A case study on how we built a new video rendering engine in 4 months'
---

**Context**:
A leading AI company offers a cloud-based video editor, its core product, enabling users to effortlessly convert text into video with human avatars. The editor supports a wide range of features, from backgrounds, media integration, and text overlays to animations, transitions, fonts, styling, and scene management. Video generation operates as a pipeline: users begin by crafting a video using the browser-based tool, previewing their creation in real-time. Once satisfied, the video undergoes a render pipeline that culminates in the production of a full HD video, ensuring the final output mirrors the preview's fidelity. At its foundation, the frontend editor employs React, while the backend relies on a custom ffmpeg video renderer.

**Problem**:

The company's video editor relied on a dual system: a React-based preview in the browser and an ffmpeg-driven backend for final video rendering. This architecture presented multiple challenges:

1. **Complexity of ffmpeg**: Using ffmpeg programmatically proved intricate due to its inherent complexities.

2. **Mismatch Between Preview and Final Render**: The separation of technologies (React for preview and ffmpeg for rendering) occasionally led to inconsistencies between the video preview and the final output.

3. **Duplication of Effort**: Introducing any new feature demanded double the effort: once for the preview in React and once more for the final render using ffmpeg. Moreover, ensuring consistency between these two stages added to the workload.

4. **Limitations with ffmpeg**: The use of ffmpeg imposed constraints on integrating advanced video editing features.

Furthermore, the ideal solution needed to meet specific criteria:

- Video generation time should align with the video's actual duration.
- The cost of rendering should not exceed 1Rs per minute of video.
- The solution should be feasible for relatively swift development and integration.

**Challenges and Solution**

1. **Evaluating Browser-Based Solutions**: Drawing from my prior experience with video rendering pipelines, it was evident that a browser-centric solution could address our functional requirements. However, constraints related to cost and development time necessitated further exploration.

2. **Library Exploration for Time-Efficiency**: An open-source library promising the conversion of React components to video emerged as a viable solution for rapid deployment. Preliminary experiments ensured its compatibility with our feature set. An in-depth examination of the library's source code was undertaken to gauge its maintainability, ease of potential forking, and readiness for production scenarios. Direct discussions with the library's author and the wider community bolstered our confidence in its capabilities.

3. **Benchmarking Library Performance on Lambda**: The library was designed to operate on AWS Lambda. A series of benchmarks provided insights into its performance metrics, both in terms of rendering time and cost implications.

**4. Cost and Timing Optimization with Prototype Benchmarking**: While the library met our immediate requirements, it presented cost-related challenges for the future, inherently rendering at a rate of 1fps. Recognizing this, I built a simplified clone of the open-source library to conduct focused benchmarking. The tests indicated that by leveraging the library's approach, we could achieve up to 4 FPS. The primary limitation was identified as the screenshot capture time, which took approximately 200ms per frame. This understanding offered clarity on the potential to optimize and align with the company's future cost and performance goals.

5. **Addressing the VP8 Format Bottleneck**: The human avatar component of our rendering pipeline employed the VP8 video format for transparency support. While the chosen open-source platform accommodated VP8, it did so with suboptimal speeds. After experimenting with ffmpeg's WebAssembly version to disintegrate the video into frame sequences, we decided to restructure the text-to-video stage. Instead of producing videos, it was reconfigured to generate images directly, yielding twin advantages in performance and cost.

6. **Custom ffmpeg Integration**: Our use case demanded specific ffmpeg flags and a customized ffmpeg version – elements not supported natively by the library. To bridge this gap, I employed pnpm patching and automated the building of a custom ffmpeg version from its source.

7. **Code Reusability for Consistency**: A design approach was adopted where the developed code functioned as a reusable library. This allowed its integration into both the frontend for previews and the backend for final video rendering, ensuring uniformity across stages.

8. **Animation and Transition Integration**: The final development phase involved the addition of animation and scene transition capabilities to the platform.

**Impact**:

1. **Stable Production Implementation**: The solution has been integrated into production and operates with minimal disruptions. It is written in 100% typescript with ~90% test coverage

2. **Consistent Previews and Renders**: The disparity between previews and final video renders, previously a pain point, has been eradicated, ensuring consistent user expectations.

3. **Swift Feature Integration**: The new system facilitated the rapid introduction of enhancements like custom fonts, animations, and scene transitions, effectively halving the time and effort previously required for such additions.

4. **Seamless Scaling**: With the implemented improvements, the platform now comfortably handles the rendering of up to 100,000 videos daily without necessitating additional adjustments or overhead.
