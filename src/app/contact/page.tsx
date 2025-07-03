"use client";

import Image from 'next/image';

const ContactUsPage = () => {
  const contactInfo = [
    {
      icon: "/icons/home.png",
      title: "Address",
      details: "Antequera, Spain"
    },
    {
      icon: "/icons/mail.png",
      title: "Email",
      details: "support@rogistech.online",
      href: "mailto:support@rogistech.online"
    },
    {
      icon: "/icons/phone.png",
      title: "Phone",
      details: "+34651618621",
      href: "tel:+34651618621"
    },
    {
      icon: "/icons/globe.png",
      title: "Website",
      details: "rogistech.online",
      href: "https://rogistech.online"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "34651618621";
    const message = `Hi! I'd like to book a strategy session to discuss AI, cybersecurity, and fintech solutions for my business.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Hero CTA Section */}
      <section className="py-16 px-4 bg-white mt-30">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading - Centered */}
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl text-black font-bold leading-tight">
              Let&apos;s Build the Future
            </h1>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl text-[#F9A825] font-bold leading-tight">
              Together
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <p className="text-2xl lg:text-3xl text-black font-semibold leading-relaxed">
                Ready to take your business to the next level with advanced AI, cybersecurity, and fintech solutions?
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src="/images/robot-contact.jpg"
                  alt="AI Robot holding Contact us sign"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 px-4 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-16 md:mb-20">
              <span className="text-[#F9A825]">Get in touch </span>
              <span>with our team today</span>
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-24">
            {contactInfo.map((item, index) => {
              const CardContent = (
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full group flex flex-col justify-center items-center">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={64}
                      height={64}
                      className="w-16 h-16 group-hover:brightness-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:hidden">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.details}
                  </p>
                </div>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  className="block hover:transform hover:scale-105 transition-transform duration-200"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {CardContent}
                </a>
              ) : (
                <div key={index} className="block hover:transform hover:scale-105 transition-transform duration-200">
                  {CardContent}
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 sm:mb-10">
            <button 
              onClick={handleWhatsAppClick}
              className="px-6 py-3 sm:py-4 sm:px-8 rounded-lg bg-[#00A676] text-white hover:bg-[#008F66] transition text-sm sm:text-base md:text-lg"
            >
              Book a Strategy Session
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;