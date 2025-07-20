import Image from 'next/image';

export default function WhatIsPAE({ title, description, image }) {
  return (
    <section className="bg-white px-4 py-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">{title}</h2>

      <div className="flex flex-col items-center">
        <div className="w-full mb-4 rounded-lg overflow-hidden">
          <Image
            src={image.src}
            alt="What is PAE"
            width={600}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <p className="text-sm text-gray-700 leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </section>
  );
}
