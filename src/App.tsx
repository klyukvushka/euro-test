import React from "react";
import { Footer } from "./components/Footer";
import { AboutSection } from "./containers/AboutSection";
import { Contacts } from "./containers/Contacts";
import { Header } from "./containers/Header";
import { ReviewsSection } from "./containers/Reviews";
import { SpecialSection } from "./containers/SpecialSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SpecialSection />
        <AboutSection />
        <ReviewsSection />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
