import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-orange-500 blur-sm opacity-50"></div>
                            <div className="relative bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold text-xl px-3 py-2 tracking-wider">
                                A
                            </div>
                        </div>
                        <span className="text-xl font-light tracking-[0.3em] text-white">
                            RSHIDA
                        </span>
                    </div>

                    <p className="text-gray-400 text-center max-w-md">
                        Crafting beautiful spaces that inspire and elevate everyday living
                    </p>

                    <div className="flex items-center space-x-2 text-gray-400">
                        <span>Designed with</span>
                        <Heart size={16} className="text-amber-500 fill-amber-500" />
                        <span>by ADNAN</span>
                    </div>

                    <div className="border-t border-gray-800 pt-6 w-full text-center">
                        <p className="text-gray-500 text-sm">
                            {currentYear} ARSHIDA Interior Design. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
