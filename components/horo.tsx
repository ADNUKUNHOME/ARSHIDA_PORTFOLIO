'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const backgroundImages = [
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ];

    const collageImages = [
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=600',
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

    return (
        <section id="home" className="relative min-h-screen lg:h-screen overflow-hidden">
            {backgroundImages.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img
                        src={img}
                        alt="Interior Design Background"
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            <div className="relative z-20 w-full px-4 sm:px-6 py-16 sm:py-20 lg:py-0 lg:h-full flex items-center justify-center">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="text-white space-y-4 sm:space-y-6 animate-fadeInLeft">
                        <div className="space-y-2 sm:space-y-5">
                            <p className="hidden md:flex text-amber-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-light">
                                Interior Designer
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight">
                                ARSHIDA
                            </h1>
                            <div className="h-1 w-20 sm:w-24 bg-linear-to-r from-amber-500 to-orange-500"></div>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-200 max-w-xl leading-relaxed">
                            Crafting spaces that inspire, comfort, and elevate everyday living
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
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
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-4 animate-fadeInRight mt-8 sm:mt-12 lg:mt-0">
                        {collageImages.map((img, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl group cursor-pointer"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Interior Design ${index + 1}`}
                                    className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
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
