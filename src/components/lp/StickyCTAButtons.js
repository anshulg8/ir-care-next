import { useState, useEffect } from 'react';
import ContactFloatingButton from '../ContactFloatingButton';

export default function StickyCTAButtons() {
  const [show, setShow] = useState(false);
  const [forceOpen, setForceOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!show) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white px-4 py-4 shadow-t flex justify-between gap-2 border-t border-gray-200">
        {/* Talk to Expert */}
        <button
          onClick={() => setForceOpen(true)}
          className="flex-1 bg-[#ff8300] text-white text-sm font-semibold py-3 rounded-full"
        >
          Talk to an Expert
        </button>

        {/* Book Free Appointment */}
        <button
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex-1 bg-white text-teal-700 border border-teal-600 text-sm font-semibold py-3 rounded-full shadow-sm"
        >
          Book Free Appointment
        </button>

      </div>

      {/* Modal component rendered based on forceOpen */}
      <ContactFloatingButton
        forceOpen={forceOpen}
        onClose={() => setForceOpen(false)}
      />
    </>
  );
}
