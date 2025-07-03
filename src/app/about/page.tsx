"use client";

import Image from "next/image";

const AboutUsPage = () => {
  // WhatsApp handler for case studies
  const handleCaseStudiesClick = () => {
    const phoneNumber = "34651618621"; // WhatsApp number (without +)
    const message = "Hi! I'd like to learn more about your case studies and how ROGISTECH has helped other businesses.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // WhatsApp handler for meeting experts
  const handleMeetExpertsClick = () => {
    const phoneNumber = "34651618621"; // WhatsApp number (without +)
    const message = "Hi! I'd like to meet your experts and learn more about your team's expertise in AI, cybersecurity, and fintech.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Digital Future Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-16 md:py-24 max-w-7xl mx-auto mt-30">
        {/* Left Text Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-black font-bold leading-tight mb-6">
            Innovating for a{" "}
            <span className="text-[#F9A825]">Digital Future</span>
          </h2>
          <p className="text-gray-600 font-secondary text-sm sm:text-base md:text-lg leading-relaxed">
            At ROGISTECH we believe in pushing the boundaries of technology to
            create smart, scalable, and secure business solutions. Founded by a
            team of industry experts in artificial intelligence, cybersecurity,
            fintech, and IoT development, we have spent years perfecting
            innovative strategies that help businesses thrive in a digital-first
            world.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/vr-tech.jpg"
            alt="Person using VR interface"
            width={400}
            height={300}
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      </section>
      {/* Our Vision Section */}
      <section className="bg-[#F5F7FA] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Vision
          </h2>
          <p className="mt-6 font-secondary text-sm sm:text-base md:text-lg text-slate-700 max-w-xl mx-auto leading-relaxed">
            To become the global leader in AI-powered business intelligence and
            digital security, ensuring businesses remain competitive, secure,
            and technologically advance
          </p>
        </div>
      </section>
      {/* Our Values Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-16 md:mb-20">
            Our Core Values
          </h2>

          {/* Staggered Cards Layout */}
          <div className="hidden lg:flex justify-center gap-10 mb-42">
            {/* Card 1 */}
            <div className="w-64 bg-[#f9f9f9] hover:bg-[#FFECCC] p-6 rounded-lg shadow-sm text-center hover:shadow-md transition transform translate-y-0">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src="/icons/innovation.png"
                  alt="Innovation"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Innovation
              </h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed font-secondary">
                We pioneer next-generation AI, blockchain, and automation
                solutions.
              </p>
            </div>

            {/* Card 2 (lower) */}
            <div className="w-64 bg-[#f9f9f9] hover:bg-[#FFECCC] p-6 rounded-lg shadow-sm text-center hover:shadow-md transition transform translate-y-15">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src="/icons/security.png"
                  alt="Security"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Security</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed font-secondary">
                We prioritize cyber resilience, risk assessment, and end-to-end
                encryption.
              </p>
            </div>

            {/* Card 3 (higher again) */}
            <div className="w-64 bg-[#f9f9f9] hover:bg-[#FFECCC] p-6 rounded-lg shadow-sm text-center hover:shadow-md transition transform translate-y-0">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src="/icons/scalability.png"
                  alt="Scalability"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Scalability
              </h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed font-secondary">
                We design flexible, future-proof solutions for businesses of all
                sizes.
              </p>
            </div>

            {/* Card 4 (lower again) */}
            <div className="w-64 bg-[#f9f9f9] hover:bg-[#FFECCC] p-6 rounded-lg shadow-sm text-center hover:shadow-md transition transform translate-y-15">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src="/icons/integrity.png"
                  alt="Integrity"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Integrity
              </h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed font-secondary">
                We build trustworthy, transparent, and client-focused digital
                experiences.
              </p>
            </div>
          </div>

          {/* Mobile Layout (grid fallback) */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {[
              // Reuse same cards without stagger
              {
                title: "Innovation",
                desc: "We pioneer next-generation AI, blockchain, and automation solutions.",
                icon: "/icons/innovation.png",
              },
              {
                title: "Security",
                desc: "We prioritize cyber resilience, risk assessment, and end-to-end encryption.",
                icon: "/icons/security.png",
              },
              {
                title: "Scalability",
                desc: "We design flexible, future-proof solutions for businesses of all sizes.",
                icon: "/icons/scalability.png",
              },
              {
                title: "Integrity",
                desc: "We build trustworthy, transparent, and client-focused digital experiences.",
                icon: "/icons/integrity.png",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-[#f9f9f9] p-6 rounded-lg shadow-sm text-center hover:shadow-md transition"
              >
                <div className="relative w-12 h-12 mx-auto mb-4">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed font-secondary">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 sm:mb-10">
            <button 
              onClick={handleCaseStudiesClick}
              className="py-3 px-6 sm:py-4 sm:px-8 rounded-lg border border-[#00A676] text-[#00A676] hover:bg-emerald-50 transition text-sm sm:text-base md:text-lg"
            >
              Read Our Case Studies
            </button>
            <button 
              onClick={handleMeetExpertsClick}
              className="px-6 py-3 sm:py-4 sm:px-8 rounded-lg bg-[#00A676] text-white hover:bg-[#008F66] transition text-sm sm:text-base md:text-lg"
            >
              Meet Our Experts
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;