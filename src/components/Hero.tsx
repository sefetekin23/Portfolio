"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const fullText = personalInfo.subtitle;

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText, mounted]);

    const particles = mounted
        ? Array.from({ length: 50 }, (_, i) => (
              <div
                  key={i}
                  className="particle"
                  style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 20}s`,
                      animationDuration: `${20 + Math.random() * 10}s`,
                  }}
              />
          ))
        : [];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Particles */}
            <div className="particles">{particles}</div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-neon-purple/5" />

            <div className="container-custom section-padding relative z-10">
                <div className="text-center space-y-8">
                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                            <span className="text-foreground">
                                {personalInfo.name.split(" ")[0]}
                            </span>{" "}
                            <span className="text-gradient">
                                {personalInfo.name.split(" ")[1]}
                            </span>{" "}
                            <span className="text-foreground">
                                {personalInfo.name.split(" ")[2]}
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl sm:text-2xl text-foreground-secondary font-medium"
                        >
                            {personalInfo.tagline}
                        </motion.p>
                    </motion.div>

                    {/* Typing Effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="min-h-[2rem] flex justify-center"
                    >
                        <p className="text-lg sm:text-xl text-accent font-mono">
                            {text}
                            <span className="animate-pulse">|</span>
                        </p>
                    </motion.div>

                    {/* Call to Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href={personalInfo.cv}
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-secondary transition-colors duration-200 neon-glow-hover"
                        >
                            <Download size={20} />
                            Download CV
                        </motion.a>

                        <motion.a
                            href={`mailto:${personalInfo.email}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-3 glass border border-accent/30 text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-200"
                        >
                            <Mail size={20} />
                            Contact
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        className="flex justify-center space-x-6 pt-8"
                    >
                        <motion.a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 glass rounded-full text-foreground-secondary hover:text-accent transition-colors duration-200"
                        >
                            <Github size={24} />
                        </motion.a>

                        <motion.a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 glass rounded-full text-foreground-secondary hover:text-accent transition-colors duration-200"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-accent rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
