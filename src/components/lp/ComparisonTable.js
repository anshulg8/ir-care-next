export default function ComparisonTable({ rows }) {

  return (
    <section className="bg-white px-4 py-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Docsy vs Others
      </h3>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-teal-100 text-gray-800 font-semibold">
            <tr>
              <th scope="col" className="px-4 py-2">Benefit</th>
              <th scope="col" className="px-4 py-2">Others</th>
              <th scope="col" className="px-4 py-2 text-teal-700">Docsy</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([feature, others, docsy], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <th scope="row" className="px-4 py-2 font-medium text-gray-900">
                  {feature}
                </th>
                <td className="px-4 py-2">{others}</td>
                <td className="px-4 py-2 font-semibold text-teal-700">{docsy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
