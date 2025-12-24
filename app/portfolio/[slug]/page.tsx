'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { projects } from '@/data/projects';

export default function PortfolioSlugPage() {
    const { slug } = useParams();
    const router = useRouter();

    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    return (
        <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-gray-950 text-white"
        >
            {/* HERO */}
            <section className="relative h-[80vh]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-20">
                    <button
                        onClick={() => router.back()}
                        className="absolute top-10 left-5 flex items-center gap-2 cursor-pointer text-amber-400 hover:text-amber-500"
                    >
                        <ChevronLeft size={18} /> Back
                    </button>

                    <p className="text-amber-400 uppercase tracking-widest text-sm mb-2">
                        {project.category}
                    </p>

                    <h1 className="text-4xl md:text-6xl font-light">
                        {project.title}
                    </h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-light mb-4">Project Overview</h2>
                    <p className="text-gray-300 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {project.gallery.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt=""
                            className="rounded-xl object-cover"
                        />
                    ))}
                </div>
            </section>
        </motion.main>
    );
}
