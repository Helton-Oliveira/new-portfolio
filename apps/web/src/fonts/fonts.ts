import {Cormorant_Garamond, Inter} from "next/font/google";

export const bodyFont = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-body",
    display: "swap",
});

export const titleFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600"],
    variable: "--font-body-secondary",
    display: "swap"
});
