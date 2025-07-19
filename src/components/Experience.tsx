"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import { internships } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent/20" />

                    <div className="space-y-12">
                        {internships.map((internship, index) => (
                            <motion.div
                                key={internship.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                                className={`relative flex items-start gap-8 ${
                                    index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />

                                {/* Content Card */}
                                <div
                                    className={`flex-1 ${
                                        index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                                    }`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="glass p-6 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300"
                                    >
                                        {/* Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground">
                                                    {internship.title}
                                                </h3>
                                                <p className="text-accent font-medium">
                                                    {internship.company}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 text-foreground-secondary text-sm">
                                                <Calendar size={16} />
                                                <span>{internship.dates}</span>
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div className="space-y-3 mb-4">
                                            <h4 className="font-semibold text-foreground-secondary text-sm uppercase tracking-wide">
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {internship.achievements.map(
                                                    (
                                                        achievement,
                                                        achievementIndex
                                                    ) => (
                                                        <motion.li
                                                            key={
                                                                achievementIndex
                                                            }
                                                            initial={{
                                                                opacity: 0,
                                                                x: -20,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                x: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.6,
                                                                delay:
                                                                    achievementIndex *
                                                                    0.1,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                            className="flex items-start gap-2 text-foreground-secondary text-sm leading-relaxed"
                                                        >
                                                            <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                            {achievement}
                                                        </motion.li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {internship.technologies.map(
                                                (tech, techIndex) => (
                                                    <motion.span
                                                        key={tech}
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0.8,
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            scale: 1,
                                                        }}
                                                        transition={{
                                                            duration: 0.4,
                                                            delay:
                                                                techIndex * 0.1,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                )
                                            )}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                        href="/cv-servet-efetekin.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-3 glass border border-accent/30 text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-200"
                    >
                        <ExternalLink size={20} />
                        View Full Resume
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
