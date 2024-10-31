import React from 'react';
import './shopbycategory.css';
import img1 from '../img/img1.png';
import category1 from '../img/category1.png';
import category2 from '../img/category2.png';
import category3 from '../img/category3.png';
import category4 from '../img/category4.png';


export default function ShopbyCategory() {
  return (
    <div className="shop-by-category">
      <div className="row">
        <div className="column">
          <div className="image-container">
            <img src={category1} alt="Category 1" className="category-image" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="column">
          <div className="image-container">
            <img src={category2} alt="Category 2" className="category-image" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="image-container">
            <img src={category3} alt="Category 3" className="category-image" />
            <div className="overlay"></div>
          </div>
        </div>
        <div className="column">
          <div className="image-container">
            <img src={category4} alt="Category 4" className="category-image" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
