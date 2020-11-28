import React from "react";
import { Footer } from "./components/Footer";
import { AboutSection } from "./containers/AboutSection";
import { Banners } from "./containers/Banners";
import { ClientsSection } from "./containers/ClientsSection";
import { Contacts } from "./containers/Contacts";
import { Header } from "./containers/Header";
import { ReviewsSection } from "./containers/Reviews";
import { SpecialSection } from "./containers/SpecialSection";

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
