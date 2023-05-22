import React from 'react';
import './HowItWorks.css';
import feature1Icon from './speech-bubble.png';
import feature2Icon from './puzzle.png';
import feature3Icon from './lamp.png';

const HowItWorks = () => {
  const features = [
    {
      id: 1,
      icon: feature1Icon,
      description: ' Connect and communicate with others through instant messaging, allowing for quick and convenient conversations.',
    },
    {
      id: 2,
      icon: feature2Icon,
      description: 'Seamlessly integrate with other platforms and services to streamline your workflow and enhance productivity.',
    },
    {
      id: 3,
      icon: feature3Icon,
      description: 'Receive personalized recommendations tailored to your preferences and interests, ensuring you discover relevant content and experiences.',
    },
    // Add more features as needed
  ];

  return (
    <div className="how-it-works">
      <h2>How It Works</h2>
      <div className="feature-list">
        {features.map((feature) => (
          <div className="feature-item" key={feature.id}>
            <img
              className="feature-icon"
              src={feature.icon}
              alt={`Feature ${feature.id} Icon`}
            />
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
