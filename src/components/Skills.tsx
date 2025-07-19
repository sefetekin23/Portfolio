"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const categories = ["Languages", "Frameworks", "Tools", "Concepts"] as const;

export default function Skills() {
    const getSkillsByCategory = (category: (typeof categories)[number]) => {
        return skills.filter((skill) => skill.category === category);
    };

    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-gradient">Skills</span> &
                        Expertise
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: categoryIndex * 0.2,
                            }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                {category}
                            </h3>

                            <div className="space-y-4">
                                {getSkillsByCategory(category).map(
                                    (skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: skillIndex * 0.1,
                                            }}
                                            viewport={{ once: true }}
                                            className="space-y-2"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-foreground-secondary font-medium">
                                                    {skill.name}
                                                </span>
                                                <span className="text-accent text-sm font-mono">
                                                    {skill.proficiency}%
                                                </span>
                                            </div>

                                            <div className="relative h-2 bg-background-secondary rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: `${skill.proficiency}%`,
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        delay:
                                                            skillIndex * 0.1 +
                                                            0.3,
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="h-full bg-gradient-to-r from-accent to-neon-purple rounded-full relative"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                        Additional Skills
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            "Git",
                            "Docker",
                            "Linux",
                            "AWS",
                            "Azure",
                            "PostgreSQL",
                            "MongoDB",
                            "Redis",
                            "REST APIs",
                            "GraphQL",
                            "CI/CD",
                            "Agile",
                        ].map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="glass p-4 rounded-lg text-center border border-accent/20 hover:border-accent/40 transition-all duration-200"
                            >
                                <span className="text-foreground-secondary text-sm font-medium">
                                    {skill}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="glass p-8 rounded-xl border border-accent/20 max-w-2xl mx-auto">
                        <h4 className="text-xl font-bold text-foreground mb-4">
                            Technical Focus Areas
                        </h4>
                        <p className="text-foreground-secondary leading-relaxed">
                            I specialize in high-performance systems, blockchain
                            technology, and full-stack development. My expertise
                            spans from low-level programming in C++ to modern
                            web technologies, with a particular focus on
                            creating scalable and efficient solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
