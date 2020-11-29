import React from "react";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Banners } from "./components/Banners";
import { ClientsSection } from "./components/ClientsSection";
import { Contacts } from "./components/Contacts";
import { Header } from "./components/Header";
import { ReviewsSection } from "./components/Reviews";
import { ServicesSection } from "./components/ServicesSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banners />
        <ServicesSection />
        <AboutSection />
        <ClientsSection />
        <ReviewsSection />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
