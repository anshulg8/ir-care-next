import Link from 'next/link';
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import { proceduresArray } from '../data';

const DiseaseIconsGrid = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Conditions <span className="text-teal-600">We Treat</span>
                </h2>

                <div className="grid grid-cols-2 gap-4">
                    {proceduresArray.map(({ id, generalName, slug, icon }) => (
                        <Link
                            href={`/procedures/${slug}`}
                            key={id}
                            className="flex items-center justify-between px-4 py-3 rounded-lg border border-teal-600 text-teal-700 bg-white hover:bg-teal-50 transition text-sm font-medium shadow-sm"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-lg">{icon}</span>
                                <span>{generalName}</span>
                            </div>
                            <FiExternalLink className="text-base" />
                            {/* <FiArrowUpRight className="text-base" /> */}
                        </Link>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default DiseaseIconsGrid;
