import Image from 'next/image';

export default function HeroSection({ heading, bulletPoints }) {
  return (
    <section className="relative h-[30vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/default_bg_mobile.png"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-start justify-center pt-12">
        <div className="w-full max-w-md px-4 flex justify-between items-start">
          {/* Left Text */}
          <div className="w-1/2 text-black space-y-2">
            <h2 className="text-lg font-bold leading-snug">
              {/* Best Prostate Clinic in Mumbai */}
              {heading}
            </h2>
            <ul className="text-sm list-disc pl-4 leading-tight space-y-1">
            {bulletPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              {/* <li>Certified Doctors and Clinics</li>
              <li>100% Legal, Confidential & Safe</li>
              <li>Only Patient's Consent Required</li> */}
            </ul>
          </div>

          {/* Doctor Image */}
          <div className="w-1/2 flex justify-end items-start">
            <Image
              src="/doctor.png"
              alt="Doctor"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
