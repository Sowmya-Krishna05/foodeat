import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">🍴FOODEAT</div>
        <nav className="menu">
          <a href="#">HOME</a>
          <a href="#">MENU</a>
          <a href="#">ABOUT</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero glass">
        <div className="hero-text">
          <h1>Delicious Food Is Waiting For You</h1>
          <p>Our team of registered nurses and skilled healthcare professionals provide in-home nursing</p>
          <div className="buttons">
            <button className="btn">Food Menu</button>
            <button className="btn">Book a Table</button>
          </div>
        </div>
        <img
          className="hero-img"
          src="https://i.pinimg.com/1200x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg"
          alt="Food Bowl"
        />
      </section>

      {/* Top List Section */}
      <section className="top-list">
        <h2>Top List</h2>
        <p>Our mainstay menu</p>

        <div className="card-container">
          {/* Card 1 */}
          <div className="card glass">
            <img
              src="https://i.pinimg.com/1200x/b8/28/e3/b828e367c167051fa13d7aae6420c63d.jpg"
              alt=""
            />
            <div className="card-info">
              <p className="rating">⭐ 8.1</p>
              <h3>Noodles three</h3>
              <p>White plate with dried shrimps</p>
              <strong>12$</strong>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card glass">
            <img
              src="https://i.pinimg.com/1200x/e2/c8/3f/e2c83fbb62015b9eaa1975073d2880cf.jpg"
              alt=""
            />
            <div className="card-info">
              <p className="rating">⭐ 9.2</p>
              <h3>Noodles one</h3>
              <p>Noodles spicy boil with seafood and pork in hot pot</p>
              <strong>20$</strong>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card glass">
            <img
              src="https://i.pinimg.com/736x/ed/b9/2c/edb92c2fa5952a02eae4349e6324ee4f.jpg"
              alt=""
            />
            <div className="card-info">
              <p className="rating">⭐ 8.5</p>
              <h3>Noodles two</h3>
              <p>Noodles prawn spicy soup</p>
              <strong>16$</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="services">
        <h4>Our services</h4>
        <div className="icons">
          <div>📅 Online booking</div>
          <div>🍽️ Catering service</div>
          <div>🎟️ Membership</div>
          <div>🚚 Delivery service</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
