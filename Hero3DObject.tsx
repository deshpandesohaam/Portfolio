"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DObject() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const group = new THREE.Group();

    const createCodeSymbol = (symbol: string, position: THREE.Vector3, color: string) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      canvas.width = 128;
      canvas.height = 128;

      context.fillStyle = color;
      context.font = 'bold 80px monospace';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(symbol, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.8 });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(1, 1, 1);
      sprite.position.copy(position);

      return sprite;
    };

    const symbols = [
      { char: '{', pos: new THREE.Vector3(-2, 2, 0), color: '#8b5cf6' },
      { char: '}', pos: new THREE.Vector3(2, 2, 0), color: '#8b5cf6' },
      { char: '<', pos: new THREE.Vector3(-2, -2, 0), color: '#06b6d4' },
      { char: '>', pos: new THREE.Vector3(2, -2, 0), color: '#06b6d4' },
      { char: '/', pos: new THREE.Vector3(0, 2.5, 0), color: '#a855f7' },
      { char: '*', pos: new THREE.Vector3(0, -2.5, 0), color: '#22d3ee' },
    ];

    const codeSprites: { sprite: THREE.Sprite; offset: number }[] = [];
    symbols.forEach((sym) => {
      const sprite = createCodeSymbol(sym.char, sym.pos, sym.color);
      group.add(sprite);
      codeSprites.push({ sprite, offset: Math.random() * Math.PI * 2 });
    });

    const screenGeometry = new THREE.BoxGeometry(2, 1.2, 0.1);
    const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x1e293b, transparent: true, opacity: 0.6 });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);

    const glowGeometry = new THREE.BoxGeometry(2.1, 1.3, 0.05);
    const glowMaterial = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.3 });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.z = -0.05;
    screen.add(glow);

    group.add(screen);

    const binarySprites: { sprite: THREE.Sprite; angle: number; radius: number; speed: number }[] = [];
    for (let i = 0; i < 12; i++) {
      const binary = Math.random() > 0.5 ? '1' : '0';
      const angle = (i / 12) * Math.PI * 2;
      const radius = 3;
      const pos = new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (Math.random() - 0.5) * 2
      );
      const sprite = createCodeSymbol(binary, pos, '#06b6d4');
      (sprite as any).scale.set(0.5, 0.5, 0.5);
      group.add(sprite);
      binarySprites.push({ sprite, angle, radius, speed: 0.001 + Math.random() * 0.002 });
    }

    const cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const cubes: { mesh: THREE.Mesh; angle: number; radius: number; speed: number; offset: number }[] = [];
    const cubeColors = [0x8b5cf6, 0x06b6d4, 0xa855f7, 0x22d3ee];

    for (let i = 0; i < 4; i++) {
      const cubeMaterial = new THREE.MeshBasicMaterial({ color: cubeColors[i], wireframe: true, transparent: true, opacity: 0.8 });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cubes.push({ mesh: cube, angle: (Math.PI * 2 * i) / 4, radius: 2, speed: 0.002, offset: i * 0.5 });
      group.add(cube);
    }

    scene.add(group);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

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

      group.rotation.y = mouseX * 0.3 + elapsedTime * 0.1;
      group.rotation.x = mouseY * 0.2;

      if (glow) {
        const pulse = 0.3 + Math.sin(elapsedTime * 2) * 0.1;
        (glow.material as THREE.MeshBasicMaterial).opacity = pulse;
      }

      codeSprites.forEach((item) => {
        item.sprite.position.y += Math.sin(elapsedTime * 2 + item.offset) * 0.005;
        (item.sprite.material as THREE.SpriteMaterial).opacity = 0.6 + Math.sin(elapsedTime + item.offset) * 0.2;
      });

      binarySprites.forEach((item) => {
        item.angle += item.speed;
        item.sprite.position.x = Math.cos(item.angle) * item.radius;
        item.sprite.position.y = Math.sin(item.angle) * item.radius;
      });

      cubes.forEach((cubeData) => {
        cubeData.angle += cubeData.speed;
        cubeData.mesh.position.x = Math.cos(cubeData.angle + elapsedTime * 0.5) * cubeData.radius;
        cubeData.mesh.position.y = Math.sin(cubeData.angle + elapsedTime * 0.5) * cubeData.radius * 0.5;
        cubeData.mesh.position.z = Math.sin(cubeData.angle) * 1;
        cubeData.mesh.rotation.x += 0.01;
        cubeData.mesh.rotation.y += 0.015;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      screenGeometry.dispose();
      screenMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      cubeGeometry.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" style={{ minHeight: '400px' }} />;
}
