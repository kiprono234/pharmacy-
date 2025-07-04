// import React from "react";
// import Navbar from "./components/Navbar";
// import HeaderPromo from "./components/HeaderPromo";

// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       <HeaderPromo />
      
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeaderPromo from "./components/HeaderPromo";
import Home from "./Pages/Home";; // Make sure you have this file

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
                <Home />
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