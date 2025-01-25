import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Marketplace from './components/Marketplace';
import Footer from './components/Footer';
import Product from './components/Product';
import Global from './components/Global';
import Standard from './components/Standard';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Homepage Route */}
          <Route
            path="/"
            element={
              <>
                <Herosection />
                <Global />
                <Marketplace />
                <Product />
                <Footer />
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/Herosection" element={<Herosection />} />
          <Route path="/Standard" element={<Standard />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
