interface FAQ {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  faqs: FAQ[];
  heading?: string;
}

export default function FAQBlock({ faqs, heading = "Frequently Asked Questions" }: FAQBlockProps) {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{heading}</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded p-5">
              <p className="font-semibold text-gray-900 mb-2">{faq.question}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
