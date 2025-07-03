"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What industries does ROGISTECH serve?",
    answer:
      "ROGISTECH provides AI, cybersecurity, and fintech solutions to industries including finance, healthcare, e-commerce, logistics, real estate, and manufacturing. Our services are tailored to businesses of all sizes, from startups to multinational enterprises.",
  },
  {
    question: "How secure are ROGISTECH's AI and blockchain solutions?",
    answer:
      "We use end-to-end encryption, multi-factor authentication, and real-time threat monitoring to ensure maximum security. Our blockchain solutions feature immutable records and smart contracts for fraud prevention.",
  },
  {
    question: "Can ROGISTECH customize solutions for my business needs?",
    answer:
      "Yes, our team works closely with clients to develop custom AI-driven analytics, automation tools, and security frameworks tailored to their specific business goals.",
  },
  {
    question:
      "Does ROGISTECH offer integration with existing enterprise systems?",
    answer:
      "Absolutely. Our API-driven solutions ensure seamless integration with existing ERP, CRM, and cloud platforms for a smooth transition without disrupting operations.",
  },
  {
    question: "What is the process for starting a project with ROGISTECH?",
    answer:
      "You begin with a consultation, followed by a tailored proposal, onboarding, development, and deployment phases.",
  },
  {
    question: "How does ROGISTECH ensure compliance with data protection laws?",
    answer:
      "ROGISTECH strictly follows GDPR, CCPA, and other international data security regulations, ensuring full compliance and privacy protection for businesses operating globally.",
  },
  {
    question: "What is the pricing structure for ROGISTECH's services?",
    answer:
      "Our pricing is customized based on the scope, complexity, and duration of the project. Contact us for a personalized quote tailored to your business needs.",
  },
  {
    question: "Does ROGISTECH provide ongoing support and maintenance?",
    answer:
      "Yes, we offer 24/7 technical support, system updates, and cybersecurity monitoring to ensure long-term performance and security.",
  },
  {
    question: "How can I stay updated on ROGISTECH's latest innovations?",
    answer:
      "Subscribe to our newsletter or follow us on LinkedIn, Twitter, and YouTube to receive the latest updates on AI innovations, cybersecurity trends, and blockchain developments.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us or book a consultation to explore how ROGISTECH can help transform your business with cutting-edge technology solutions.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactRedirect = () => {
    router.push('/contact');
  };

  return (
    <section className="bg-white py-20 px-6 mt-30">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-15">
          <span className="text-[#F9A825]">FAQs</span> – Frequently Asked
          Questions
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-md shadow-sm px-8 py-6 transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-x-4 text-left text-xl font-semibold text-slate-800"
              >
                <span>
                  {index + 1}. {item.question}
                </span>
                <Image
                  src={
                    openIndex === index ? "/icons/minus.png" : "/icons/plus.png"
                  }
                  alt={openIndex === index ? "Collapse" : "Expand"}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </button>
              {openIndex === index && (
                <div className="mt-2 text-lg text-slate-700 leading-relaxed w-[95%] mx-auto">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 sm:mb-10 mt-20">
            <button 
              onClick={handleContactRedirect}
              className="py-3 px-6 sm:py-4 sm:px-8 rounded-lg border border-[#00A676] text-[#00A676] hover:bg-emerald-50 transition text-sm sm:text-base md:text-lg cursor-pointer"
            >
              Get in Touch Now
            </button>
          </div>
      </div>
    </section>
  );
};

export default FAQPage;