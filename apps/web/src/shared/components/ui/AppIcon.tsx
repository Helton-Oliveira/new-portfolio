'use client';

import React from 'react';

type IconVariant = 'outline' | 'solid';

interface IconProps {
    name: string;
    variant?: IconVariant;
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;

    [key: string]: any;
}

function Icon({
                  name,
                  variant = 'outline',
                  size = 24,
                  className = '',
                  onClick,
                  disabled = false,
                  ...props
              }: IconProps) {
    const iconSet = variant === 'solid' ? 'solid' : 'normal';
    const IconComponent = iconSet[name as keyof typeof iconSet] as React.ComponentType<any>;

    if (!IconComponent) {
        return (
            <></>
        );
    }

    return (
        <IconComponent
            width={size}
            height={size}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon;