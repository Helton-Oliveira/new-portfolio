'use client';

import React, {useEffect, useRef} from 'react';

interface SkillTag {
    label: string;
    category: 'frontend' | 'backend' | 'devops' | 'design';
    style: React.CSSProperties;
}

const skills: SkillTag[] = [
    // Frontend
    {
        label: 'React',
        category: 'frontend',
        style: {
            top: '8%',
            left: '12%',
            background: 'var(--accent-primary-soft)',
            color: 'var(--accent-primary)',
            border: '1px solid rgba(201,164,160,0.3)'
        }
    },
    {
        label: 'Next.js',
        category: 'frontend',
        style: {
            top: '3%',
            left: '38%',
            background: '#F0EDE8',
            color: 'rgba(26,26,26,0.7)',
            border: '1px solid rgba(26,26,26,0.1)'
        }
    },
    {
        label: 'TypeScript',
        category: 'frontend',
        style: {
            top: '18%',
            left: '62%',
            background: 'var(--accent-primary-soft)',
            color: 'var(--accent-primary)',
            border: '1px solid rgba(201,164,160,0.3)'
        }
    },
    {
        label: 'Tailwind CSS',
        category: 'frontend',
        style: {
            top: '28%',
            left: '5%',
            background: 'var(--accent-primary-soft)',
            color: 'var(--accent-primary)',
            border: '1px solid rgba(201,164,160,0.3)'
        }
    },
    {
        label: 'Framer Motion',
        category: 'frontend',
        style: {
            top: '12%',
            left: '78%',
            background: '#F0EDE8',
            color: 'rgba(26,26,26,0.7)',
            border: '1px solid rgba(26,26,26,0.1)'
        }
    },
    // Backend
    {
        label: 'Node.js',
        category: 'backend',
        style: {
            top: '38%',
            left: '25%',
            background: 'var(--accent-secondary-soft)',
            color: '#3A6A3A',
            border: '1px solid rgba(143,175,143,0.3)'
        }
    },
    {
        label: 'PostgreSQL',
        category: 'backend',
        style: {
            top: '45%',
            left: '55%',
            background: 'var(--accent-secondary-soft)',
            color: '#3A6A3A',
            border: '1px solid rgba(143,175,143,0.3)'
        }
    },
    {
        label: 'GraphQL',
        category: 'backend',
        style: {
            top: '52%',
            left: '8%',
            background: '#E8F0E8',
            color: '#3A6A3A',
            border: '1px solid rgba(143,175,143,0.2)'
        }
    },
    {
        label: 'Redis',
        category: 'backend',
        style: {
            top: '33%',
            left: '72%',
            background: 'var(--accent-secondary-soft)',
            color: '#3A6A3A',
            border: '1px solid rgba(143,175,143,0.3)'
        }
    },
    {
        label: 'Prisma',
        category: 'backend',
        style: {
            top: '58%',
            left: '40%',
            background: '#E8F0E8',
            color: '#3A6A3A',
            border: '1px solid rgba(143,175,143,0.2)'
        }
    },
    // DevOps
    {
        label: 'Docker',
        category: 'devops',
        style: {
            top: '62%',
            left: '68%',
            background: 'var(--accent-tertiary-soft)',
            color: '#7A5A2A',
            border: '1px solid rgba(212,184,150,0.3)'
        }
    },
    {
        label: 'AWS',
        category: 'devops',
        style: {
            top: '70%',
            left: '15%',
            background: 'var(--accent-tertiary-soft)',
            color: '#7A5A2A',
            border: '1px solid rgba(212,184,150,0.3)'
        }
    },
    {
        label: 'Vercel',
        category: 'devops',
        style: {
            top: '72%',
            left: '45%',
            background: '#F0EDE8',
            color: 'rgba(26,26,26,0.7)',
            border: '1px solid rgba(26,26,26,0.1)'
        }
    },
    {
        label: 'GitHub Actions',
        category: 'devops',
        style: {
            top: '78%',
            left: '72%',
            background: 'var(--accent-tertiary-soft)',
            color: '#7A5A2A',
            border: '1px solid rgba(212,184,150,0.3)'
        }
    },
    // Design
    {
        label: 'Figma',
        category: 'design',
        style: {
            top: '85%',
            left: '25%',
            background: 'var(--neutral-warn-soft)',
            color: '#4A3A7A',
            border: '1px solid rgba(184,168,200,0.3)'
        }
    },
    {
        label: 'Framer',
        category: 'design',
        style: {
            top: '88%',
            left: '55%',
            background: 'var(--neutral-warn-soft)',
            color: '#4A3A7A',
            border: '1px solid rgba(184,168,200,0.3)'
        }
    },
    {
        label: 'Motion Design',
        category: 'design',
        style: {
            top: '20%',
            left: '44%',
            background: '#EDE8F4',
            color: '#4A3A7A',
            border: '1px solid rgba(184,168,200,0.2)'
        }
    },
];

