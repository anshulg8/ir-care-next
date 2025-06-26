import React, { useState, useRef, useEffect } from 'react';
import { WHATSAPP_LINK, PHONE_NUMBER } from '../constants';

const ContactFloatingButton = ({ forceOpen, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef();

    // Close modal on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
                onClose?.(); // Notify parent to reset trigger
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    // Open modal if forceOpen is triggered
    useEffect(() => {
        if (forceOpen) {
            setIsOpen(true);
        }
    }, [forceOpen]);

    const handleClose = () => {
        setIsOpen(false);
        onClose?.(); // Call parent handler
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-6 z-30 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg transition"
                aria-label="Contact Us"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 3h20a1 1 0 011 1v15.586a1 1 0 01-1.707.707L17 17H2a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v10h15.586L21 19.414V5H3z" />
                </svg>
            </button>

            {/* Overlay Modal */}
            {isOpen && (
                <div
                    onClick={handleClose}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40"
                >
                    <div
                        ref={modalRef}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-xl shadow-xl max-w-sm w-full mx-4 p-6 text-center"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Help?</h3>
                        <p className="text-gray-700 mb-4">Call us or drop a WhatsApp message to book a consultation:</p>

                        <div className="space-y-3">
                            <a href={`tel:${PHONE_NUMBER}`} className="block text-lg font-medium text-teal-600 hover:underline">
                                📞 {PHONE_NUMBER}
                            </a>
                            <p className="text-sm text-gray-500">Give us a missed call</p>
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                            >
                                💬 Message on WhatsApp
                            </a>
                        </div>

                        <button
                            onClick={handleClose}
                            className="mt-6 text-sm text-gray-500 underline hover:text-gray-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactFloatingButton;
