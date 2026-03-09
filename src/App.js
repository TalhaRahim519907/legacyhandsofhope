// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Impact from "./components/Impact";
import Happening from "./components/Happening";
// import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import CartModal from "./components/CartModel";
import SupportMission from "./components/SupportMission";
// import PastFundRaising from "./components/PastFundRaising";
import Rosefest from "./components/Rosefest";
import ChristmasGala from "./components/ChristmasGala";
import Valentine from "./components/Valentine";
import MissionPage from "./pages/MissionPage";
import Ghana from "./components/Ghana";
import Liberia from "./components/Liberia";

// Pages
import Give from "./pages/give";
import Team from "./pages/team";
import Store from "./pages/Store";
import EventsPage from "./pages/EventsPage";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  // ✅ ADD TO CART
  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }

      return [...prev, { ...product, quantity: qty }];
    });
  };

  // ✅ REMOVE ITEM
  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  // ✅ UPDATE QUANTITY
  const updateCartQuantity = (productId, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // ✅ CART CONTROLS
  const openCart = () => {
    setIsCartOpen(true);
    setShowCheckout(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
    setShowCheckout(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Mission />
                  <Impact />
                  <Happening />
                  {/* <Events /> */}
                  <Gallery />
                  <SupportMission />
                  {/* <PastFundRaising /> */}


                  <Donate />
                </>
              }
            />

            <Route path="/give" element={<Give />} />
            {/* <Route path="/about" element={<Mission />} /> */}
            <Route path="/mission" element={<Mission />} />
            {/* <Route path="/events" element={<Events />} /> */}
            <Route path="/rosefest" element={<Rosefest />} />
            <Route path="/christmasgala" element={<ChristmasGala />} />
            <Route path="/valentine" element={<Valentine />} />
            <Route path="/missions" element={<MissionPage />} />
            <Route path="/ghana" element={<Ghana />} />
            <Route path="/liberia" element={<Liberia />} />
            <Route
              path="/EventsPage"
              element={
                <EventsPage cart={cart} addToCart={addToCart} openCart={openCart} />
              }
            />
            <Route path="/store" element={<Store
              cart={cart}
              addToCart={addToCart}
              openCart={openCart}
            />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>

        <Footer />

        {/* ✅ GLOBAL CART MODAL */}
        <CartModal
          isOpen={isCartOpen}
          closeCart={closeCart}
          cart={cart}
          updateQty={updateCartQuantity}
          removeItem={removeFromCart}
          showCheckout={showCheckout}
          setShowCheckout={setShowCheckout}
        />
      </div>
    </Router>
  );
}

export default App;
