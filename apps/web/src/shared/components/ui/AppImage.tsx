'use client';

import React, {useState} from 'react';
import Image, {StaticImageData} from 'next/image';

interface AppImageProps {
    src: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    fill?: boolean;
    sizes?: string;
    onClick?: () => void;
    fallbackSrc?: string;

    [key: string]: any;
}

function AppImage({
                      src,
                      alt,
                      width,
                      height,
                      className = '',
                      onClick,
                      fallbackSrc = '/images/logo.png',
                  }: AppImageProps) {
    const [imageSrc, setImageSrc] = useState<string | StaticImageData>(src);

    const isString = typeof src === "string";

    const isExternal =
        isString &&
        (src.startsWith("http://") || src.startsWith("https://"));


    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            onError={() => setImageSrc(fallbackSrc)}
            className={`${className}`}
        />
    );
}

export default AppImage;