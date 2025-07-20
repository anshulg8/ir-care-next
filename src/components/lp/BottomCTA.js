import { PHONE_NUMBER, WHATSAPP_LINK } from "@/constants";

export default function BottomCTA() {
  return (
    <section className="bg-white px-4 py-5">
      <div className="space-y-4">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="block w-full text-center"
        >
          <button className="w-full bg-[#ff8300] text-white font-semibold py-3 rounded-full text-center text-base shadow-md">
            Talk to an Expert for Free
          </button>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full bg-white-100 text-teal-700 font-semibold py-3 rounded-full text-center text-base shadow-sm border border-teal-600">
            Book Free Appointment
          </button>
        </a>
      </div>
    </section>
  );
}
