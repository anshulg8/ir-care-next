import { PHONE_NUMBER } from '@/constants';
import { featuredDoctors } from '@/data';
import Image from 'next/image';
import { FaCalendarCheck, FaPhone } from 'react-icons/fa6';

const doctors = featuredDoctors.slice(0, 2).map((doc) => ({
  name: doc.name,
  experience: `${doc.experience} Years of Experience`,
  image: doc.image,
  hospitals: doc.hospitalIcons,
}));

export default function OurDoctors() {
  return (
    <section className="bg-white px-4 py-6">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Our Expert Doctors
      </h3>

      {/* Vertical list of doctor cards */}
      <div className="space-y-4">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-lg p-4 shadow-sm flex flex-col"
          >
            {/* Doctor info row */}
            <div className="flex items-center space-x-4 mb-3">
              <Image
                src={doc.image}
                alt={doc.name}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                <p className="text-xs text-gray-600">{doc.experience}</p>
              </div>
            </div>

            {/* Scrollable Hospital logos */}
            <div className="flex space-x-2 overflow-x-auto">
              {doc.hospitals.map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-white p-1 rounded shadow w-12 h-8 flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Hospital"
                    width={40}
                    height={20}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Bottom section: Buttons in same row */}
            <div className="flex gap-2 mt-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex-none w-32 flex items-center justify-center gap-2 bg-[#ff8300] text-white py-2.5 rounded-lg font-semibold text-sm"
              >
                <FaPhone />
                Call
              </a>
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-teal-600 text-white py-2.5 rounded-lg font-semibold text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <FaCalendarCheck />
                Book Free
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
