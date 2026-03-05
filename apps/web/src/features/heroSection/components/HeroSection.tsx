'use client';

import {useEffect, useRef} from 'react';

interface HeroSectionProps {
    title?: string;
    subTitle?: string;
    phrase?: string;
}


export default function HeroSection({
                                        title = 'Helton',
                                        subTitle = 'Oliveira',
                                        phrase = '',
                                    }: HeroSectionProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

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

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{background: 'var(--bg-primary)'}}
        >
            {/* Gradient mesh background */}
            <div className="hero-mesh"/>
            {/* Noise texture */}
            <div className="noise-overlay"/>

            {/* Floating decorative circles */}
            <div
                className="absolute top-[15%] right-[8%] w-48 h-48 rounded-full opacity-20 animate-float-slow"
                style={{background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)'}}
            />
            <div
                className="absolute bottom-[20%] left-[6%] w-64 h-64 rounded-full opacity-15 animate-float-medium"
                style={{
                    background: 'radial-gradient(circle, var(--neutral-warn) 0%, transparent 70%)',
                    animationDelay: '1.5s',
                }}
            />
            <div
                className="absolute top-[60%] right-[20%] w-32 h-32 rounded-full opacity-20"
                style={{
                    background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
                    animation: 'floatSlow 7s ease-in-out infinite',
                    animationDelay: '3s',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
                {/* Available badge */}
                <div className="reveal mb-8">
          <span className="available-badge font-dm">
            <span className="available-dot"/>
            Available for freelance ✦
          </span>
                </div>

                {/* Main title */}
                <div className="overflow-visible mb-6">
                    <h1
                        ref={titleRef}
                        id="hero-title"
                        className="font-black leading-none select-none"
                        style={{
                            fontSize: 'clamp(4rem, 11vw, 10rem)',
                            letterSpacing: '-0.04em',
                            lineHeight: '0.90',
                            color: 'var(--text-primary)',
                        }}
                    >
                        <span className="block reveal reveal-delay-1">{title}</span>
                        <span className="block reveal reveal-delay-2"
                              style={{
                                  WebkitTextStroke: '2px var(--text-primary)',
                                  color: 'transparent',
                              }}
                        > {`${subTitle}.`} </span>
                    </h1>
                </div>

                {/* Tagline */}
                <p
                    className="font-dm reveal reveal-delay-3 max-w-xl mb-10"
                    style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                        color: 'rgba(26,26,26,0.55)',
                        fontWeight: 400,
                        lineHeight: 1.65,
                        letterSpacing: '0.01em',
                    }}
                >
                    Crafting digital experiences with precision and soul.
                    <br/>
                    Full-stack developer based in Paris, building things that matter.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 reveal reveal-delay-4">
                    <a href="#projects" className="btn-primary font-dm">
                        View Work
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <a href="#contact" className="btn-ghost font-dm">
                        Get in Touch
                    </a>
                </div>

                {/* Scroll indicator */}
                <div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal reveal-delay-5"
                    style={{opacity: 0.35}}
                >
          <span className="font-dm text-xs tracking-widest uppercase" style={{letterSpacing: '0.2em'}}>
            Scroll
          </span>
                    <div
                        className="w-px h-10"
                        style={{
                            background: 'linear-gradient(to bottom, var(--text-primary), transparent)',
                            animation: 'floatSlow 2s ease-in-out infinite',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}