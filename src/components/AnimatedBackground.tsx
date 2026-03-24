"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        objects: THREE.Mesh[];
        particles: THREE.Points;
        lights: THREE.Light[];
    } | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Check WebGL support before attempting to initialize
        const testCanvas = document.createElement('canvas');
        const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
        if (!gl) {
            console.warn('WebGL not supported — AnimatedBackground skipped.');
            return;
        }
        // Release the test context so THREE.js can create its own
        (gl as WebGLRenderingContext).getExtension('WEBGL_lose_context')?.loseContext();

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
        const pixelRatio = isMobile ? 1 : Math.min(window.devicePixelRatio, 2);

        let renderer: THREE.WebGLRenderer;
        const originalConsoleError = console.error;
        try {
            console.error = () => {};

            // Scene initialization
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ 
                antialias: !isMobile,
                alpha: true,
                powerPreference: isMobile ? "low-power" : "high-performance"
            });

            // Restore console.error immediately after renderer creation
            console.error = originalConsoleError;

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(pixelRatio);
            containerRef.current.appendChild(renderer.domElement);

            camera.position.z = 8;

            // Theme check
            const isDarkMode = () => document.documentElement.classList.contains('dark');
            
            // Materials: Industrial Metallic/Glass effect
            const getMaterials = () => {
                const dark = isDarkMode();
                return new THREE.MeshPhysicalMaterial({
                    thickness: 0.5,
                    roughness: dark ? 0.2 : 0.4,
                    transmission: 0.8,
                    ior: 1.5,
                    reflectivity: 0.5,
                    clearcoat: isMobile ? 0 : 1,
                    clearcoatRoughness: 0.1,
                    color: dark ? new THREE.Color('#3b82f6') : new THREE.Color('#2563eb'),
                    transparent: true,
                    opacity: dark ? 0.3 : 0.15,
                });
            };

            // Industrial Shapes - Tiered by device
            const shapes = [
                new THREE.TorusGeometry(1.5, 0.5, 8, isMobile ? 24 : 50),
                new THREE.IcosahedronGeometry(2, 0),
                new THREE.CylinderGeometry(1, 1, 0.4, 6),
                ...(isMobile ? [] : [
                    new THREE.TorusGeometry(1.2, 0.2, 16, 100),
                    new THREE.OctahedronGeometry(1.5, 0),
                ])
            ];

            const objects: THREE.Mesh[] = [];
            shapes.forEach((geometry) => {
                const mesh = new THREE.Mesh(geometry, getMaterials());
                mesh.position.set(
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 10,
                    -Math.random() * 5
                );
                mesh.rotation.x = Math.random() * Math.PI;
                mesh.rotation.y = Math.random() * Math.PI;
                (mesh as any).floatOffset = Math.random() * Math.PI * 2;
                (mesh as any).floatSpeed = 0.2 + Math.random() * 0.3;
                (mesh as any).rotSpeed = (Math.random() - 0.5) * 0.01;
                scene.add(mesh);
                objects.push(mesh);
            });

            // Particle field
            const particlesCount = isMobile ? 400 : 1000;
            const positions = new Float32Array(particlesCount * 3);
            for (let i = 0; i < particlesCount * 3; i++) {
                positions[i] = (Math.random() - 0.5) * 30;
            }
            const particlesGeometry = new THREE.BufferGeometry();
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                size: isMobile ? 0.04 : 0.02,
                color: isDarkMode() ? '#60a5fa' : '#3b82f6',
                transparent: true,
                opacity: 0.5,
                sizeAttenuation: true
            });
            const particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            // Lights
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);
            const pointLight1 = new THREE.PointLight(0x3b82f6, 2);
            pointLight1.position.set(10, 10, 10);
            scene.add(pointLight1);
            const pointLight2 = !isMobile ? new THREE.PointLight(0x6366f1, 1.5) : null;
            if (pointLight2) {
                pointLight2.position.set(-10, -10, 5);
                scene.add(pointLight2);
            }

            sceneRef.current = { scene, camera, renderer, objects, particles, lights: [ambientLight, pointLight1, pointLight2].filter(Boolean) as THREE.Light[] };

            // Interaction state
            let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0, scrollY = 0;
            const handleMouseMove = (event: MouseEvent) => {
                mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
                mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
            };
            const handleScroll = () => { scrollY = window.scrollY; };
            if (!isMobile) window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('scroll', handleScroll);

            // Theme observer
            const observer = new MutationObserver(() => {
                const dark = isDarkMode();
                objects.forEach(obj => {
                    const mat = obj.material as THREE.MeshPhysicalMaterial;
                    mat.color = dark ? new THREE.Color('#3b82f6') : new THREE.Color('#2563eb');
                    mat.opacity = dark ? 0.3 : 0.1;
                    mat.roughness = dark ? 0.2 : 0.4;
                });
                particlesMaterial.color = new THREE.Color(dark ? '#60a5fa' : '#3b82f6');
                pointLight1.intensity = dark ? 2 : 1;
                if (pointLight2) pointLight2.intensity = dark ? 1.5 : 0.8;
            });
            observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

            // Animation loop
            let animationId: number;
            let lastTime = 0;
            let isActive = true;

            const animate = (time: number) => {
                if (!isActive) return;
                animationId = requestAnimationFrame(animate);
                if (isMobile && time - lastTime < 32) return;
                lastTime = time;
                if (!isMobile) {
                    targetX += (mouseX - targetX) * 0.05;
                    targetY += (mouseY - targetY) * 0.05;
                    camera.position.x = targetX * 0.3;
                    camera.position.y = -targetY * 0.3;
                    camera.lookAt(0, 0, 0);
                }
                objects.forEach((obj, i) => {
                    const mesh = obj as any;
                    mesh.position.y += Math.sin(time * 0.001 * mesh.floatSpeed + mesh.floatOffset) * 0.003;
                    mesh.rotation.x += mesh.rotSpeed;
                    mesh.rotation.y += mesh.rotSpeed * 1.1;
                    mesh.position.z = -Math.abs(Math.sin(i)) * 5 + (scrollY * 0.002);
                });
                particles.rotation.y += 0.0002;
                particles.position.y = -scrollY * 0.001;
                renderer.render(scene, camera);
            };

            const handleVisibilityChange = () => {
                isActive = !document.hidden;
                if (isActive) { lastTime = performance.now(); animate(lastTime); }
                else cancelAnimationFrame(animationId);
            };
            document.addEventListener("visibilitychange", handleVisibilityChange);
            animate(0);

            const handleResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };
            window.addEventListener('resize', handleResize);

            return () => {
                if (!isMobile) window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
                document.removeEventListener("visibilitychange", handleVisibilityChange);
                observer.disconnect();
                cancelAnimationFrame(animationId);
                if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
                    containerRef.current.removeChild(renderer.domElement);
                }
                objects.forEach(obj => {
                    obj.geometry.dispose();
                    (obj.material as THREE.Material).dispose();
                });
                particlesGeometry.dispose();
                particlesMaterial.dispose();
                renderer.dispose();
            };
        } catch (err) {
            console.error = originalConsoleError; // Always restore
            console.warn('AnimatedBackground: WebGL initialization failed, skipping.');
            return;
        }
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-transparent overflow-hidden"
            id="three-background"
        />
    );
};

export default AnimatedBackground;
