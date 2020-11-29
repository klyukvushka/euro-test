import React from "react";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Banners } from "./components/Banners";
import { ClientsSection } from "./components/ClientsSection";
import { Contacts } from "./components/Contacts";
import { Header } from "./components/Header";
import { ReviewsSection } from "./components/Reviews";
import { SpecialSection } from "./components/SpecialSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banners />
        <SpecialSection />
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
