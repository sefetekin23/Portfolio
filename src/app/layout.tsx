import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
    title: "Servet Efe Tekin - CS Student & Developer",
    description:
        "Computer Science student at UCL with expertise in high-performance systems, blockchain technology, and software development.",
    keywords: [
        "Computer Science",
        "Software Engineering",
        "Blockchain",
        "UCL",
        "Developer",
        "Portfolio",
    ],
    authors: [{ name: "Servet Efe Tekin" }],
    creator: "Servet Efe Tekin",
    openGraph: {
        title: "Servet Efe Tekin - CS Student & Developer",
        description:
            "Computer Science student at UCL with expertise in high-performance systems, blockchain technology, and software development.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Servet Efe Tekin - CS Student & Developer",
        description:
            "Computer Science student at UCL with expertise in high-performance systems, blockchain technology, and software development.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
            </head>
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
