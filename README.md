# Wolf Studio

## Overview

Wolf Studio is an immersive, single-page creative studio showcase. It combines a fixed 3D scene with editorial-style content to create an interactive portfolio experience: visitors can scroll through the studio introduction, explore featured projects, and see the scene respond to their movement and hover interactions. its a clone of dogstudio.

I created this project to learn how to work with 3D models and this is my first project with threeJS and GSAP. 

## Tech Stack Used

- **React 19** for the component-based user interface
- **Vite** for the development environment and production builds
- **Three.js** for WebGL rendering and 3D materials
- **React Three Fiber** to build the Three.js scene declaratively in React
- **React Three Drei** for loading the GLB model, textures, animations, and controls
- **GSAP** and **ScrollTrigger** for scroll-linked animation and material transitions
- **CSS** for layout, project-image reveals, typography, and visual effects

## Features

- Animated 3D dog model rendered in a full-screen WebGL canvas
- Scroll-driven camera-model positioning and rotation for a more dynamic narrative
- Cursor-reactive 3D movement with smooth damping
- Project list with hover states that reveal the corresponding fullscreen artwork
- Dynamic matcap material changes on the 3D model for each featured project
- Animated shader blend between matcap textures for smooth visual transitions
- Studio-style landing page, navigation, project showcase, and about content
- Custom textures, normal maps, and lighting to give the model a stylized look

## What I Learned

- How to integrate a Three.js scene into React with React Three Fiber
- How to load and play animations from a GLB model using Drei
- How normal maps and matcap textures can create a polished 3D material without complex lighting
- How to customize a Three.js material shader with `onBeforeCompile` and animate its uniforms with GSAP
- How to connect page scroll to 3D transformations using GSAP ScrollTrigger
- How to combine DOM interactions, CSS hover selectors, and WebGL state for a cohesive experience
- How to make cursor-driven 3D motion feel natural with interpolation and frame-based updates
