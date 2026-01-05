import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <>
            <section className="min-h-[calc(100vh-200px)] bg-white flex items-center justify-center px-4">
                <div className="max-w-4xl w-full text-center">
                    <div className="bg-gray-50 rounded-2xl shadow-sm p-8 sm:p-12">

                        {/* Illustration */}
                        <div className="mx-auto mb-6 w-40 sm:w-48">
                            <svg
                                viewBox="0 0 200 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-auto"
                            >
                                {/* Head */}
                                <circle cx="100" cy="60" r="32" fill="#E5E7EB" />
                                {/* Body */}
                                <rect x="55" y="95" width="90" height="70" rx="20" fill="#ECFEFF" />
                                {/* Coat */}
                                <rect x="65" y="95" width="70" height="70" rx="16" fill="#FFFFFF" />
                                {/* Stethoscope */}
                                <path
                                    d="M75 105 C75 135, 125 135, 125 105"
                                    stroke="#0D9488"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <circle cx="100" cy="138" r="6" fill="#0D9488" />
                            </svg>
                        </div>

                        {/* 404 */}
                        <p className="text-teal-600 font-bold text-sm uppercase tracking-wider mb-2">
                            Page not found
                        </p>

                        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 mb-4
                                       animate-[pulse_4s_ease-in-out_infinite]">
                            404
                        </h1>

                        {/* Message */}
                        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
                            Looks like this page went for a check-up and didn’t come back.
                            Let’s help you find the right place.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg
                                           bg-teal-600 text-white font-semibold
                                           hover:bg-teal-700 transition-colors"
                            >
                                Go to Home
                            </Link>

                            <Link
                                href="/specialties/urology"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg
                                           bg-white text-teal-600 font-semibold
                                           border border-teal-200
                                           hover:bg-teal-50 transition-colors"
                            >
                                View Our Specialities
                            </Link>
                        </div>
                    </div>

                    <p className="mt-6 text-sm text-gray-500">
                        Need help? Our care team is always here for you.
                    </p>
                </div>
            </section>
        </>
    );
};

export default NotFoundPage;
