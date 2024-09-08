import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-500">إيسكوب</h2>
          <p className="mt-2 text-sm text-gray-400">
            نقدم حلولًا مبتكرة لمتابعة وإدارة المشاريع بشكل فعال
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-sm font-semibold">تواصل معنا</h3>
          <div className="flex space-x-3 rtl:space-x-reverse">
            <a
              href="https://www.facebook.com"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-xs text-gray-400">
        <p>© 2024 إيسكوب. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
