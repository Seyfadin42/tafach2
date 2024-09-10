import React, { useState, useEffect } from 'react';
import About from './Pages/about/About';
import Category from './Pages/category/category';
import Contact from './Pages/contact/Contact';
import Footer from './Pages/footer/Footer';
import Home from './Pages/home/home';
import Menu from './Pages/menu/menu';
import Navbar from './Pages/navbar/Navbar';
import Promo from './Pages/prom/Promo';
import Review from './Pages/review/Review';
import './ScrollToTop.css'
function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the scroll button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      <Navbar />
      {/* Sections */}
      <div id="home"><Home /></div>
      <div id="category"><Category /></div>
      <div id="promo"><Promo /></div>
      <div id="about"><About /></div>
      <div id="menu"><Menu /></div>
      <div id="review"><Review /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      
      {/* Scroll to Top Button */}
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
}

export default App;
