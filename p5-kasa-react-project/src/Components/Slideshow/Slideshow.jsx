import { useState } from "react";
import "./slideshow.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      
      {total > 1 && (
        <>
          <button className="left-arrow" onClick={prevSlide}><FaChevronLeft /></button>
          <button className="right-arrow" onClick={nextSlide}><FaChevronRight /></button>
          <div className="counter">{currentIndex + 1} / {total}</div>
        </>
      )}
    </div>
  );
}

export default Slideshow;