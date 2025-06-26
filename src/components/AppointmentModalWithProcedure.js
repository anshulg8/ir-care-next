import React from 'react';
import GoogleFormWithProcedureInput from './GoogleFormWithProcedureInput';
import { useModal } from '../context/ModalContext';

const AppointmentModalWithProcedure = () => {
    const { show, closeModal, procedure } = useModal();

    if (!show) return null;

    const handleBackdropClick = () => closeModal();
    const stopPropagation = (e) => e.stopPropagation();

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleBackdropClick}
        >
            <div
                onClick={stopPropagation}
                className="bg-white max-w-lg w-full mx-4 rounded-xl shadow-lg p-6 relative animate-fade-in"
            >
                <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                >
                    &times;
                </button>

                <GoogleFormWithProcedureInput procedure={procedure} onClose={closeModal} />
            </div>
        </div>
    );
};

export default AppointmentModalWithProcedure;
