import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "@/styles/globals.css";
import React from "react";
import TanstackProvider from "@/providers/tanStackProvider";
import {bodyFont} from "@/fonts/fonts";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Helton Oliveira",
    description: "Portfolio",
    icons: {
        icon: [
            {
                url: "/dark-logo.ico",
                media: "(prefers-color-scheme: light)",
                sizes: "180x180"
            },
            {
                url: "/light-logo.ico",
                media: "(prefers-color-scheme: dark)",
                sizes: "192x192"
            },
        ],
        apple: [
            {
                url: "/dark-logo.ico",
                media: "(prefers-color-scheme: dark)",
                sizes: "180x180"
            },
            {
                url: "/light-logo.ico",
                media: "(prefers-color-scheme: light)",
                sizes: "180x180"
            },
        ]
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
        <body className={`${geistSans.variable} ${geistMono.variable} ${bodyFont.className}`}>
        <TanstackProvider>
            {children}
        </TanstackProvider>
        </body>
        </html>
    );
}


