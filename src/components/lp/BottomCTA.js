import { useState } from 'react';
import ContactFloatingButton from '../ContactFloatingButton';
import { WHATSAPP_LINK } from '@/constants';

export default function BottomCTA() {
  const [forceOpen, setForceOpen] = useState(false);

  return (
    <div className="px-4 py-6 bg-white space-y-4">
      <button
        onClick={() => setForceOpen(true)}
        className="w-full bg-[#ff8300] text-white font-semibold py-3 rounded-full text-center text-base shadow-md"
      >
        Talk to an Expert for Free
      </button>

      <button
        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        className="w-full bg-white-100 text-teal-700 font-semibold py-3 rounded-full text-center text-base shadow-sm border border-teal-600"
      >
        Book Free Appointment
      </button>

      {/* Inject the modal */}
      <ContactFloatingButton
        forceOpen={forceOpen}
        onClose={() => setForceOpen(false)}
      />
    </div>
  );
}
