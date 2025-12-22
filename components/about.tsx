'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
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

    const features = [
        {
            icon: Lightbulb,
            title: 'Creative Vision',
            description: 'Transforming ideas into stunning spatial experiences',
        },
        {
            icon: Heart,
            title: 'Passionate Design',
            description: 'Every project is crafted with dedication and care',
        },
        {
            icon: Users,
            title: 'Client-Focused',
            description: 'Your vision and needs are at the heart of every design',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Committed to delivering exceptional quality and results',
        },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-linear-to-b from-gray-50 to-white overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <p className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium mb-3">
                        About Me
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                        Design Philosophy
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div
                        className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            As an interior designer, I believe that every space tells a story. My approach
                            combines aesthetics with functionality, creating environments that not only look
                            beautiful but also enhance the way people live and work.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            With a keen eye for detail and a passion for innovative design solutions, I
                            specialize in transforming ordinary spaces into extraordinary experiences. From
                            residential sanctuaries to commercial environments, each project is a unique
                            journey of creativity and collaboration.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            My design philosophy centers on understanding your lifestyle, preferences, and
                            aspirations, then translating them into spaces that reflect your personality and
                            meet your needs perfectly.
                        </p>
                    </div>

                    <div
                        className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Interior Design"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{
                                transitionDelay: `${400 + index * 100}ms`,
                            }}
                        >
                            <div className="mb-4 inline-block p-4 bg-linear-to-br from-amber-500 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
