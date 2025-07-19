"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
    return (
        <section
            id="contact"
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
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                Let&apos;s Connect
                            </h3>
                            <p className="text-foreground-secondary leading-relaxed mb-8">
                                I&apos;m always interested in new opportunities
                                and collaborations. Whether you have a question,
                                want to discuss a project, or just want to say
                                hello, feel free to reach out!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <motion.a
                                href={`mailto:${personalInfo.email}`}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-accent/10 transition-all duration-200 group"
                            >
                                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-200">
                                    <Mail size={20} className="text-accent" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">
                                        Email
                                    </p>
                                    <p className="text-foreground-secondary text-sm">
                                        {personalInfo.email}
                                    </p>
                                </div>
                            </motion.a>

                            <motion.a
                                href={`tel:${personalInfo.phone}`}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-accent/10 transition-all duration-200 group"
                            >
                                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-200">
                                    <Phone size={20} className="text-accent" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">
                                        Phone
                                    </p>
                                    <p className="text-foreground-secondary text-sm">
                                        {personalInfo.phone}
                                    </p>
                                </div>
                            </motion.a>

                            <motion.a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-accent/10 transition-all duration-200 group"
                            >
                                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-200">
                                    <Github size={20} className="text-accent" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">
                                        GitHub
                                    </p>
                                    <p className="text-foreground-secondary text-sm">
                                        github.com/sefetekin23
                                    </p>
                                </div>
                            </motion.a>

                            <motion.a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-4 p-4 glass rounded-lg hover:bg-accent/10 transition-all duration-200 group"
                            >
                                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-200">
                                    <Linkedin
                                        size={20}
                                        className="text-accent"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">
                                        LinkedIn
                                    </p>
                                    <p className="text-foreground-secondary text-sm">
                                        linkedin.com/in/efe-tekin
                                    </p>
                                </div>
                            </motion.a>

                            <div className="flex items-center gap-4 p-4 glass rounded-lg">
                                <div className="p-3 bg-accent/10 rounded-lg">
                                    <MapPin size={20} className="text-accent" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">
                                        Location
                                    </p>
                                    <p className="text-foreground-secondary text-sm">
                                        {personalInfo.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-xl border border-accent/20"
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Send a Message
                        </h3>

                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-foreground-secondary mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 bg-background-secondary/50 border border-accent/20 rounded-lg text-foreground placeholder-foreground-tertiary focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-foreground-secondary mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 bg-background-secondary/50 border border-accent/20 rounded-lg text-foreground placeholder-foreground-tertiary focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-foreground-secondary mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-background-secondary/50 border border-accent/20 rounded-lg text-foreground placeholder-foreground-tertiary focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-foreground-secondary mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-background-secondary/50 border border-accent/20 rounded-lg text-foreground placeholder-foreground-tertiary focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200 resize-none"
                                    placeholder="Tell me about your project or opportunity..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-secondary transition-colors duration-200 neon-glow-hover"
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
