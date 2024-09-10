import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Review.css'; // Import your custom styles

function Review() {
  const reviews = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/review-1.jpg",
      name: "Seyfadin A.",
      role: "Web Developer",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/review-2.jpg",
      name: "Adjhfbs sd.",
      role: "Web Developer",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/review-3.jpg",
      name: "Seyfadin A.",
      role: "Doctor",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/review-4.jpg",
      name: "Mosh A.",
      role: "Web Designer",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/review-5.jpg",
      name: "Sahil A.",
      role: "Engineer",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3, // Show 3 slides on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2, // Show 2 slides on tablet
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  return (
    <div className="review-section">
      <h2 className='hh'>CUSTOMER REVIEWS</h2>
      <Slider {...settings}>
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <p className="review-text">"{review.text}"</p>
            <img src={review.image} alt={review.name} className="review-image" />
            <div className="reviewer-info">
              <p className="reviewer-name">{review.name}</p>
              <p className="reviewer-role">{review.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Review;