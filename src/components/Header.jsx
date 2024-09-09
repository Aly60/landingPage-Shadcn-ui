import { useState, useRef, useEffect } from "react";
import { Button } from "@nextui-org/react";
import SignUp from "./SignUp";
import Logo from "/assets/logo.svg";

const Header = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("الرئيسية");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const modalRef = useRef(null);

  const handleSignUpClick = () => {
    setIsSignUpVisible(true);
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

  const scrollToSection = (id, sectionName) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionName);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "HeroSection", name: "الرئيسية" },
    { id: "CardLayout", name: "عن إيسكوب" },
    { id: "SystemProps", name: "تصميم النظام" },
    { id: "SystemCards", name: "عناصر النظام" },
    { id: "CarouselSection", name: "صور النظام" },
    { id: "FaqSection", name: "الأسئلة والاستفسارات" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white shadow-md border-b border-gray-200 transition-all duration-300 ease-in-out">
        <div className="flex items-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-full object-contain"
              style={{ transform: "scale(1.5)" }}
            />
          </div>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-700 font-medium rtl:space-x-reverse">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(item.id, item.name)}
                  className={`${
                    activeSection === item.name
                      ? "text-white bg-blue-500"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  } transition-colors duration-300 px-4 py-2 rounded-lg active:bg-blue-100`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        <Button
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={handleSignUpClick}
        >
          تسجيل الدخول
        </Button>
      </header>

      {isMobileMenuOpen && (
        <nav className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg z-40 pt-5">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(item.id, item.name)}
                  className={`${
                    activeSection === item.name
                      ? "text-white bg-blue-500"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  } transition-colors duration-300 px-4 py-2 rounded-lg`}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={handleSignUpClick}
            >
              تسجيل الدخول
            </Button>
          </ul>
        </nav>
      )}

      {isSignUpVisible && (
        <SignUp ref={modalRef} setIsSignUpVisible={setIsSignUpVisible} />
      )}

      <div className="pt-24"></div>
    </>
  );
};

Header.displayName = "Header";

export default Header;
