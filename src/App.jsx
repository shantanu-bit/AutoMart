import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewCars from './pages/NewCars';
import UsedCars from './pages/UsedCars';
import SellCar from './pages/SellCar';
import Finance from './pages/Finance';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturedCars />
                <WhyChooseUs />
              </>
            } />
            <Route path="/new-cars" element={<NewCars />} />
            <Route path="/used-cars" element={<UsedCars />} />
            <Route path="/sell-car" element={<SellCar />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;