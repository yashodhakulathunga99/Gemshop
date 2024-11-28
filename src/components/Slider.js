import React, { useEffect, useState } from "react";
import "./Slider.css"; // Make sure this file is created in the same directory
import gem from "./gem2.jpg";
import mining from "./mining2.jpg";
import jewellary from "./jewellary2.jpg";
import machine from "./machine2.jpg";

const Slider = () => {
  // Array of objects with image paths and corresponding texts
 const images = [
   {
     image: mining,
     text: `<span class="topic">Mining Process</span> 
     Traditional gem mining in Sri Lanka preserves the environment while revealing hidden treasures.`,
   },
   {
     image: machine,
     text: `<span class="topic">Machine Operation</span> Precision machines enhance natural beauty and quality in Sri Lanka's gemstone industry.`,
   },
   {
     image: gem,
     text: `<span class="topic">Gemstone Quality</span> Renowned for clarity and color, Sri Lankan gems stand among the world's finest.`,
   },
   {
     image: jewellary,
     text: `<span class="topic">Jewellary Crafting</span> Skilled artisans craft exquisite pieces that reflect Sri Lankan elegance and artistry.`,
   },
 ];


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div
              className="caption"
              dangerouslySetInnerHTML={{ __html: slide.text }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
