'use client';

import React from 'react';
import AppIcon from './AppIcon';
import AppImage from "@/shared/components/ui/AppImage";

interface AppLogoProps {
    src?: string;
    text?: string;
    iconName?: string;
    size?: number;
    className?: string;
    classNameWithImage?: string;
    onClick?: () => void;
}

function AppLogo({
                     src = '/images/logo.png',
                     text,
                     iconName = '',
                     size = 90,
                     className = '',
                     onClick,
                     classNameWithImage = ''
                 }: AppLogoProps) {
    return (
        <div
            className={`flex items-center justify-center gap-2 ${onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={onClick}
        >
            {/* Show image if src provided, otherwise show icon */}
            {src ? (
                <AppImage src={src} alt="Logo" width={size} height={size}
                          className={`${classNameWithImage} flex-shrink-0`}/>
            ) : (
                <AppIcon name={iconName} size={size} className="flex-shrink-0"/>
            )}

            {/* Show text if provided */}
            {text && <span className="text-lg font-bold">{text}</span>}
        </div>
    );
}

export default AppLogo;
