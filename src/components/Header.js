import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/trans-logo.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    const navLinks = [
        { path: '/doctors', label: 'Our Doctors' },
        // { path: '/centres', label: 'Our Centres' },
        { path: '/procedures', label: 'Our Procedures' },
        { path: '/treatments', label: 'Treatments' },
    ];

    const isActive = (path) => {
        if (path === '/') return router.pathname === path;
        return router.pathname.startsWith(path);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image src={logo} alt="Docsy Logo" className="h-20 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`${isActive(link.path)
                                    ? 'text-teal-600 border-b-2 border-teal-600'
                                    : 'text-gray-600 hover:text-teal-600'
                                    } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`${isActive(link.path)
                                        ? 'bg-teal-50 text-teal-600'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-teal-600'
                                        } block px-3 py-2 rounded-md text-base font-medium`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
