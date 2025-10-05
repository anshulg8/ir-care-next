import React from 'react';
import Header from './Header';
import { FB_URL, INSTA_URL, PHONE_NUMBER, WHATSAPP_LINK, X_URL } from '../constants';
import Link from 'next/link';
import InsurancePartners from './InsurancePartners';
import { FaTwitter, FaInstagram, FaFacebook, FaPhone, FaWhatsapp } from 'react-icons/fa6';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <InsurancePartners />
            <div className="bg-teal-700 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Crafting India&apos;s Most Advanced Care Experiences</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Speak to our care navigators today. Zero obligation, 100% clarity.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* 📞 Call Now Button */}
                        <a
                            href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                            className="bg-white text-teal-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center w-full sm:w-auto"
                        >
                            <FaPhone className="h-5 w-5 mr-2" />
                            Call Now: {PHONE_NUMBER}
                        </a>

                        {/* 💬 WhatsApp Button */}
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white text-white hover:bg-white hover:text-teal-800 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center w-full sm:w-auto"
                        >
                            <FaWhatsapp className="h-5 w-5 mr-2" />
                            WhatsApp
                        </a>
                    </div>

                    <br />
                    <p>Limited daily slots - Please book in advance</p>
                </div>
            </div>

            <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* About */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">Minimally Invasive. Maximally Effective.</h3>
                            <p className="mb-4">
                                Skip the Scalpel, Pick the Pinhole - Heal in Hours, not Weeks.
                            </p>
                            <div className="flex space-x-4">
                                <a href={X_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center space-x-2">
                                    <FaTwitter className="h-6 w-6" />
                                    <span></span>
                                </a>
                                <a href={INSTA_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center space-x-2">
                                    <FaInstagram className="h-6 w-6" />
                                    <span></span>
                                </a>
                                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center space-x-2">
                                    <FaFacebook className="h-6 w-6" />
                                    <span></span>
                                </a>
                            </div>
                        </div>

                        {/* Centers */}
                        <div>
                            <Link href="/centres">
                                <h3 className="text-white text-lg font-bold mb-4">Our Centers</h3>
                            </Link>
                            <ul className="space-y-2">
                                {["Mumbai", "Pune", "Mangalore"].map((city, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="h-4 w-4 text-teal-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>{city}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Languages */}
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">Supported Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {["English", "हिंदी", "मराठी", "ગુજરાતી", "മലയാളം"].map((language, index) => (
                                    <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Terms, Privacy & Copyright */}
                    <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 text-center md:text-left gap-4">
                        <div className="space-x-4">
                            <Link href="/about" className="hover:text-white transition">About Us</Link>
                            <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
                            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                            <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
                        </div>
                        <div>
                            © {new Date().getFullYear()} Docsy Medtech Private Limited. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout; 