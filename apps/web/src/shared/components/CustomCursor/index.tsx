'use client';

import {useEffect, useRef} from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const ringPos = useRef({x: 0, y: 0});
    const mousePos = useRef({x: 0, y: 0});
    const rafId = useRef<number>(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = {x: e.clientX, y: e.clientY};
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;
            }
        };

        const animateRing = () => {
            const dx = mousePos.current.x - ringPos.current.x;
            const dy = mousePos.current.y - ringPos.current.y;
            ringPos.current.x += dx * 0.12;
            ringPos.current.y += dy * 0.12;
            if (ringRef.current) {
                ringRef.current.style.left = `${ringPos.current.x}px`;
                ringRef.current.style.top = `${ringPos.current.y}px`;
            }
            rafId.current = requestAnimationFrame(animateRing);
        };

        window.addEventListener('mousemove', handleMouseMove, {passive: true});
        rafId.current = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} id="cursor-dot" aria-hidden="true"/>
            <div ref={ringRef} id="cursor-ring" aria-hidden="true"/>
        </>
    );
}