export default function FeatureHighlights({ features }) {

  return (
    <section className="bg-white px-4 py-6">
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-teal-50 rounded-lg p-3 flex items-center space-x-2 shadow-sm"
          >
            <span className="text-lg">{feature.icon}</span>
            <span className="text-sm font-medium text-gray-800">
              {feature.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
