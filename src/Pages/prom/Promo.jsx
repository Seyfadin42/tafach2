import React from 'react';
import './Promo.css';

function Promo() {
    return (
        <div className="promo-section">
            <h1 className="promo-title">WE HAVE PROMO FOR YOU</h1>
            <div className="promo-container">
                <div className="promo-item">
                    <div className="promo-image">
                        <img src="/promo-1.png" alt="Payday Promo" />
                    </div>
                    <p className="promo-tag">Payday Promo</p>
                    <h3 className="promo-discount">GET A 20% DISCOUNT ON PAYDAY WEEK</h3>
                    <p className="promo-description">Lorematae quas porro labonsequatur ex cum rega, iLaboriosam, quod.</p>
                    <a href="#" className="buy-button">Buy Now</a>
                </div>
                <div className="promo-item">
                    <div className="promo-image">
                        <img src="/promo-2.png" alt="Payday Promo" />
                    </div>
                    <p className="promo-tag">Payday Promo</p>
                    <h3 className="promo-discount">GET A 20% DISCOUNT ON PAYDAY WEEK</h3>
                    <p className="promo-description">Lorematae quas porro labonsequatur ex cum rega, iLaboriosam, quod.</p>
                    <a href="#" className="buy-button">Buy Now</a>
                </div>
            </div>
        </div>
    );
}

export default Promo;