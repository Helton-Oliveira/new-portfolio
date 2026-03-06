'use client';

import useHeroSection from "@/features/heroSection/hooks/useHeroSection";
import json from "@/dicionaries/pt.json";

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

    const {sectionRef, titleRef, theme} = useHeroSection();

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
            <div className="absolute top-[15%] right-[8%] w-48 h-48 rounded-full opacity-20 animate-float-slow"
                 style={{background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)'}}/>
            <div className="absolute bottom-[20%] left-[6%] w-64 h-64 rounded-full opacity-15 animate-float-medium"
                 style={{
                     background: 'radial-gradient(circle, var(--neutral-warn) 0%, transparent 70%)',
                     animationDelay: '1.5s',
                 }}/>
            <div className="absolute top-[60%] right-[20%] w-32 h-32 rounded-full opacity-20"
                 style={{
                     background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
                     animation: 'floatSlow 7s ease-in-out infinite',
                     animationDelay: '3s',
                 }}/>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 json-32 pb-24">
                {/* Available badge */}
                <div className="reveal mb-8">
                  <span className="available-badge font-dm">
                    <span className="available-dot"/>
                      {`${json.hero.freelanceStatus} ✦`}
                  </span>
                </div>

                {/* Main title */}
                <div className="overflow-visible mb-10">
                    <h1
                        ref={titleRef}
                        id="hero-title"
                        className={`font-serif leading-[0.85] select-none  ${theme === 'dark' ? 'dark:text-zinc-400' : 'text-slate-700'}`}
                        style={{
                            fontSize: 'clamp(3.5rem, 10vw, 9.5rem)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {/* Nome: Sólido e Imponente */}
                        <span className="block reveal reveal-delay-1 font-medium italic">{title}</span>

                        {/* Subtítulo/Sobrenome: Mais leve e sofisticado, sem o contorno "tech" */}
                        <span className="block reveal reveal-delay-2 opacity-80 mt-2">{subTitle}</span>
                    </h1>

                    {/* Tagline Adicional: Para reforçar o minimalismo sério */}
                    <div className="mt-6 flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-slate-400"></div>
                        <p className="font-sans text-xs uppercase tracking-[0.3em] font-medium text-slate-500">
                            {json.hero.subTitle}
                        </p>
                    </div>
                </div>

                {/* Tagline */}
                <p className="font-dm reveal reveal-delay-3 max-w-xl mb-10"
                   style={{
                       fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                       color: 'rgba(26,26,26,0.55)',
                       fontWeight: 400,
                       lineHeight: 1.65,
                       letterSpacing: '0.01em',
                   }}>
                    {json.hero.phrase}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 reveal reveal-delay-4">
                    <a href="#projects" className="btn-primary font-dm"> {json.button.viewWork}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <a href="#contact" className="btn-ghost font-dm"> {json.button.getInTouch} </a>
                </div>

            </div>
        </section>
    );
}