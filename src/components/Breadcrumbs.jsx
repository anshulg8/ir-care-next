import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'; // optional icon for separator

export default function Breadcrumbs({ items = [] }) {
    if (!items.length) return null;

    return (
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            {/* <div className="max-w-4xl mx-auto px-4"> */}
            <ol className="flex flex-wrap items-center gap-1">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {item.href ? (
                            <Link href={item.href} className="hover:underline text-gray-600">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-900 font-medium">{item.label}</span>
                        )}
                        {index < items.length - 1 && <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />}
                    </li>
                ))}
            </ol>
            {/* </div> */}
        </nav>
    );
}
