import React, { useState } from 'react';
import './Navbar.css'; // Ensure this CSS file is updated

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (e, id) => {
        e.preventDefault(); // Prevent default anchor behavior
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close the mobile menu
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">🍌TAFACH</div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About us</a></li>
                <li><a href="#menu" onClick={(e) => handleScroll(e, 'menu')}>Menu</a></li>
                <li><a href="#review" onClick={(e) => handleScroll(e, 'review')}>Review</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </div>
        </nav>
    );
};

export default Navbar;
