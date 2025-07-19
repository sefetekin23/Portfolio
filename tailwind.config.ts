import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "#0a0a0a",
                    secondary: "#111111",
                    tertiary: "#1a1a1a",
                },
                foreground: {
                    DEFAULT: "#ffffff",
                    secondary: "#a0a0a0",
                    tertiary: "#666666",
                },
                accent: {
                    DEFAULT: "#00d4ff",
                    secondary: "#0099cc",
                    tertiary: "#006699",
                },
                neon: {
                    blue: "#00d4ff",
                    purple: "#8b5cf6",
                    green: "#10b981",
                    pink: "#ec4899",
                },
                glass: {
                    DEFAULT: "rgba(255, 255, 255, 0.05)",
                    secondary: "rgba(255, 255, 255, 0.1)",
                    tertiary: "rgba(255, 255, 255, 0.15)",
                },
                border: {
                    DEFAULT: "rgba(255, 255, 255, 0.1)",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.5s ease-out",
                glow: "glow 2s ease-in-out infinite alternate",
                float: "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                glow: {
                    "0%": {
                        boxShadow:
                            "0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff",
                    },
                    "100%": {
                        boxShadow:
                            "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff",
                    },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};

export default config;
