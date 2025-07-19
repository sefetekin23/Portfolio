"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="bg-background-secondary/50 border-t border-accent/10">
            <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Logo and Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-2xl font-bold text-gradient mb-2">
                            {personalInfo.name}
                        </h3>
                        <p className="text-foreground-secondary text-sm">
                            {personalInfo.tagline}
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            {[
                                { name: "About", href: "#about" },
                                { name: "Experience", href: "#experience" },
                                { name: "Projects", href: "#projects" },
                                { name: "Skills", href: "#skills" },
                                { name: "Contact", href: "#contact" },
                            ].map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    whileHover={{ y: -2 }}
                                    className="text-foreground-secondary hover:text-accent transition-colors duration-200"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex justify-center md:justify-end space-x-4"
                    >
                        <motion.a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 glass rounded-full text-foreground-secondary hover:text-accent transition-colors duration-200"
                        >
                            <Github size={20} />
                        </motion.a>

                        <motion.a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 glass rounded-full text-foreground-secondary hover:text-accent transition-colors duration-200"
                        >
                            <Linkedin size={20} />
                        </motion.a>

                        <motion.a
                            href={`mailto:${personalInfo.email}`}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 glass rounded-full text-foreground-secondary hover:text-accent transition-colors duration-200"
                        >
                            <Mail size={20} />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-8 border-t border-accent/10 text-center"
                >
                    <p className="text-foreground-secondary text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}. All
                        rights reserved.
                    </p>
                    <p className="text-foreground-tertiary text-xs mt-2">
                        Built with Next.js, TypeScript, and Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
