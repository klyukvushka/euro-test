import React from "react";
import { AboutSection } from "./containers/AboutSection";
import { Header } from "./containers/Header";
import { SpecialSection } from "./containers/SpecialSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SpecialSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
