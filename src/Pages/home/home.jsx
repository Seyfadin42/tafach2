import React from 'react';
import './home.css'; // Make sure to create this CSS file

function Home() {
    return (
        <div className="hero-section">
            <div className="hero-image">
                <img src="/home-image.png" alt="Delicious Food" />
            </div>
            <div className="hero-content">
                <h1>HAPPY WITH THE DELICIOUS FOOD AT TAFACH</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, obcaecati quas fuga dolorum numquam recusandae eaque voluptas ex rerum nihil! Perspiciatis eius enim dolores porro, consequuntur laudantium necessitatibus quae totam.
                    Perspiciatis, clor maiores commodi, consequuntur nam dolorem nostrum distinctio quasi repellendus porro debitis possimus, numquam minus molestiae nesciunt quos similique maxime veritatis.
                </p>
                <div className="icon-container">
                    <div className="icon-item">
                        🍽🍴🥄
                        <br />
                        Delicious
                    </div>
                    <div className="icon-item">
                        🥟🍓🍒
                        <br />
                        Fresh
                    </div>
                    <div className="icon-item">
                        🥬🌿🍂
                        <br />
                        Organic
                    </div>
                </div>
                <a href="#" className="learn-more">Learn More</a>
            </div>
        </div>
    );
}

export default Home;