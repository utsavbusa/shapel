
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is your typical lead time for casting projects?",
      answer: "Our standard lead time ranges from 2-4 weeks depending on the complexity and quantity of your order. For urgent projects, we offer expedited services with shorter lead times. We'll provide you with a precise timeline during the initial consultation."
    },
    {
      question: "What types of materials do you work with?",
      answer: "We work with a wide range of materials including aluminum alloys, steel, stainless steel, cast iron, copper alloys, zinc alloys, and magnesium alloys. We also specialize in custom alloy compositions for specific application requirements."
    },
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer: "Our MOQ varies depending on the casting method and complexity of the part. For prototype and small batch production, we can accommodate orders as small as 1 piece. For larger production runs, we offer competitive pricing with flexible quantity options."
    },
    {
      question: "Do you provide design and engineering support?",
      answer: "Yes, we have a team of experienced engineers who can assist with design optimization, material selection, and casting process recommendations. We work closely with our clients to ensure optimal results and cost-effectiveness."
    },
    {
      question: "What quality certifications do you maintain?",
      answer: "We maintain ISO 9001:2015 certification and follow strict quality control procedures throughout our production process. All castings undergo comprehensive testing including dimensional inspection, material analysis, and performance testing."
    },
    {
      question: "Can you handle both prototype and production quantities?",
      answer: "Absolutely! We specialize in both prototype development and high-volume production. Our flexible manufacturing capabilities allow us to efficiently handle projects ranging from single prototypes to thousands of production parts."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-[#ED1C24]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about our metal casting services and processes.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-[#ED1C24]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your question answered here?
            </p>
            <button className="bg-[#ED1C24] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
