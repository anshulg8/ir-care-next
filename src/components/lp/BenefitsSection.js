export default function BenefitsSection({ benefits }) {
  
    return (
      <section className="h-screen flex flex-col">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="flex-grow px-4 py-4 flex flex-col justify-center border-b border-gray-200"
            style={{ backgroundColor: item.bg }}
          >
            <h4 className="text-base font-semibold text-teal-700 mb-3 leading-tight">
              {item.title}
            </h4>
            <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2 leading-normal">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
  