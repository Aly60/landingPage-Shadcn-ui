//import React from 'react';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardLayout from "./components/CardLayout";
import SystemProps from "./components/SystemProps";
import SystemCards from "./components/SystemCards";
import FaqSection from "./components/FaqSection";
import CarouselSection from "./components/CarousalSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CardLayout />
      <SystemProps />
      <SystemCards />
      <CarouselSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
