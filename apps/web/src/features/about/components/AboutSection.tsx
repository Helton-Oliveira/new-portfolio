'use client';

import React, {useEffect, useRef, useState} from 'react';
import AppImage from "@/shared/components/ui/AppImage";
import avatar from "@/assets/images/profile.png";

const stats = [
    {value: 5, suffix: '+', label: 'Years experience'},
    {value: 40, suffix: '+', label: 'Projects shipped'},
    {value: 12, suffix: '', label: 'Happy clients'}];


const tickerItems = [
    'React', '✦', 'Next.js', '✦', 'TypeScript', '✦', 'Node.js', '✦',
    'PostgreSQL', '✦', 'Tailwind CSS', '✦', 'Docker', '✦', 'Figma', '✦',
    'GraphQL', '✦', 'AWS', '✦', 'Prisma', '✦', 'Redis', '✦',
    'React', '✦', 'Next.js', '✦', 'TypeScript', '✦', 'Node.js', '✦',
    'PostgreSQL', '✦', 'Tailwind CSS', '✦', 'Docker', '✦', 'Figma', '✦',
    'GraphQL', '✦', 'AWS', '✦', 'Prisma', '✦', 'Redis', '✦'];


function useCountUp(target: number, duration = 2000, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

function StatCounter({value, suffix, label, started}: {
    value: number;
    suffix: string;
    label: string;
    started: boolean;
}) {
    const count = useCountUp(value, 1800, started);
    return (
        <div className="text-center md:text-left">
            <div
                className="stat-number font-fraunces font-black"
                style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em'
                }}>

                {count}{suffix}
            </div>
            <div className="font-dm mt-1" style={{
                fontSize: '13px',
                color: 'rgba(26,26,26,0.45)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 600
            }}>
                {label}
            </div>
        </div>);

}

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [statsStarted, setStatsStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStatsStarted(true);
                        // Reveal children
                        entry.target.querySelectorAll('.reveal').forEach((el) => {
                            el.classList.add('revealed');
                        });
                    }
                });
            },
            {threshold: 0.15}
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="relative py-28 md:py-36 overflow-hidden"
                 style={{background: 'var(--bg-primary)'}}>
            <div className="noise-overlay"/>
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Eyebrow */}
                <p className="section-eyebrow font-dm mb-16 reveal">About</p>

                {/* Asymmetric two-column layout */}
                <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start mb-24">
                    {/* Left: Photo */}
                    <div className="md:col-span-5 reveal reveal-delay-1">
                        <div className="relative">
                            <div
                                className="overflow-hidden"
                                style={{borderRadius: '24px 64px 24px 24px', aspectRatio: '3/4'}}>

                                <AppImage
                                    src={avatar}
                                    alt="Helton Oliveira, full-stack developer, smiling in a bright minimal workspace with natural light"
                                    className="w-full h-full object-cover"
                                    style={{filter: 'saturate(0.85)'} as React.CSSProperties}/>

                            </div>
                            {/* Floating accent card */}
                            <div
                                className="glass absolute -bottom-6 -right-6 px-5 py-4 reveal reveal-delay-3"
                                style={{borderRadius: '16px', minWidth: '160px'}}>

                                <div className="font-fraunces font-black text-2xl"
                                     style={{color: 'var(--text-primary)', letterSpacing: '-0.02em'}}>Paris, FR
                                </div>
                                <div className="font-dm text-xs mt-1" style={{
                                    color: 'rgba(26,26,26,0.45)',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase'
                                }}>Based in
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Bio */}
                    <div className="md:col-span-7 md:pt-8">
                        <h2
                            className="font-fraunces font-black mb-6 reveal reveal-delay-1"
                            style={{
                                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                                lineHeight: '1.1',
                                letterSpacing: '-0.03em',
                                color: 'var(--text-primary)'
                            }}>

                            I turn complex ideas into{' '}
                            <span style={{color: 'var(--accent-primary)'}}>elegant</span>{' '}
                            digital products.
                        </h2>
                        <p
                            className="font-dm mb-6 reveal reveal-delay-2"
                            style={{
                                fontSize: '1.05rem',
                                lineHeight: '1.75',
                                color: 'rgba(26,26,26,0.6)',
                                maxWidth: '520px'
                            }}>

                            I'm a full-stack developer with 5+ years of experience building
                            performant, beautiful web applications. I care deeply about the
                            intersection of design and engineering — where pixel-perfect
                            interfaces meet robust, scalable systems.
                        </p>
                        <p
                            className="font-dm mb-10 reveal reveal-delay-3"
                            style={{
                                fontSize: '1.05rem',
                                lineHeight: '1.75',
                                color: 'rgba(26,26,26,0.6)',
                                maxWidth: '520px'
                            }}>

                            When I'm not coding, you'll find me exploring Parisian museums,
                            shooting film photography, or obsessing over typeface specimens.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 reveal reveal-delay-4">
                            {stats.map((s) =>
                                <StatCounter key={s.label} {...s} started={statsStarted}/>
                            )}
                        </div>
                    </div>
                </div>

                {/* Skills Ticker */}
                <div className="reveal">
                    <div className="deco-line mb-8"/>
                    <div className="overflow-hidden py-4"
                         style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
                        <div className="ticker-track">
                            {tickerItems.map((item, i) =>
                                    <span
                                        key={`tick-${i}`}
                                        className="font-dm inline-block px-4"
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: item === '✦' ? 400 : 600,
                                            letterSpacing: item === '✦' ? '0' : '0.08em',
                                            textTransform: 'uppercase',
                                            color: item === '✦' ? 'var(--accent-primary)' : 'rgba(26,26,26,0.35)',
                                            flexShrink: 0
                                        }}>

                  {item}
                </span>
                            )}
                        </div>
                    </div>
                    <div className="deco-line mt-8"/>
                </div>
            </div>
        </section>);

}