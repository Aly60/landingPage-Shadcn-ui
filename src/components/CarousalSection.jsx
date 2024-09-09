import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselSection = () => {
  const slides = [
    {
      title: "تصميم احترافي 1",
      description: "شريحة مميزة تعرض المحتوى الأول بواجهة جذابة.",
      image: "/assets/portfolio-1.jpg",
    },
    {
      title: "تصميم احترافي 2",
      description: "هذه الشريحة الثانية تظهر بانتقال سلس ورائع.",
      image: "/assets/portfolio-2.jpg",
    },
    {
      title: "تصميم احترافي 3",
      description: "هنا نعرض الشريحة الثالثة بمظهر جذاب.",
      image: "/assets/portfolio-3.jpg",
    },
    {
      title: "تصميم احترافي 4",
      description: "شريحة أخرى تحتوي على محتوى مثير للاهتمام.",
      image: "/assets/portfolio-4.jpg",
    },
    {
      title: "تصميم احترافي 5",
      description: "شريحة أخرى تحتوي على محتوى مثير للاهتمام.",
      image: "/assets/portfolio-5.jpg",
    },
    {
      title: "تصميم احترافي 6",
      description: "شريحة أخرى تحتوي على محتوى مثير للاهتمام.",
      image: "/assets/portfolio-6.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      id="CarouselSection"
      className="relative w-full max-w-6xl mx-auto mt-3 scroll-mt-3"
    >
      <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full relative group">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[250px] sm:h-[400px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg sm:text-3xl font-bold mb-2">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-lg">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Button
          auto
          flat
          icon={<ChevronLeft size={24} />}
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-full shadow-lg"
        >
          {"<"}
        </Button>
        <Button
          auto
          flat
          icon={<ChevronRight size={24} />}
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-full shadow-lg"
        >
          {">"}
        </Button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125" : "bg-gray-500"
              }`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
