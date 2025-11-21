import { CALLERID_APPRUNNER_URL } from '@/constants';
import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa6';

const CallerId = () => {
    const [caller, setCaller] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCaller = async () => {
            try {
                const response = await fetch(CALLERID_APPRUNNER_URL);

                const data = await response.json();
                setCaller(data);
            } catch (err) {
                console.error('Error fetching caller info:', err);
                setError('Failed to fetch caller info');
            } finally {
                setLoading(false);
            }
        };

        fetchCaller();
    }, []);

    if (loading) {
        return (
            <div className="p-8 text-center text-gray-600">
                Loading caller info...
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8 text-center text-red-600">
                {error}
            </div>
        );
    }

    // If caller is null, still show default message
    const message = caller?.message || 'No live caller information available';

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                    <FaUser className="h-10 w-10 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Live Caller Info
                </h2>
                <p className="text-gray-600 mb-4">{message}</p>
                <div className="text-gray-800 text-lg">
                    <p>
                        <strong>First Name:</strong>{' '}
                        {caller?.firstName || 'N/A'}
                    </p>
                    <p>
                        <strong>Last Name:</strong>{' '}
                        {caller?.lastName || 'N/A'}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CallerId;
