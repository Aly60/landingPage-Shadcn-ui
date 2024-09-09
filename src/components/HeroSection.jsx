import { Button } from "@nextui-org/react";
import heroImage from "../../public/assets/hero.png";

const HeroSection = () => {
  const handleScroll = () => {
    document
      .getElementById("CardLayout")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="HeroSection"
      className="text-center p-12 bg-gradient-to-r from-green-400 to-blue-500 text-white scroll-mt-12   "
    >
      <h1 className="text-5xl font-bold mb-4">مستقبل الاشراف على المشاريع</h1>
      <p className="text-xl mb-6">
        منصة اى سكوب لإدارة ومتابعة المشاريع عن بعد
      </p>
      <Button
        auto
        bordered
        color="primary"
        className="mb-6"
        css={{
          backgroundColor: "white",
          color: "blue",
          padding: "12px 24px",
          borderRadius: "9999px",
        }}
        onClick={handleScroll}
      >
        المزيد عن اي سكوب
      </Button>
      <div className="flex justify-center">
        <img src={heroImage} alt="Hero" className="w-1/3 h-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
