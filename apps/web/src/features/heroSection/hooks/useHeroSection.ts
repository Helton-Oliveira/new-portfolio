import {useEffect, useRef} from "react";
import {useTheme} from "next-themes";

export default function useHeroSection() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const {theme} = useTheme();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!titleRef.current) return;
            const {clientX, clientY} = e;
            const {innerWidth, innerHeight} = window;
            const xPct = (clientX / innerWidth - 0.5) * 2;
            const yPct = (clientY / innerHeight - 0.5) * 2;
            const xOffset = xPct * 14;
            const yOffset = yPct * 8;
            titleRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return {
        titleRef,
        sectionRef,
        theme
    };
}