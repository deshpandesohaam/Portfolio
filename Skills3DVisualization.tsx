"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Skills3DVisualization({ skillLevel = 85 }: { skillLevel?: number }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const helixGroup = new THREE.Group();

    const points = 30;
    const radius = 0.5;
    const height = 2;
    const sphereGeometry = new THREE.SphereGeometry(0.05, 16, 16);

    for (let i = 0; i < points; i++) {
      const t = i / points;
      const angle1 = t * Math.PI * 4;
      const angle2 = angle1 + Math.PI;
      const y = (t - 0.5) * height;

      const material1 = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.8 });
      const sphere1 = new THREE.Mesh(sphereGeometry, material1);
      sphere1.position.set(Math.cos(angle1) * radius, y, Math.sin(angle1) * radius);
      helixGroup.add(sphere1);

      const material2 = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.8 });
      const sphere2 = new THREE.Mesh(sphereGeometry, material2);
      sphere2.position.set(Math.cos(angle2) * radius, y, Math.sin(angle2) * radius);
      helixGroup.add(sphere2);

      if (i % 3 === 0) {
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.3 });
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([sphere1.position, sphere2.position]);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        helixGroup.add(line);
      }
    }

    scene.add(helixGroup);

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      helixGroup.rotation.y = elapsedTime * 0.5;
      helixGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2;
      const scale = 1 + (skillLevel / 100) * Math.sin(elapsedTime * 2) * 0.1;
      helixGroup.scale.set(scale, scale, scale);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeometry.dispose();
    };
  }, [skillLevel]);

  return <div ref={mountRef} className="w-full h-full" style={{ minHeight: '200px' }} />;
}
