import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0A1F44] py-6 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Left: Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
        </div>

        {/* Center: Social Icons */}
        <div className="flex space-x-4">
          <a 
            href="https://www.instagram.com/rogistechs/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform"
            />
          </a>
          <a 
            href="https://x.com/rogistech" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/twitter.png"
              alt="X (Twitter)"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform"
            />
          </a>
          <a 
            href="https://www.linkedin.com/company/rogistech/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform"
            />
          </a>
          <a 
            href="https://wa.me/34651618621" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right">
          © 2025 RogisTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
