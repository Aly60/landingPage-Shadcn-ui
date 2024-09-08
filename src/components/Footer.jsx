import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-500">إيسكوب</h2>
          <p className="mt-3 text-sm text-gray-400 max-w-md">
            نقدم حلولًا مبتكرة لمتابعة وإدارة المشاريع بشكل فعال باستخدام أحدث
            التقنيات لتوفير الوقت والموارد.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">تواصل معنا</h3>
          <div className="flex space-x-5 rtl:space-x-reverse">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        <p>© 2024 إيسكوب. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
