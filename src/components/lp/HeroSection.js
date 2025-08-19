import Image from 'next/image';

export default function HeroSection({ heading, bulletPoints, doctor }) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/default_bg_mobile.png"
          alt="Background"
          fill
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" /> */}
        {/* <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-6 flex items-start justify-center">
        <div className="w-full max-w-3xl flex justify-between items-start gap-4">
          {/* Left Text Section */}
          <div className="flex-1 min-w-[150px] max-w-[60%] text-black space-y-3">
            <h2 className="text-base font-bold leading-snug">{heading}</h2>
            <ul className="text-sm list-disc pl-4 leading-tight space-y-1">
              {bulletPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right Doctor Image Section */}
          <div className="flex flex-col items-center min-w-[120px] max-w-[40%]">
            <Image
              src={doctor.picture}
              alt="Doctor"
              width={120}
              height={120}
              className="object-contain"
            />
            <div className="text-center mt-2">
              <p className="text-sm font-semibold text-black">{doctor.title}</p>
              <p className="text-xs text-gray-600">{doctor.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
