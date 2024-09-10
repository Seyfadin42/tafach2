import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-section">
            <div className="about-content">
                <h2>FIND FOOD AND DRINKS, ALL IN ONE PLACE FOR YOUR TASTE</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Suscipit consequatur sed tenetur minima iste cum natus, nisi 
                    maxime, quia atque. Voluptatem tenetur temporibus commodi.
                </p>
                <ul className="about-list">
                    <li>✅ Best price</li>
                    <li>✅ Best service</li>
                    <li>✅ Fresh ingredients</li>
                    <li>✅ Health Protocol</li>
                </ul>
                <a href="#" className="about-button">About us</a>
            </div>
            <div className="about-image">
                <img src="/about.jpg" alt="About Us" className="animated-image" />
            </div>
        </div>
    );
}

export default About;