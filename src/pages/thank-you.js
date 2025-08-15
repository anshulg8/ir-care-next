import SEO from '@/components/SEO';
import { BASE_URL, DEFAULT_PAGE_DESCRIPTION } from '@/constants';
import Link from 'next/link';

export default function ThankYou() {
    return (
        <>
            <SEO
                title="Thank You | Docsy"
                description={DEFAULT_PAGE_DESCRIPTION}
                url={`${BASE_URL || ''}/thank-you`}
            />

            <section className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-12 text-center">
                <div className="max-w-md w-full">
                    <h1 className="text-2xl font-semibold text-green-700 mb-4">
                        Appointment Requested Successfully!
                    </h1>
                    <p className="text-gray-700 mb-6 text-sm">
                        A Care Navigator from the Docsy team will reach out to you shortly.
                        Thank you for trusting us.
                    </p>

                    <Link
                        href="/"
                        className="bg-[#ff8300] text-white font-medium py-3 px-6 rounded-full shadow-md inline-block text-sm hover:bg-[#e67300]"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
        </>
    );
}
