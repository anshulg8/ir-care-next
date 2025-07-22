import { useState } from 'react';
import { FIELD_CITY_ID, FIELD_DISEASE_ID, FIELD_NAME_ID, FIELD_PHONE_ID, GOOGLE_FORM_ACTION_URL, PHONE_NUMBER, YOUR_REFERRAL_CODE_FIELD_ID } from "@/constants";
import ContactFloatingButton from '../ContactFloatingButton';

export default function CtaBlock({ heading }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'NA',
    procedure: 'PAE',
    referralCode: ''
  });

  const [forceOpen, setForceOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formBody = new FormData();
    formBody.append(FIELD_NAME_ID, formData.name);
    formBody.append(FIELD_PHONE_ID, formData.phone);
    formBody.append(FIELD_CITY_ID, formData.city);
    formBody.append(FIELD_DISEASE_ID, formData.procedure);
    formBody.append(YOUR_REFERRAL_CODE_FIELD_ID, formData.referralCode);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formBody,
    });

    // Optional: Clear form or show feedback
    alert('Thank you! Our expert will contact you shortly.');
    setFormData({ name: '', phone: '', city: '', procedure: '', referralCode: '' });
  };

  return (
    <section className="bg-white px-4 py-8 flex flex-col items-center">
      {/* CTA Button */}
      <button
        onClick={() => setForceOpen(true)}
        className="w-[90%] bg-[#ff8300] text-white font-semibold py-3 rounded-full text-center text-base shadow-md mb-6"
      >
        Speak to a Urologist for Free
      </button>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{heading}</h3>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
        />

        <button
          type="submit"
          className="w-[90%] bg-[#ff8300] text-white font-semibold py-3 rounded-full text-base mx-auto block shadow-md"
        >
          Submit & Speak to a Urologist for Free
        </button>
      </form>

      {/* Modal component rendered based on forceOpen */}
      <ContactFloatingButton
        forceOpen={forceOpen}
        onClose={() => setForceOpen(false)}
      />
    </section>
  );
}
