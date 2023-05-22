import React from 'react';
import Container from '../../Container/Container';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <div className="hero-content">
          <h1>Welcome to KeyHunt</h1>
          <p>Find your dream property with ease</p>
          <button className="cta-button">Explore Now</button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
