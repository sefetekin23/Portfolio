"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mounted]);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                mounted && scrolled ? "glass-strong" : "bg-transparent"
            }`}
        >
            <div className="container-custom px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-bold text-gradient"
                    >
                        SET
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                                onClick={() => scrollToSection(item.href)}
                                className="text-foreground-secondary hover:text-accent transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground-secondary hover:text-accent transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        height: isOpen ? "auto" : 0,
                    }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="py-4 space-y-4">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    x: isOpen ? 0 : -20,
                                }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left text-foreground-secondary hover:text-accent transition-colors duration-200 font-medium py-2"
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
