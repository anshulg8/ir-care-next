export default function FaqSection({ faqs }) {
  return (
    <section className="bg-[#f2f4f6] px-4 py-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">FAQs</h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="bg-white px-4 py-3 rounded-md shadow-sm cursor-pointer"
          >
            <summary className="font-medium text-gray-800 mb-1">
              {faq.question}
            </summary>
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
