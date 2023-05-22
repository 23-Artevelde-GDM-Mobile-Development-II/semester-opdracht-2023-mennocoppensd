import React from 'react';
import './Testimonials.css';
import testimonial1Image from './testimonial1.jpg';
import testimonial2Image from './testimonial2.jpg';
import testimonial3Image from './testimonial3.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: testimonial1Image,
      quote:
        'I had a great experience using this platform. It made finding my dream home a breeze!',
      name: 'John Doe',
    },
    {
      id: 2,
      image: testimonial2Image,
      quote:
        'As a real estate agent, this platform has significantly improved my business. Highly recommended!',
      name: 'Jane Smith',
    },
    {
      id: 3,
      image: testimonial3Image,
      quote:
        'The user-friendly interface and powerful search capabilities set this platform apart. Kudos to the team!',
      name: 'Michael Johnson',
    },
  ];

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <img
              className="testimonial-image"
              src={testimonial.image}
              alt={`Testimonial ${testimonial.id}`}
            />
            <p className="testimonial-quote">{testimonial.quote}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
