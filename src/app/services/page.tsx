"use client";

import Image from "next/image";

const ServicesPage = () => {
  // WhatsApp business number
  const whatsappNumber = "34651618621";
  
  const handleDemoRequest = () => {
    const message = "Hi! I would like to request a demo of your services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleConsultationRequest = () => {
    const message = "Hello! I would like to schedule a free consultation to discuss your services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-white mt-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-between px-12">
            {/* Mobile: Image first, centered */}
            <div className="block lg:hidden mb-8 text-center">
              <Image
                src="/images/robot-tablet.png"
                alt="AI Robot with Laptop"
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
            </div>

            {/* Title - centered on mobile, left on desktop */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                Our bespoke <span className="text-[#F9A825]">services</span>
              </h2>
            </div>

            {/* Desktop: Image on right */}
            <div className="hidden lg:block">
              <Image
                src="/images/robot-tablet.png"
                alt="AI Robot with Laptop"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 1 - AI Business Intelligence */}
      <section className="bg-gray-100 py-12 lg:py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
                AI-Powered Business Intelligence
              </h3>
              <p className="text-gray-700 font-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                Transform raw data into actionable insights with our machine
                learning algorithms and predictive analytics. Our AI-driven
                solutions help businesses make data-driven decisions, automate
                workflows, and optimize operational efficiency.
              </p>
            </div>
            <div className="lg:col-span-2 order-first lg:order-last">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/business-intelligence.jpg"
                  alt="Business Intelligence Dashboard"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 - Enterprise Cybersecurity */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-2 order-first lg:order-first">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/cybersecurity.jpg"
                  alt="Cybersecurity and Digital Protection"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6 text-center lg:text-left">
                Enterprise Cybersecurity & Threat Intelligence
              </h3>
              <p className="text-gray-700 font-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                Protect your business with advanced cybersecurity frameworks,
                including:
              </p>
              <ul className="leading-relaxed text-gray-700 font-secondary text-sm sm:text-base md:text-lg">
                <li className="flex items-center">
                  <span className="text-black mr-3">•</span>
                  <span>
                    Real-time threat monitoring and AI-driven security analytics
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-3">•</span>
                  <span>Penetration testing and vulnerability assessments</span>
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-3">•</span>
                  <span>End-to-end encryption for data security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 - Blockchain and Fintech */}
      <section className="bg-gray-100 py-12 lg:py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6 text-center lg:text-left">
                Blockchain & Fintech Solutions
              </h3>
              <p className="font-secondary text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                Leverage the power of decentralized finance (DeFi) and secure
                digital transactions with:
              </p>
              <ul className="leading-relaxed text-gray-700 font-secondary text-sm sm:text-base md:text-lg">
                <li className="flex items-center">
                  <span className="text-black mr-3">•</span>
                  <span>
                    Smart contract development for automated, fraud-proof
                    transactions
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-3">•</span>
                  <span>
                    NFT authentication and tokenization for digital asset
                    security
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3">•</span>
                  <span>
                    Secure digital wallets and payment gateway solutions
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 order-first lg:order-last">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/blockchain.jpg"
                  alt="Cybersecurity and Digital Protection"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4 - IoT & Smart Tech */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-2 order-first lg:order-first">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/vr-tech.jpg"
                  alt="Cybersecurity and Digital Protection"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6 text-center lg:text-left">
                IoT & Smart Tech Integration
              </h3>
              <p className="font-secondary text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                Implement next-generation automation for businesses with:
              </p>
              <ul className="font-secondary text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                <li className="flex items-center">
                  <span className="text-black mr-3">•</span>
                  <span>AI-powered supply chain management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-3">•</span>
                  <span>QR/NFC-enabled payment and authentication systems</span>
                </li>
                <li className="flex items-center">
                  <span className="text-black mr-3">•</span>
                  <span>Smart office and industrial IoT solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="sm:py-10 px-6 mb-12 sm:mb-20">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          <button 
            onClick={handleDemoRequest}
            className="py-3 px-6 sm:py-4 sm:px-8 rounded-lg border border-[#00A676] text-[#00A676] hover:bg-emerald-50 transition text-sm sm:text-base md:text-lg cursor-pointer"
          >
            Request a Demo
          </button>
          <button 
            onClick={handleConsultationRequest}
            className="px-6 py-3 sm:py-4 sm:px-8 rounded-lg bg-[#00A676] text-white hover:bg-[#008F66] transition text-sm sm:text-base md:text-lg cursor-pointer"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;