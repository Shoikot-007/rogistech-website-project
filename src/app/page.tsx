"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      icon: "/icons/enterprise.png",
      title: "Enterprise-Grade AI & Cybersecurity",
      details:
        "Stay ahead with real-time threat intelligence and automated risk management.",
    },
    {
      icon: "/icons/blockchain.png",
      title: "Fintech & Blockchain Expertise",
      details:
        "Secure digital transactions, smart contracts, and decentralized finance (DeFi) solutions.",
    },
    {
      icon: "/icons/global.png",
      title: "Global Reach, Local Impact",
      details:
        "Trusted by Fortune 500 companies and fast-growing startups alike.",
    },
    {
      icon: "/icons/iot.png",
      title: "IoT & Smart Tech Solutions",
      details:
        "Integrate advanced QR/NFC payment systems and AI-powered automation.",
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "34651618621";
    const message = "Hi! I'd like to book a consultation to discuss your technology solutions for my business.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleServicesClick = () => {
    router.push('/services');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-image.jpg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1E1E1E]/55" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24 md:pt-28 lg:pt-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {/* Mobile (4 lines) */}
              <span className="block sm:hidden">
                <span className="block">Empowering</span>
                <span className="block">Businesses with</span>
                <span className="block">
                  Next <span className="text-[#F9A825]">Generation</span>
                </span>
                <span className="block text-[#F9A825]">Technology</span>
              </span>

              {/* Desktop (2 lines) */}
              <span className="hidden sm:block">
                <span className="block">Empowering Businesses with</span>
                <span className="block">
                  Next <span className="text-[#F9A825]">Generation Technology</span>
                </span>
              </span>
            </h1>

            <p className="font-secondary text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed px-4">
              ROGISTECH is a leading technology consulting firm dedicated to
              delivering AI-driven solutions, cybersecurity innovations,
              blockchain technologies, and smart enterprise automation. Our
              mission is to provide cutting-edge digital solutions that drive
              efficiency, security, and growth for businesses worldwide.
            </p>

            <div className="flex justify-center">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-[#00A676] hover:bg-[#008F66] text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base md:text-lg flex items-center gap-2 group"
              >
                Book a Consultation
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-16 md:mb-20">
            Why choose us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-24">
            {features.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#f9f9f9] hover:bg-[#FFECCC] p-6 rounded-lg shadow-sm text-center hover:shadow-md transition"
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed font-secondary">
                  {card.details}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 sm:mb-10">
            <button 
              onClick={handleServicesClick}
              className="py-3 px-6 sm:py-4 sm:px-8 rounded-lg border border-[#00A676] text-[#00A676] hover:bg-emerald-50 transition text-sm sm:text-base md:text-lg"
            >
              Explore Our Services
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="px-6 py-3 sm:py-4 sm:px-8 rounded-lg bg-[#00A676] text-white hover:bg-[#008F66] transition text-sm sm:text-base md:text-lg"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}