const categoryLabels = {
    frontend: {label: 'Frontend', color: 'var(--accent-primary)', bg: 'var(--accent-primary-soft)'},
    backend: {label: 'Backend', color: 'var(--accent-secondary)', bg: 'var(--accent-secondary-soft)'},
    devops: {label: 'DevOps', color: 'var(--accent-tertiary)', bg: 'var(--accent-tertiary-soft)'},
    design: {label: 'Design Tools', color: 'var(--neutral-warn)', bg: 'var(--neutral-warn-soft)'},
};

export default function SkillsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el) => {
                            el.classList.add('revealed');
                        });
                        // Stagger tag reveals
                        const tags = entry.target.querySelectorAll('.skill-tag');
                        tags.forEach((tag, i) => {
                            setTimeout(() => {
                                (tag as HTMLElement).style.opacity = '1';
                                (tag as HTMLElement).style.transform = (tag as HTMLElement).dataset.baseTransform || 'translate(0,0)';
                            }, i * 60);
                        });
                    }
                });
            },
            {threshold: 0.1}
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="relative py-28 md:py-36 overflow-hidden w-full"
                 style={{background: 'var(--bg-primary)'}}>
            <div className="noise-overlay"/>
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <p className="section-eyebrow font-dm mb-3 reveal">Skills & Stack</p>
                        <h2
                            className="font-fraunces font-black reveal reveal-delay-1"
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                letterSpacing: '-0.03em',
                                color: 'var(--text-primary)',
                                lineHeight: 1.1
                            }}
                        >
                            Tools of the trade
                        </h2>
                    </div>

                    {/* Legend */}
                    <div className="flex flex-wrap gap-3 reveal reveal-delay-2">
                        {Object.entries(categoryLabels).map(([key, val]) => (
                            <div
                                key={key}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full font-dm"
                                style={{
                                    background: val.bg,
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    letterSpacing: '0.06em',
                                    textTransform: 'uppercase',
                                    color: val.color,
                                    border: `1px solid ${val.color}30`
                                }}
                            >
                                <span className="w-2 h-2 rounded-full" style={{background: val.color}}/>
                                {val.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating tags container — desktop */}
                <div
                    ref={containerRef}
                    className="relative hidden md:block reveal reveal-delay-2"
                    style={{height: '520px'}}
                >
                    {skills.map((skill, i) => (
                        <div
                            key={skill.label}
                            className="skill-tag font-dm"
                            style={{
                                ...skill.style,
                                opacity: 0,
                                transition: `opacity 0.5s ease ${i * 0.04}s, transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s ease`,
                            }}
                        >
                            {skill.label}
                        </div>
                    ))}
                </div>

                {/* Mobile: grouped list */}
                <div className="md:hidden grid grid-cols-2 gap-3 reveal reveal-delay-2">
                    {skills.map((skill) => (
                        <div
                            key={skill.label}
                            className="font-dm px-4 py-2.5 rounded-full text-center"
                            style={{
                                background: skill.style.background,
                                color: skill.style.color as string,
                                border: skill.style.border as string,
                                fontSize: '13px',
                                fontWeight: 600,
                            }}
                        >
                            {skill.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}