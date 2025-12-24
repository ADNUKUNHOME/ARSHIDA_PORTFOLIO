'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

const Hero = () => {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const backgroundImages = [
        "/images/hero/bg1.webp",
        "/images/hero/bg2.jpeg",
        "/images/hero/bg3.jpeg",
        "/images/hero/bg4.jpeg",
    ];

    const collageImages = [
        "/images/collage/c1.jpeg",
        "/images/collage/c2.jpeg",
        "/images/collage/c3.webp",
        "/images/collage/c4.webp",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    /* =====================
       Framer Motion Variants
       ===================== */

    const leftContainer: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const leftItem: Variants = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const rightContainer: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const rightItem: Variants = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="home" className="relative min-h-screen lg:h-screen overflow-hidden">
            {backgroundImages.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBgIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="absolute inset-0 bg-black/40 z-10"></div>

                    <Image
                        src={img}
                        alt="Interior background"
                        fill
                        priority={index === 0}
                        placeholder="blur"
                        blurDataURL={img}
                        className="object-cover"
                    />
                </div>
            ))}

            <div className="relative z-20 w-full px-4 sm:px-6 py-16 sm:py-20 lg:py-0 lg:h-full flex items-center justify-center">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* ================= LEFT CONTENT ================= */}
                    <motion.div
                        variants={leftContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-white space-y-4 sm:space-y-6"
                    >
                        <motion.div variants={leftItem} className="space-y-2 sm:space-y-5">
                            <p className="hidden md:flex text-amber-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-light">
                                Interior Designer
                            </p>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight">
                                ARSHIDA
                            </h1>

                            <div className="h-1 w-20 sm:w-24 bg-linear-to-r from-amber-500 to-orange-500"></div>
                        </motion.div>

                        <motion.p
                            variants={leftItem}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-200 max-w-xl leading-relaxed"
                        >
                            Crafting spaces that inspire, comfort, and elevate everyday living
                        </motion.p>

                        <motion.div
                            variants={leftItem}
                            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
                        >
                            <button
                                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-amber-500 to-orange-500 text-white font-medium text-sm sm:text-base rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                View Portfolio
                            </button>

                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white font-medium text-sm sm:text-base rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                            >
                                Get In Touch
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* ================= RIGHT COLLAGE ================= */}
                    <motion.div
                        variants={rightContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4 mt-8 sm:mt-12 lg:mt-8"
                    >
                        {collageImages.map((img, index) => (
                            <motion.div
                                key={index}
                                variants={rightItem}
                                className="relative overflow-hidden rounded-2xl shadow-2xl group"
                            >
                                <Image
                                    src={img}
                                    alt={`Interior ${index + 1}`}
                                    width={400}
                                    height={400}
                                    placeholder="blur"
                                    blurDataURL={img}
                                    className="object-cover w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64
                                    transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <button
                onClick={scrollToAbout}
                className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 text-white animate-bounce"
            >
                <ChevronDown size={28} className="sm:w-8 sm:h-8" />
            </button>
        </section>
    );
};

export default Hero;
