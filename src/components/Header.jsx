// src/components/Header.jsx
import { useState, useRef, useEffect } from "react";
import { Button } from "@nextui-org/react";
import SignUp from "./SignUp"; // Ensure this path is correct
import Logo from "/assets/logo.svg"; // Path to your SVG logo

const Header = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const modalRef = useRef(null);

  const handleSignUpClick = () => {
    setIsSignUpVisible(true); // Open the modal
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsSignUpVisible(false);
    }
  };

  useEffect(() => {
    if (isSignUpVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSignUpVisible]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white shadow-lg border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-16 h-16">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-full object-contain"
              style={{ transform: "scale(1.5)" }} // Increase the logo size
            />
          </div>
        </div>
        <nav>
          <nav>
            <ul className="flex space-x-6 text-gray-700 font-medium rtl:space-x-reverse">
              <li>
                <button
                  onClick={() => scrollToSection("HeroSection")}
                  className="hover:text-blue-600 transition-colors"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("CardLayout")}
                  className="hover:text-blue-600 transition-colors"
                >
                  عن إيسكوب
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("SystemProps")}
                  className="hover:text-blue-600 transition-colors"
                >
                  تصميم النظام
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("FaqSection")}
                  className="hover:text-blue-600 transition-colors"
                >
                  الأسئلة والاستفسارات
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("CarouselSection")}
                  className="hover:text-blue-600 transition-colors"
                >
                  صور النظام
                </button>
              </li>
            </ul>
          </nav>
        </nav>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          onClick={handleSignUpClick}
        >
          تسجيل الدخول
        </Button>
      </header>

      {/* Conditionally render the SignUp component */}
      {isSignUpVisible && (
        <SignUp ref={modalRef} setIsSignUpVisible={setIsSignUpVisible} />
      )}

      {/* Padding to prevent content from being hidden behind the fixed header */}
      <div className="pt-24"></div>
    </>
  );
};

Header.displayName = "Header";

export default Header;
