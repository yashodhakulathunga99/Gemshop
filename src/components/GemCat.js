import React from "react";
import "./GemCat.css";
import Diamonds from "./diamonds.jpg";
import Rubies from "./rubies.jpg";
import Sapphires from "./sapphires.jpg";
import Custom from "./custom.jpg";

export const GemCat = () => {
  const categories = [
    { name: "Diamonds", image: Diamonds },
    { name: "Rubies", image: Rubies },
    { name: "Sapphires", image: Sapphires },
    { name: "Custom jewellary", image: Custom },
  ];
  return (
    <div className="gem-categories-section">
      <h2 className="section-title">Explore Our Gem Categories</h2>

      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.name} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
