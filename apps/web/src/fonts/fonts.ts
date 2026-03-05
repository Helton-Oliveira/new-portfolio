import localFont from "next/font/local";
import {Sora} from "next/font/google";

export const titleFont = localFont({
    src: [
        {
            path: "./versa.otf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-title",
    display: "swap",
});

export const bodyFont = Sora({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-body",
    display: "swap",
});

export const titleFontSecondary = localFont({
    src: [{
        path: "./Monad.otf",
        weight: "400",
        style: "normal",
    }],
    variable: "--font-body-secondary",
    display: "swap",
});