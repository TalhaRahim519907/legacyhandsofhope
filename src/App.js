import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Impact from "./components/Impact";
import Happening from "./components/Happening";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import CartButton from "./components/CartButton";
import CartAndStore from "./components/CartAndStore";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Impact />
        <Happening />
        <Events />
        <Gallery />
        <CartAndStore />
        <Donate />
      </main>
      <Footer />
      <CartButton /> {/* Floating cart + modal handled internally */}
    </div>
  );
}

export default App;
