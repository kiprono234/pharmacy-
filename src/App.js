
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeaderPromo from "./components/HeaderPromo";
// import Home from "./Pages/Home";
import PharmacyProducts from "./components/PharmacyProducts";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderPromo />
                <PharmacyProducts />
                <Footer />
                {/* <Home /> */}
              </>
            }
          />
          {/* You can add more routes here, e.g.:
          <Route path="/shop" element={<Shop />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;