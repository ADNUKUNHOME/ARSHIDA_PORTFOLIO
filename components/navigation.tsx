'use client';

import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'portfolio', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: User },
        { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="logo-container cursor-pointer" onClick={() => scrollToSection('home')}>
                            <div className="hidden md:flex items-center space-x-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-orange-500 blur-sm opacity-50"></div>
                                    <div className="relative bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold text-2xl px-4 py-2 tracking-wider transform hover:scale-105 transition-transform duration-300">
                                        A
                                    </div>
                                </div>
                                <span className="text-2xl font-light tracking-[0.3em] text-gray-800">
                                    RSHIDA
                                </span>
                            </div>
                            <div className="flex md:hidden items-center space-x-3">
                                <p className="text-amber-400 text-base sm:text-sm tracking-[0.3em] uppercase font-light">
                                    Interior Designer
                                </p>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`group px-6 py-3 rounded-full transition-all duration-300 ${activeSection === item.id
                                        ? 'bg-linear-to-r from-amber-500 to-orange-500 text-white'
                                        : scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-100 hover:text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <item.icon
                                            size={18}
                                            className={`transition-transform duration-300 ${activeSection === item.id ? '' : 'group-hover:scale-110'
                                                }`}
                                        />
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {isOpen ? <X size={24} className='text-black' /> : <Menu size={24} className={`text-gray-100 hover:text-gray-900 ${scrolled ? 'text-gray-900' : 'text-gray-100'}`} />}
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 space-y-2 mt-20">
                        {navItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === item.id
                                    ? 'bg-linear-to-r from-amber-500 to-orange-500 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none',
                                }}
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
