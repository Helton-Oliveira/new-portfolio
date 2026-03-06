'use client';

import React, {useEffect, useState} from 'react';
import {fonts} from "@/shared/utils/helper";
import AppLogo from "@/shared/components/ui/AppLogo";
import darkLogo from "@/assets/images/dark-logo.svg";
import lightLogo from "@/assets/images/light-logo.svg";
import {useTheme} from "next-themes";
import json from "@/dicionaries/pt.json";

const navLinks = [
    {label: json.navbar.about, href: '#about'},
    {label: json.navbar.work, href: '#projects'},
    {label: json.navbar.skills, href: '#skills'},
    {label: json.navbar.contact, href: '#contact'},
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const {theme} = useTheme();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handler, {passive: true});


        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 items-center transition-all duration-500 ${scrolled ? 'nav-frosted' : 'nav-transparent'}`}
            style={{height: '68px'}}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
                {/* Logo dark */}
                <AppLogo
                    text="HELTON OLIVEIRA"
                    size={70}
                    className={`${fonts.title} ${theme === "dark" ? 'font-black' : 'font-white'}`}
                    src={theme === "dark" ? lightLogo : darkLogo}
                />

                {/* Pill nav */}
                <nav
                    className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full"
                    style={{
                        background: scrolled ? 'transparent' : 'rgba(26,26,26,0.04)',
                        border: scrolled ? 'none' : '1px solid rgba(26,26,26,0.06)'
                    }}
                >
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-pill font-dm">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a href="mailto:hello@leamorin.fr"
                   className="hidden md:flex btn-primary font-dm"
                   style={{padding: '8px 20px', fontSize: '13px'}}
                > {json.navbar.hireMe} </a>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 rounded-lg font-dm"
                    style={{color: 'var(--text-primary)', background: 'rgba(26,26,26,0.05)'}}
                    aria-label="Open menu"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5"
                              strokeLinecap="round"/>
                    </svg>
                </button>
            </div>
        </header>
    );
}