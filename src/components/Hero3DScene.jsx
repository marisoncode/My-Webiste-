import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, 6.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Oceanic Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0x0a2540, 2.2);
    scene.add(ambientLight);

    // Cyan Bioluminescent Rim Light (Top-Front)
    const cyanLight = new THREE.DirectionalLight(0x00d2ff, 4.0);
    cyanLight.position.set(2, 4, 4);
    scene.add(cyanLight);

    // Deep Azure Fill Light (Bottom-Back)
    const azureLight = new THREE.DirectionalLight(0x0284c7, 3.0);
    azureLight.position.set(-3, -2, 2);
    scene.add(azureLight);

    // Point light inside whale path for intense eye & crest reflection
    const pointLight = new THREE.PointLight(0x38bdf8, 2.5, 12);
    pointLight.position.set(0, 1.2, 3);
    scene.add(pointLight);

    // -------------------------------------------------------------
    // 3. THE 3D FRONT-FACED MOVING OCEANIC WHALE HIERARCHY
    // -------------------------------------------------------------
    const whaleRoot = new THREE.Group();
    scene.add(whaleRoot);

    // Shaders / Materials for Oceanic Bioluminescent Whale
    const whaleSkinMat = new THREE.MeshPhysicalMaterial({
      color: 0x061a40,
      emissive: 0x023e8a,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.3,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9
    });

    const ventralFurrowsMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x00d2ff,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.1
    });

    const glowAccentMat = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      wireframe: false
    });

    // --- A. Main Rostrum / Head (Front-facing curved dome) ---
    const headGeo = new THREE.ConeGeometry(0.85, 2.0, 32);
    headGeo.rotateX(Math.PI / 2);
    const headMesh = new THREE.Mesh(headGeo, whaleSkinMat);
    headMesh.position.set(0, 0, 0.4);
    headMesh.scale.set(1.15, 0.75, 1.3);
    whaleRoot.add(headMesh);

    // --- B. Ventral Furrows (Pleated Belly Grooves under chin) ---
    const bellyGeo = new THREE.SphereGeometry(0.72, 24, 16, 0, Math.PI);
    bellyGeo.rotateX(Math.PI / 2);
    const bellyMesh = new THREE.Mesh(bellyGeo, ventralFurrowsMat);
    bellyMesh.position.set(0, -0.22, 0.3);
    bellyMesh.scale.set(0.9, 0.5, 1.2);
    whaleRoot.add(bellyMesh);

    // Glowing Ventral Pleat Accent Lines
    for (let i = -3; i <= 3; i++) {
      const pleatGeo = new THREE.CylinderGeometry(0.012, 0.012, 1.4, 8);
      pleatGeo.rotateX(Math.PI / 2);
      const pleat = new THREE.Mesh(pleatGeo, glowAccentMat);
      pleat.position.set(i * 0.12, -0.32, 0.3);
      whaleRoot.add(pleat);
    }

    // --- C. Glowing Intelligent Eyes (Left & Right) ---
    const eyeGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x00d2ff,
      emissiveIntensity: 3.5,
      roughness: 0.05
    });

    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.55, 0.05, 0.7);
    whaleRoot.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.55, 0.05, 0.7);
    whaleRoot.add(rightEye);

    // --- D. Torso / Midsection ---
    const torsoGeo = new THREE.CylinderGeometry(0.82, 0.65, 1.8, 32);
    torsoGeo.rotateX(Math.PI / 2);
    const torsoMesh = new THREE.Mesh(torsoGeo, whaleSkinMat);
    torsoMesh.position.set(0, 0.02, -0.9);
    torsoMesh.scale.set(1.05, 0.8, 1);
    whaleRoot.add(torsoMesh);

    // Dorsal Fin Ridge
    const dorsalGeo = new THREE.ConeGeometry(0.18, 0.65, 4);
    dorsalGeo.rotateX(-Math.PI / 3);
    const dorsalMesh = new THREE.Mesh(dorsalGeo, whaleSkinMat);
    dorsalMesh.position.set(0, 0.62, -1.2);
    whaleRoot.add(dorsalMesh);

    // --- E. Dynamic Pectoral Swimming Fins (Left & Right Wings) ---
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.quadraticCurveTo(1.2, 0.3, 2.2, -0.5);
    finShape.quadraticCurveTo(1.6, -0.7, 0, -0.2);
    finShape.closePath();

    const extrudeSettings = { depth: 0.06, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.02, bevelThickness: 0.02 };
    const finGeo = new THREE.ExtrudeGeometry(finShape, extrudeSettings);

    // Left Fin Group for natural rotation pivot
    const leftFinGroup = new THREE.Group();
    leftFinGroup.position.set(-0.7, -0.1, -0.2);
    const leftFinMesh = new THREE.Mesh(finGeo, whaleSkinMat);
    leftFinMesh.rotation.y = Math.PI;
    leftFinMesh.rotation.x = -Math.PI / 10;
    leftFinGroup.add(leftFinMesh);
    whaleRoot.add(leftFinGroup);

    // Right Fin Group
    const rightFinGroup = new THREE.Group();
    rightFinGroup.position.set(0.7, -0.1, -0.2);
    const rightFinMesh = new THREE.Mesh(finGeo, whaleSkinMat);
    rightFinMesh.rotation.x = Math.PI / 10;
    rightFinGroup.add(rightFinMesh);
    whaleRoot.add(rightFinGroup);

    // --- F. Articulated Swimming Tail & Wide Flukes ---
    const tailGroup1 = new THREE.Group();
    tailGroup1.position.set(0, 0, -1.8);
    whaleRoot.add(tailGroup1);

    const tailGeo1 = new THREE.CylinderGeometry(0.62, 0.42, 1.4, 24);
    tailGeo1.rotateX(Math.PI / 2);
    const tailMesh1 = new THREE.Mesh(tailGeo1, whaleSkinMat);
    tailMesh1.position.set(0, 0, -0.6);
    tailMesh1.scale.set(0.9, 0.75, 1);
    tailGroup1.add(tailMesh1);

    // Tail Segment 2 (Peduncle)
    const tailGroup2 = new THREE.Group();
    tailGroup2.position.set(0, 0, -1.3);
    tailGroup1.add(tailGroup2);

    const tailGeo2 = new THREE.CylinderGeometry(0.4, 0.18, 1.2, 24);
    tailGeo2.rotateX(Math.PI / 2);
    const tailMesh2 = new THREE.Mesh(tailGeo2, whaleSkinMat);
    tailMesh2.position.set(0, 0, -0.5);
    tailMesh2.scale.set(0.7, 0.65, 1);
    tailGroup2.add(tailMesh2);

    // Tail Flukes (Wide Crescent Fins)
    const flukesShape = new THREE.Shape();
    flukesShape.moveTo(0, 0);
    flukesShape.quadraticCurveTo(1.4, 0.4, 2.0, 0.8);
    flukesShape.quadraticCurveTo(1.6, -0.1, 0, -0.4);
    flukesShape.quadraticCurveTo(-1.6, -0.1, -2.0, 0.8);
    flukesShape.quadraticCurveTo(-1.4, 0.4, 0, 0);

    const flukesGeo = new THREE.ExtrudeGeometry(flukesShape, extrudeSettings);
    const flukesMesh = new THREE.Mesh(flukesGeo, whaleSkinMat);
    flukesMesh.position.set(0, 0, -1.05);
    flukesMesh.scale.set(0.75, 0.75, 0.75);
    tailGroup2.add(flukesMesh);

    // Glowing Fluke Trim Line
    const flukeTrimGeo = new THREE.TorusGeometry(0.65, 0.02, 8, 32, Math.PI);
    flukeTrimGeo.rotateX(Math.PI / 2);
    const flukeTrim = new THREE.Mesh(flukeTrimGeo, glowAccentMat);
    flukeTrim.position.set(0, 0.02, -1.1);
    tailGroup2.add(flukeTrim);

    // -------------------------------------------------------------
    // 4. SOFT CELESTIAL FLUID OCEANIC CORONA RINGS (Not harsh knot)
    // -------------------------------------------------------------
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    // Outer Soft Fluid Ring
    const ringGeo1 = new THREE.TorusGeometry(2.6, 0.04, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      transparent: true,
      opacity: 0.55
    });
    const fluidRing1 = new THREE.Mesh(ringGeo1, ringMat1);
    fluidRing1.rotation.x = Math.PI / 2.3;
    ringGroup.add(fluidRing1);

    // Inner Radiant Ring
    const ringGeo2 = new THREE.TorusGeometry(2.1, 0.03, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7
    });
    const fluidRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    fluidRing2.rotation.x = Math.PI / 2.2;
    fluidRing2.rotation.y = 0.2;
    ringGroup.add(fluidRing2);

    // -------------------------------------------------------------
    // 5. BIOLUMINESCENT FLOATING SEA-FOAM & STARLIGHT PARTICLES
    // -------------------------------------------------------------
    const particlesCount = 420;
    const positions = new Float32Array(particlesCount * 3);
    const particleColors = new Float32Array(particlesCount * 3);

    const glowTones = [
      new THREE.Color('#00d2ff'),
      new THREE.Color('#38bdf8'),
      new THREE.Color('#7dd3fc'),
      new THREE.Color('#ffffff')
    ];

    for (let i = 0; i < particlesCount; i++) {
      const radius = 2.0 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const tone = glowTones[i % glowTones.length];
      particleColors[i * 3] = tone.r;
      particleColors[i * 3 + 1] = tone.g;
      particleColors[i * 3 + 2] = tone.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // -------------------------------------------------------------
    // 6. MOUSE TRACKING & PARALLAX PHYSICS
    // -------------------------------------------------------------
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.targetY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // -------------------------------------------------------------
    // 7. RENDER & ANIMATION LOOP (REALISTIC SWIMMING PHYSICS)
    // -------------------------------------------------------------
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Whale rhythmic swimming cycle (2.2 rad/s)
      const swimFreq = elapsedTime * 2.2;

      // Tail spine undulation (sinusoidal sweep)
      tailGroup1.rotation.y = Math.sin(swimFreq) * 0.28;
      tailGroup1.rotation.x = Math.cos(swimFreq) * 0.08;
      tailGroup2.rotation.y = Math.sin(swimFreq - 0.5) * 0.38;
      flukesMesh.rotation.y = Math.sin(swimFreq - 0.8) * 0.25;

      // Pectoral flipper flapping
      leftFinGroup.rotation.z = Math.sin(swimFreq) * 0.18 + 0.15;
      leftFinGroup.rotation.y = Math.cos(swimFreq) * 0.12 - 0.1;

      rightFinGroup.rotation.z = -Math.sin(swimFreq) * 0.18 - 0.15;
      rightFinGroup.rotation.y = -Math.cos(swimFreq) * 0.12 + 0.1;

      // Main Whale body floating & breathing heave
      whaleRoot.position.y = Math.sin(elapsedTime * 1.4) * 0.12 + (mouse.y * 0.3);
      whaleRoot.position.x = mouse.x * 0.5;
      whaleRoot.position.z = Math.cos(elapsedTime * 1.0) * 0.15;

      // Forward-facing pose with smooth bank toward cursor
      whaleRoot.rotation.y = (mouse.x * 0.45) + (Math.sin(swimFreq * 0.5) * 0.08);
      whaleRoot.rotation.x = 0.15 - (mouse.y * 0.3) + (Math.cos(swimFreq) * 0.05);
      whaleRoot.rotation.z = -mouse.x * 0.25 + (Math.sin(swimFreq) * 0.06);

      // Fluid oceanic corona rings soft rotation
      ringGroup.rotation.z = elapsedTime * 0.15;
      ringGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08;
      ringGroup.rotation.x = Math.PI / 2.3 + (mouse.y * 0.15);
      ringGroup.rotation.y = mouse.x * 0.2;

      // Ambient particles slow drift
      particlesMesh.rotation.y = elapsedTime * 0.04;
      particlesMesh.rotation.x = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // -------------------------------------------------------------
    // 8. RESIZE LISTENER
    // -------------------------------------------------------------
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
    />
  );
}
