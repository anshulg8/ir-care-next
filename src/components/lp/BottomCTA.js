import { useState } from 'react';
import ContactFloatingButton from '../ContactFloatingButton';

export default function BottomCTA({ sectionId, primaryCTA, secondaryCTA }) {
  const [forceOpen, setForceOpen] = useState(false);

  return (
    <div className="px-4 py-6 bg-white space-y-4">
      <button
        onClick={() => {
          setForceOpen(true)

          // Fire GTM event with specific location
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'lp_contact_cta_click',
            cta_source: sectionId,
            // pagePath: window.location.pathname // GTM captures it automatically
          });
        }}
        className="w-full bg-[#ff8300] text-white font-semibold py-3 rounded-full text-center text-base shadow-md"
      >
        {primaryCTA}
      </button>

      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })

          // Fire GTM event with specific location
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'lp_booking_cta_click',
            cta_source: sectionId,
            // pagePath: window.location.pathname // GTM captures it automatically
          });

        }}
        className="w-full bg-white-100 text-teal-700 font-semibold py-3 rounded-full text-center text-base shadow-sm border border-teal-600"
      >
        {secondaryCTA}
      </button>

      {/* Inject the modal */}
      <ContactFloatingButton
        forceOpen={forceOpen}
        onClose={() => setForceOpen(false)}
      />
    </div>
  );
}
