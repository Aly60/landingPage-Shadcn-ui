import { useState, useRef, useEffect } from "react";
import { Button } from "@nextui-org/react";
import SignUp from "./SignUp";
import Logo from "/assets/logo.svg";

const Header = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("الرئيسية");
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
    }
  };

  const navItems = [
    { id: "HeroSection", name: "الرئيسية" },
    { id: "CardLayout", name: "عن إيسكوب" },
    { id: "SystemProps", name: "تصميم النظام" },
    { id: "FaqSection", name: "الأسئلة والاستفسارات" },
    { id: "CarouselSection", name: "صور النظام" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white shadow-md border-b border-gray-200 transition-all duration-300 ease-in-out">
        <div className="flex items-center">
          <div className="w-16 h-16">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-full object-contain"
              style={{ transform: "scale(1.5)" }}
            />
          </div>
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium rtl:space-x-reverse">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(item.id, item.name)}
                  className={`${
                    activeSection === item.name
                      ? "text-white bg-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  } transition-colors duration-300 px-4 py-2 rounded-lg active:bg-blue-100`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={handleSignUpClick}
        >
          تسجيل الدخول
        </Button>
      </header>

      {isSignUpVisible && (
        <SignUp ref={modalRef} setIsSignUpVisible={setIsSignUpVisible} />
      )}

      <div className="pt-24"></div>
    </>
  );
};

Header.displayName = "Header";

export default Header;
