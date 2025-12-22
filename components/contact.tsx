'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'hello@arshida.design',
            link: 'mailto:hello@arshida.design',
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+91 9876543210',
            link: 'tel:+91 9876543210',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Available Worldwide',
            link: null,
        },
    ];

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-linear-to-b from-white to-gray-50 overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <p className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium mb-3">
                        Get In Touch
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                        Let's Create Together
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto"></div>
                    <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's
                        discuss how we can bring your vision to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{
                                transitionDelay: `${200 + index * 100}ms`,
                            }}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-linear-to-br from-amber-500 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <info.icon className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-gray-600 hover:text-amber-600 transition-colors"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className={`max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        {submitted ? (
                            <div className="text-center py-12 animate-fadeIn">
                                <div className="w-20 h-20 bg-linear-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-gray-600">
                                    Thank you for reaching out. I'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 outline-none placeholder-gray-400 text-amber-900"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 outline-none placeholder-gray-400 text-amber-900"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 outline-none placeholder-gray-400 text-amber-900"
                                        placeholder="+91 9876543210"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 outline-none resize-none placeholder-gray-400 text-amber-900"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-linear-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span>Send Message</span>
                                    <Send size={20} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
