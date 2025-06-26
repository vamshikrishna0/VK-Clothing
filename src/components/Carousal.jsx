import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousal = () => {
  const images = [
    '/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg',
    '/nguyen-dang-hoang-nhu-Nne2TxFHPyQ-unsplash.jpg',
    '/priscilla-du-preez-my5cwTzhmNI-unsplash.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-[3/2] sm:aspect-[3/1.5] md:aspect-[16/6] lg:aspect-[16/6] overflow-hidden mt-4 rounded-xl shadow-lg">
      {/* Background Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay image */}
      <img
        src="/background.png"
        alt="Overlay"
        className="absolute z-20 top-1/2 left-1/2 w-20 sm:w-32 md:w-40 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
      />

      {/* Shop Button */}
      <Link
        to="/More"
        className="absolute z-20 top-[75%] left-1/2 transform -translate-x-1/2 text-xs sm:text-base font-semibold px-3 py-1.5 bg-amber-500 text-black rounded-full hover:bg-gray-200 transition whitespace-nowrap"
      >
        Upcoming Drip
      </Link>

      {/* Prev Button */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousal;
