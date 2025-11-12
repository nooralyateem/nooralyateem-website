import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ContactVendors from './pages/ContactVendors';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery/*" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/vendors" element={<ContactVendors />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

