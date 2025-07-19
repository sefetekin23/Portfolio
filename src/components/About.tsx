"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Lightbulb } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function About() {
    return (
        <section
            id="about"
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
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-foreground-secondary leading-relaxed">
                            {personalInfo.about}
                        </p>

                        {/* Education & Location */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-foreground-secondary">
                                <GraduationCap
                                    size={20}
                                    className="text-accent"
                                />
                                <span>{personalInfo.education}</span>
                            </div>

                            <div className="flex items-center gap-3 text-foreground-secondary">
                                <MapPin size={20} className="text-accent" />
                                <span>{personalInfo.location}</span>
                            </div>

                            <div className="flex items-center gap-3 text-foreground-secondary">
                                <GraduationCap
                                    size={20}
                                    className="text-accent"
                                />
                                <span>
                                    Uskudar American Academy - Anatolian High
                                    School Diploma (GPA: 96.29/100)
                                </span>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-foreground text-lg">
                                Key Achievements
                            </h4>
                            <ul className="space-y-2 text-foreground-secondary text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                    Founding Member and Treasurer of UCL Game
                                    Development Society
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                    Treasurer of UCL Turkish Society
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                    President of Coding and Game Design Club at
                                    Uskudar American Academy
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                    5/5 in AP Calculus BC, CS A, Statistics,
                                    Chemistry, Mechanics, Electricity &
                                    Magnetism, Macro & Microeconomics
                                </li>
                            </ul>
                        </div>

                        {/* Fun Fact */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="glass p-6 rounded-lg border border-accent/20"
                        >
                            <div className="flex items-start gap-3">
                                <Lightbulb
                                    size={24}
                                    className="text-accent mt-1 flex-shrink-0"
                                />
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">
                                        Fun Fact
                                    </h4>
                                    <p className="text-foreground-secondary text-sm leading-relaxed">
                                        {personalInfo.funFact}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="glass p-8 rounded-2xl border border-accent/20">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    {
                                        label: "Years of Experience",
                                        value: "2+",
                                    },
                                    {
                                        label: "Projects Completed",
                                        value: "6+",
                                    },
                                    { label: "Technologies", value: "15+" },
                                    { label: "AP Exams", value: "7/7" },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.6 + index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="text-center p-4 glass rounded-lg"
                                    >
                                        <div className="text-2xl font-bold text-accent mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-foreground-secondary">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full"
                        />
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple/20 rounded-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
