import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
            <footer className="bg-[#1e4a3d] text-white w-full px-8 py-12">
                <div className='container mx-auto'>
                <div className="flex flex-col items-center text-center gap-3 mb-10">
                    <h2 className="text-6xl font-bold tracking-tight">KeenKeeper</h2>
                    <p className="text-sm text-gray-300 max-w-2xl mt-5 opacity-80">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>

                    <div className="mt-4">
                        <p className="text-lg font-medium mb-3">Social Links</p>
                        <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                            <FaInstagram size={18} />
                        </div>
                        <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                            <FaFacebook size={18}/>
                        </div>
                        <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" >
                            <FaX size={18}/>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mb-6" />
                <div className="flex flex-col sm:flex-row items-center justify-around gap-3 text-xs text-gray-400">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
            </footer>
        );
    }

export default Footer;