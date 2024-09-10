import React, { useState } from 'react';
import './menu.css';

function Menu() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Food', 'Snack', 'Beverage'];

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const menuItems = [
        { id: 1, name: 'Regular Beef Burger', description: 'Juicy beef patty with fresh toppings.', price: '100 birr', image: '/burger-1.png', category: 'Food' },
        { id: 2, name: 'Cheese Burger', description: 'Topped with cheddar cheese and pickles.', price: '120 birr', image: '/burger-2.png', category: 'Food' },
        { id: 3, name: 'BBQ Chicken Burger', description: 'Grilled chicken with BBQ sauce.', price: '110 birr', image: '/burger-3.png', category: 'Food' },
        { id: 4, name: 'Regular Beef Snack', description: 'Perfect for a quick bite.', price: '80 birr', image: '/snack-1.png', category: 'Snack' },
        { id: 5, name: 'French Fries', description: 'Crispy golden fries with a side of ketchup.', price: '50 birr', image: '/snack-2.png', category: 'Snack' },
        { id: 6, name: 'Onion Rings', description: 'Crispy fried onion rings.', price: '60 birr', image: '/snack-3.png', category: 'Snack' },
        { id: 7, name: 'Coca-Cola', description: 'Refreshing cola drink.', price: '50 birr', image: '/beverage-1.png', category: 'Beverage' },
        { id: 8, name: 'Orange Juice', description: 'Freshly squeezed orange juice.', price: '60 birr', image: '/beverage-2.png', category: 'Beverage' },
        { id: 9, name: 'Lemonade', description: 'Refreshing lemonade with mint leaves.', price: '55 birr', image: '/beverage-3.png', category: 'Beverage' },
        { id: 10, name: 'Chocolate Shake', description: 'Creamy chocolate shake topped with whipped cream.', price: '80 birr', image: '/beverage-4.png', category: 'Beverage' },
        { id: 11, name: 'Vanilla Shake', description: 'Delicious vanilla shake with sprinkles.', price: '80 birr', image: '/beverage-5.png', category: 'Beverage' },
    ];

    return (
        <div className="menu-section">
            <div className="menu-header">
                <h2>OUR BEST MENU</h2>
                <p>
                    Discover our delicious menu full of mouth-watering options. Whether you are in the mood for a hearty meal or a light snack, we have something for everyone!
                </p>
            </div>
            <div className="menu-categories">
                <div className="menu-button-group">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`menu-button ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
           
            <div className="menu-items">
                {menuItems.filter(item => activeCategory === 'All' || item.category === activeCategory).map(item => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <span className="item-price">{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;