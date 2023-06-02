import React from 'react';
import Container from '../../Container/Container';
import './Hero.css';
import { useAuthContext } from '../../../App/Auth/AuthContainer';

const Hero = () => {
  const { user } = useAuthContext() || { user: null };
  return (
    <section className="hero-section">
      <Container>
        <div className="hero-content">
          <h1>Welcome to KeyHunt, {user.username}</h1>
          <p>Find your dream property with ease</p>
          <button className="cta-button">Explore Now</button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
