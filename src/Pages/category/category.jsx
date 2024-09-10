
import './category.css';

function Category() {
    return (
        <div className="category-section">
            <h2 className="category-title">Our Categories</h2>
            <div className="category-container">
                <div className="category-item one">
                    <div className="category-image ">
                        <img src="/burger-1.png" alt="Food" />
                    </div>
                    <div className="category-info">
                        <h4>FOOD</h4>
                        <p>Lorem ipsum dolor, is quasi pedita perspiciatis maiores! Numquam!</p>
                        <a href="#" className="buy-button">Buy Online</a>
                    </div>
                </div>

                <div className="category-item two">
                    <div className="category-image">
                        <img src="/snack-1.png" alt="Snack" />
                    </div>
                    <div className="category-info">
                        <h4>SNACK</h4>
                        <p>Lorem ipsum dolor, is quasi pedita perspiciatis maiores! Numquam!</p>
                        <a href="#" className="buy-button">Buy Online</a>
                    </div>
                </div>

                <div className="category-item three">
                    <div className="category-image ">
                        <img src="/beverage-2.png" alt="Beverage" />
                    </div>
                    <div className="category-info">
                        <h4>BEVERAGE</h4>
                        <p>Lorem ipsum dolor, is quasi pedita perspiciatis maiores! Numquam!</p>
                        <a href="#" className="buy-button">Buy Online</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;