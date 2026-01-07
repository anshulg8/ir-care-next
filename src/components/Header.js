"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Fuse from "fuse.js";
import logo from "../assets/trans-logo3.png";
import { urologySearchIndex } from "@/data/specialties/urology/searchIndex";

const Header = () => {
    const [query, setQuery] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownTop, setDropdownTop] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const inputRef = useRef(null);

    const navLinks = [
        { path: "/specialties/urology", label: "Our Specialties" },
        { path: "/specialties/urology/procedures", label: "Our Procedures" },
        { path: "/about", label: "About" },
        { path: "/blog", label: "Blog" },
    ];

    /* ================= MOBILE DETECTION ================= */
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    /* ========== RESET SEARCH ON BREAKPOINT CHANGE ========== */
    useEffect(() => {
        setQuery("");
    }, [isMobile]);

    const handleCityChange = (city) => {
        setSelectedCity(city);
        if (city) {
            window.dispatchEvent(new CustomEvent("cityChanged", { detail: city }));
        }
    };

    /* ================= SEARCH ================= */
    const fuse = useMemo(() => {
        return new Fuse(urologySearchIndex, {
            keys: [{ name: "title", weight: 0.7 }],
            threshold: 0.4,
        });
    }, []);

    const results = query ? fuse.search(query).map((r) => r.item) : [];

    /* ========== MOBILE DROPDOWN POSITION ========== */
    useEffect(() => {
        if (!isMobile || !query || !inputRef.current) return;

        const rect = inputRef.current.getBoundingClientRect();
        setDropdownTop(rect.bottom + 8);
    }, [query, isMobile]);

    /* ========== SHARED SEARCH DROPDOWN ========== */
    const SearchDropdown = () =>
        query ? (
            <div
                style={isMobile ? { top: dropdownTop } : undefined}
                className={`
          ${isMobile
                        ? "fixed left-2 right-2"
                        : "absolute left-0 right-0 top-full"}
          bg-white border rounded-lg shadow-lg
          max-h-80 overflow-y-auto
          z-[9999]
        `}
            >
                {results.length ? (
                    results.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/specialties/urology/${item.type}s/${item.slug}`}
                            onClick={() => setQuery("")}
                            className="block px-4 py-3 hover:bg-teal-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-900">
                                    {item.title}
                                </span>
                                <span className="text-xs text-gray-400 capitalize">
                                    {item.type}
                                </span>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="px-4 py-3 text-gray-500">No results found</div>
                )}
            </div>
        ) : null;

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4">
                {/* ================= TOP ROW ================= */}
                <div className="flex items-center justify-between h-16 gap-4">
                    {/* Logo */}
                    <Link href="/">
                        <Image src={logo} alt="Logo" className="h-20 w-auto" />
                    </Link>

                    {/* ================= DESKTOP SEARCH ================= */}
                    <div className="hidden md:flex items-center gap-2 relative flex-1 max-w-xl">
                        <select
                            value={selectedCity}
                            onChange={(e) => handleCityChange(e.target.value)}
                            className="px-3 text-sm bg-transparent focus:outline-none"
                        >
                            <option value="" disabled hidden>
                                Select City
                            </option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                        </select>

                        <div className="relative flex-1">
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search conditions, symptoms, procedures..."
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
                            />
                            {/* <SearchDropdown /> */}
                        </div>
                    </div>

                    {/* ================= DESKTOP NAV ================= */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className="text-sm font-medium text-gray-600 hover:text-teal-600"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* ================= MOBILE MENU BUTTON ================= */}
                    <button
                        className="md:hidden p-3 text-2xl"
                        onClick={() => setIsMobileMenuOpen((s) => !s)}
                    >
                        ☰
                    </button>
                </div>

                {/* ================= MOBILE SEARCH ================= */}
                <div className="md:hidden mt-2 mb-4">
                    <div className="flex border border-gray-300 bg-white rounded-lg">
                        <select
                            value={selectedCity}
                            onChange={(e) => handleCityChange(e.target.value)}
                            className="px-3 text-sm bg-transparent focus:outline-none"
                        >
                            <option value="" disabled hidden>
                                Select City
                            </option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                        </select>

                        <input
                            ref={inputRef}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search conditions, symptoms..."
                            className="flex-1 px-4 py-3 text-sm focus:outline-none"
                        />
                    </div>

                    {/* <SearchDropdown /> */}
                </div>

                {/* ================= MOBILE NAV ================= */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 space-y-2 pb-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
