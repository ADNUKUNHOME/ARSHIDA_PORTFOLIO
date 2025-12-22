'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeProject, setActiveProject] = useState<number | null>(null);

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const categories = ['all', 'residential', 'commercial', 'minimal'];

    const projects = [
        {
            id: 1,
            title: 'Modern Living Space',
            category: 'residential',
            image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 2,
            title: 'Luxury Bedroom',
            category: 'residential',
            image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 3,
            title: 'Contemporary Kitchen',
            category: 'residential',
            image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 4,
            title: 'Office Space',
            category: 'commercial',
            image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 5,
            title: 'Minimalist Design',
            category: 'minimal',
            image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 6,
            title: 'Elegant Dining',
            category: 'residential',
            image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 7,
            title: 'Retail Interior',
            category: 'commercial',
            image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 8,
            title: 'Serene Bathroom',
            category: 'minimal',
            image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            id: 9,
            title: 'Cozy Living Room',
            category: 'residential',
            image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
    ];

    const filteredProjects =
        selectedCategory === 'all'
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    const isMobile =
        typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <section
            id="portfolio"
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-gray-900 overflow-hidden"
        >
            <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

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
                    {filteredProjects.map((project, index) => {
                        const isActive = activeProject === project.id;

                        return (
                            <div
                                key={project.id}
                                onClick={() => {
                                    if (!isMobile) return;
                                    setActiveProject(
                                        isActive ? null : project.id
                                    );
                                }}
                                className={`group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-all duration-1000 hover:scale-105 ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                    } ${isActive ? 'scale-[1.03]' : ''}`}
                                style={{
                                    transitionDelay: `${300 + index * 100
                                        }ms`,
                                }}
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : ''
                                            } group-hover:scale-110`}
                                    />
                                    <div
                                        className={`absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-80' : 'opacity-60'
                                            } group-hover:opacity-80`}
                                    ></div>
                                </div>

                                <div
                                    className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 ${isActive
                                        ? 'translate-y-0'
                                        : 'translate-y-4'
                                        } group-hover:translate-y-0`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">
                                                {project.category}
                                            </p>
                                            <h3 className="text-white text-xl font-semibold">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div
                                            className={`transition-opacity duration-300 ${isActive
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                                } group-hover:opacity-100`}
                                        >
                                            <div className="w-12 h-12 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                                                <ArrowRight
                                                    className="text-white"
                                                    size={20}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
