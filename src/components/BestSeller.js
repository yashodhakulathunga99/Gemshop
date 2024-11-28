import React from 'react'
import gem1 from "./gem1.png"
import gem3 from "./gem3.png";
import gem4 from "./gem4.png";
import gem5 from "./gem5.png";
import "./BestSeller.css";

export const BestSeller = () => {
  return (
    <div className="container1">
    
      <div className="section">
        <img src={gem1} alt="Gem 1" className="gem-image" />
        <p className="description">
          Beautiful blue sapphire with high clarity.
        </p>
      </div>
      <div className="section">
        <img src={gem3} alt="Gem 2" className="gem-image" />
        <p className="description">Rare ruby gem with intense red color.</p>
      </div>
      <div className="section">
        <img src={gem4} alt="Gem 3" className="gem-image" />
        <p className="description">Rare ruby gem with intense red color.</p>
      </div>
      <div className="section">
        <img src={gem5} alt="Gem 4" className="gem-image" />
        <p className="description">Rare ruby gem with intense red color.</p>
      </div>
    </div>
  );
};
