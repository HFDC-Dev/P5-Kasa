import { useState } from "react";
import "./slideshow.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0); // L'image qu'on affiche actuellement
  const total = images.length; // Le nombre total d'image

  // Quand onclique sur la fleche de gauche
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1)); // Si on est au début, on va à la dernière image
  };

  // Quand on clique sur la fleche de droite
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1)); // Si on est à la fin, on revient au début
  };

  return (
    <div className="slideshow">
      {/* On affiche l’image actuelle */}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
      
      {total > 1 && (
        <>
          <button className="left-arrow" onClick={prevSlide}><FaChevronLeft /></button> {/* Fleche de gauche */}
          <button className="right-arrow" onClick={nextSlide}><FaChevronRight /></button> {/* Fleche de droite */}
          <div className="counter">{currentIndex + 1} / {total}</div> {/* Compteur */}
        </>
      )}
    </div>
  );
}

export default Slideshow;