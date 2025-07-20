export default function ProcedureInfoSection({ procedureInfo }) {
  return (
    <section className="bg-[#f2f4f6]">
      {procedureInfo.map((item, idx) => (
        <div key={idx}>
          <div className="px-4 py-6">
            <h4 className="text-base font-semibold text-teal-700 mb-3 leading-tight">
              {item.title}
            </h4>
            <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2 leading-normal">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
          {/* Divider between sections */}
          {idx !== procedureInfo.length - 1 && (
            <hr className="border-t border-gray-300 mx-4" />
          )}
        </div>
      ))}
    </section>
  );
}
