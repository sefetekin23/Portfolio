"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
    return (
        <section
            id="projects"
            className="section-padding bg-background-secondary/30"
        >
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            {/* Badge */}
                            {project.badge && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1 + 0.2,
                                    }}
                                    viewport={{ once: true }}
                                    className="absolute -top-2 -right-2 z-10 px-3 py-1 bg-accent text-background text-xs font-bold rounded-full shadow-lg"
                                >
                                    {project.badge}
                                </motion.div>
                            )}

                            {/* Project Card */}
                            <div className="glass p-6 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 h-full flex flex-col">
                                {/* Header */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                                        {project.name}
                                    </h3>
                                    <p className="text-foreground-secondary text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                                    {project.stack.map((tech, techIndex) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                delay: techIndex * 0.05,
                                            }}
                                            viewport={{ once: true }}
                                            className="px-2 py-1 bg-background-secondary/50 text-foreground-secondary text-xs font-medium rounded border border-accent/10"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 mt-auto">
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-background-secondary/50 text-foreground-secondary hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200 text-sm font-medium"
                                        >
                                            <Github size={16} />
                                            Code
                                        </motion.a>
                                    )}

                                    {project.demo && (
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-accent text-background hover:bg-accent-secondary rounded-lg transition-all duration-200 text-sm font-medium"
                                        >
                                            <ExternalLink size={16} />
                                            Demo
                                        </motion.a>
                                    )}
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="https://github.com/servetefetekin"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-3 glass border border-accent/30 text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-200"
                    >
                        <Code size={20} />
                        View All Projects
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
