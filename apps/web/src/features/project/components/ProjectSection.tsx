'use client';

import {useEffect, useRef} from 'react';
import AppImage from "@/shared/components/ui/AppImage";

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    imageAlt: string;
    accent: string;
    tagColor: string;
    tagBg: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        id: 'atelier-co',
        title: 'Atelier & Co.',
        description: 'A luxury e-commerce platform for independent French designers — built with Next.js, Stripe, and a headless CMS.',
        tags: ['Next.js', 'Stripe', 'Sanity'],
        image: "",
        imageAlt: 'Elegant fashion boutique interior with white walls and minimal clothing displays',
        accent: 'rgba(201, 164, 160, 0.25)',
        tagColor: '#8A5A56',
        tagBg: 'rgba(201, 164, 160, 0.15)',
        featured: true
    },
    {
        id: 'verdant',
        title: 'Verdant Analytics',
        description: 'Real-time sustainability dashboard for B2B SaaS — React, Node.js, PostgreSQL, WebSockets.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        image: "",
        imageAlt: 'Clean dashboard interface showing green sustainability analytics charts on dark background',
        accent: 'rgba(143, 175, 143, 0.25)',
        tagColor: '#4A7A4A',
        tagBg: 'rgba(143, 175, 143, 0.15)'
    },
    {
        id: 'sable',
        title: 'Sable Studio',
        description: 'Portfolio & booking system for a Paris-based architecture firm. Fully custom CMS.',
        tags: ['TypeScript', 'Prisma', 'AWS'],
        image: "",
        imageAlt: 'Modern minimalist architecture building with geometric white facade against blue sky',
        accent: 'rgba(212, 184, 150, 0.25)',
        tagColor: '#7A5A2A',
        tagBg: 'rgba(212, 184, 150, 0.15)'
    },
    {
        id: 'lunaire',
        title: 'Lunaire App',
        description: 'Wellness journaling app with AI-powered mood insights. React Native + FastAPI backend.',
        tags: ['React Native', 'FastAPI', 'Redis'],
        image: "",
        imageAlt: 'Serene mountain landscape at dusk with soft purple and pink sky reflections in still lake',
        accent: 'rgba(184, 168, 200, 0.25)',
        tagColor: '#5A4A7A',
        tagBg: 'rgba(184, 168, 200, 0.15)'
    }];


function ProjectCard({project, featured = false}: { project: Project; featured?: boolean; }) {
    return (
        <div
            className={`project-card shimmer-border group ${featured ? 'md:col-span-3' : ''}`}
            style={{background: 'rgba(26,26,26,0.03)'}}>

            {/* Image container */}
            <div
                className="overflow-hidden"
                style={{
                    height: featured ? 'clamp(320px, 45vw, 520px)' : '240px',
                    borderRadius: '20px 20px 0 0'
                }}>

                <AppImage
                    src={project.image}
                    alt={project.imageAlt}
                    className="card-img w-full h-full object-cover"/>

                {/* Color wash on hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{background: project.accent, mixBlendMode: 'multiply'}}/>

            </div>

            {/* Content */}
            <div
                className="p-6 md:p-8"
                style={{
                    background: 'var(--bg-primary)',
                    borderRadius: '0 0 20px 20px',
                    borderTop: '1px solid rgba(26,26,26,0.06)'
                }}>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) =>
                            <span
                                key={tag}
                                className="tag-pill font-dm"
                                style={{background: project.tagBg, color: project.tagColor}}>

              {tag}
            </span>
                    )}
                </div>

                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3
                            className="font-fraunces font-black mb-2"
                            style={{
                                fontSize: featured ? 'clamp(1.6rem, 3vw, 2.2rem)' : '1.3rem',
                                letterSpacing: '-0.02em',
                                color: 'var(--text-primary)',
                                lineHeight: 1.2
                            }}>

                            {project.title}
                        </h3>
                        <p
                            className="font-dm"
                            style={{
                                fontSize: '14px',
                                color: 'rgba(26,26,26,0.5)',
                                lineHeight: 1.65,
                                maxWidth: '420px'
                            }}>

                            {project.description}
                        </p>
                    </div>

                    {/* View link — slides in on hover */}
                    <div className="view-link flex-shrink-0">
                        <div
                            className="flex items-center gap-2 font-dm font-semibold"
                            style={{
                                fontSize: '13px',
                                color: 'var(--text-primary)',
                                letterSpacing: '0.04em',
                                whiteSpace: 'nowrap'
                            }}>

                            View Project
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>);

}

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el) => {
                            el.classList.add('revealed');
                        });
                    }
                });
            },
            {threshold: 0.05}
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const [featuredProject, ...gridProjects] = projects;

    return (
        <section ref={sectionRef} id="projects" className="relative py-28 md:py-36" style={{background: '#F5F1EB'}}>
            <div className="noise-overlay"/>
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section header with ghost text overlap */}
                <div className="relative mb-16">
                    <h2
                        className="text-outline font-fraunces font-black select-none pointer-events-none absolute -top-6 left-0"
                        style={{
                            fontSize: 'clamp(4rem, 12vw, 9rem)',
                            lineHeight: 1,
                            letterSpacing: '-0.04em',
                            opacity: 0.07,
                            WebkitTextStroke: '1.5px var(--text-primary)',
                            color: 'transparent'
                        }}>

                        Work
                    </h2>
                    <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pt-8">
                        <div>
                            <p className="section-eyebrow font-dm mb-3 reveal">Selected Projects</p>
                            <h2
                                className="font-fraunces font-black reveal reveal-delay-1"
                                style={{
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    letterSpacing: '-0.03em',
                                    color: 'var(--text-primary)',
                                    lineHeight: 1.1
                                }}>

                                Things I've built
                            </h2>
                        </div>
                        <p
                            className="font-dm reveal reveal-delay-2"
                            style={{
                                fontSize: '14px',
                                color: 'rgba(26,26,26,0.45)',
                                maxWidth: '280px',
                                lineHeight: 1.65
                            }}>

                            A curated selection of recent work spanning product, platform, and design.
                        </p>
                    </div>
                </div>

                {/* Featured card */}
                <div className="mb-6 reveal reveal-delay-2">
                    <ProjectCard project={featuredProject} featured/>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {gridProjects.map((project, i) =>
                        <div key={project.id} className={`reveal reveal-delay-${i + 2}`}>
                            <ProjectCard project={project}/>
                        </div>
                    )}
                </div>
            </div>
        </section>);

}