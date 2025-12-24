'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { projects } from '../data/projects';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeProject, setActiveProject] = useState<any | null>(null);
    const router = useRouter();

    const sectionRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    /* ========= Keyboard & focus handling ========= */
    useEffect(() => {
        if (!activeProject) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveProject(null);
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        modalRef.current?.focus();

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [activeProject]);

    const categories = ['all', 'residential', 'commercial', 'minimal'];

    const filteredProjects =
        selectedCategory === 'all'
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    /* ========= Framer Motion Variants ========= */
    const backdrop: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const modal: Variants = {
        hidden: { opacity: 0, scale: 0.92, y: 40 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: 40,
            transition: { duration: 0.3 },
        },
    };

    return (
        <>
            {/* ================= PORTFOLIO ================= */}
            <section
                id="portfolio"
                ref={sectionRef}
                className="relative py-24 md:py-32 bg-gray-900 overflow-hidden"
            >
                <div className="relative max-w-7xl mx-auto px-6">
                    <div
                        className={`text-center mb-16 transition-all duration-1000 ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <p className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium mb-3">
                            My Work
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
                            Portfolio Showcase
                        </h2>
                        <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto"></div>
                    </div>

                    <div
                        className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                            }`}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105'
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 backdrop-blur-sm'
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() +
                                    category.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                onClick={() => setActiveProject(project)}
                                className={`group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-all duration-1000 hover:scale-105 ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${300 + index * 100}ms` }}
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">
                                                {project.category}
                                            </p>
                                            <h3 className="text-white text-xl font-semibold">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                                            <ArrowRight className="text-white" size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= MODAL ================= */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
                        onClick={() => setActiveProject(null)}
                        aria-modal="true"
                        role="dialog"
                    >
                        <motion.div
                            ref={modalRef}
                            variants={modal}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            tabIndex={-1}
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-gray-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl outline-none"
                        >
                            <button
                                onClick={() => setActiveProject(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black"
                                aria-label="Close dialog"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative h-[50vh] md:h-[60vh]">
                                <img
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                            </div>

                            <div className="p-6 md:p-10">
                                <p className="text-amber-400 text-sm tracking-widest uppercase mb-2">
                                    {activeProject.category}
                                </p>
                                <h3 className="text-white text-3xl md:text-4xl font-light mb-4">
                                    {activeProject.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed max-w-2xl">
                                    A thoughtfully designed interior project that balances aesthetics,
                                    comfort, and functionality. This space reflects a refined approach
                                    to modern living with attention to detail and material harmony.
                                </p>
                                <button
                                    onClick={() => {
                                        router.push(`/portfolio/${activeProject.slug}`);
                                        setActiveProject(null);
                                    }}
                                    className="mt-4 px-6 py-2 bg-linear-to-r from-amber-500 to-orange-500 text-white rounded-full hover:opacity-90 transition-opacity"
                                >
                                    View Project
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Portfolio;
