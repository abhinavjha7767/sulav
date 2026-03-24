"use client";

import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
        if (isMobile) return;

        const cursor = cursorRef.current;
        const trail = trailRef.current;
        if (!cursor || !trail) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let trailX = 0;
        let trailY = 0;
        let animationId: number;
        let isActive = true;

        const handleMouseMove = (event: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            mouseX = event.clientX;
            mouseY = event.clientY;
        };

        const handleMouseOver = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const isClickable = 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' || 
                target.closest('a') !== null || 
                target.closest('button') !== null ||
                target.hasAttribute('onclick') ||
                window.getComputedStyle(target).cursor === 'pointer';
            
            setIsHovering(isClickable);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);

        const animate = () => {
            if (!isActive) return;
            
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;

            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
            trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;

            animationId = requestAnimationFrame(animate);
        };
        animationId = requestAnimationFrame(animate);

        // Hover animations with Anime.js
        if (isHovering) {
            anime({
                targets: cursor,
                scale: 1.5,
                opacity: 0.8,
                backgroundColor: '#3b82f6',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)',
                duration: 300,
                easing: 'easeOutExpo'
            });
            anime({
                targets: trail,
                scale: 2,
                opacity: 0.4,
                duration: 400,
                easing: 'easeOutExpo'
            });
        } else {
            anime({
                targets: cursor,
                scale: 1,
                opacity: 1,
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
                duration: 300,
                easing: 'easeOutExpo'
            });
            anime({
                targets: trail,
                scale: 1,
                opacity: 0.2,
                duration: 400,
                easing: 'easeOutExpo'
            });
        }

        return () => {
            isActive = false;
            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isHovering, isVisible]);

    return (
        <div 
            className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            id="custom-cursor-container"
        >
            {/* Main Cursor Dot */}
            <div 
                ref={cursorRef} 
                className="w-3 h-3 bg-blue-500/50 rounded-full fixed -top-1.5 -left-1.5 border border-white/20"
                style={{ willChange: 'transform' }}
            />
            {/* Trail Effect */}
            <div 
                ref={trailRef} 
                className="w-10 h-10 border border-blue-400/20 rounded-full fixed -top-5 -left-5 bg-blue-400/5"
                style={{ willChange: 'transform' }}
            />
        </div>
    );
};

export default CustomCursor;
