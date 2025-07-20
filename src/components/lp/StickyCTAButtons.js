import { PHONE_NUMBER, WHATSAPP_LINK } from '@/constants';
import { useState, useEffect } from 'react';

export default function StickyCTAButtons() {
  const [show, setShow] = useState(false);

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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white px-4 py-4 shadow-t flex justify-between gap-2 border-t border-gray-200">

      {/* Phone Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex-1"
      >
        <button className="w-full bg-[#ff8300] text-white text-sm font-semibold py-3 rounded-full">
          Talk to an Expert
        </button>
      </a>

      {/* WhatsApp Link Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
      >
        <button className="w-full bg-white text-teal-700 border border-teal-600 text-sm font-semibold py-3 rounded-full shadow-sm">
          Book Free Appointment
        </button>
      </a>
    </div>
  );
}
