import React from 'react';
import './shopbycategory.css';
import img1 from '../img/img1.png';

export default function ShopbyCategory() {
  return (
    <div className="shop-by-category">
      <div className="row">
        <div className="column">
          <div className="image-container">
            <img src={img1} alt="Category 1" className="category-image" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="column">
          <div className="image-container">
            <img src={img1} alt="Category 2" className="category-image" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="image-container">
            <img src={img1} alt="Category 3" className="category-image" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="column">
          <div className="image-container">
            <img src={img1} alt="Category 4" className="category-image" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
