import React from "react";
import "./Boxes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faTools,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

export const Boxes = () => {
  return (
    <div className="container">
      {/* Box 1 */}
      <div className="box">
        <div className="icon">
          <FontAwesomeIcon icon={faGem} size="2x" />
        </div>
        <div className="content">
          <h3>Premium Gems</h3>
          <p>
            We source only the finest gems, ensuring top-notch quality and
            authenticity.
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="box">
        <div className="icon">
          <FontAwesomeIcon icon={faTools} size="2x" />
        </div>
        <div className="content">
          <h3>Craftsmanship</h3>
          <p>
            Our artisans use meticulous craftsmanship to bring out the true
            beauty of each piece.
          </p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="box">
        <div className="icon">
          <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />
        </div>
        <div className="content">
          <h3>Customer Care</h3>
          <p>
            We are committed to providing exceptional service and ensuring
            customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};
