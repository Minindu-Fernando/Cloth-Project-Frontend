import React from "react";
import { useNavigate } from "react-router-dom";
import "./shopbycategory.css";
import category1 from "../img/category1.png";
import category2 from "../img/category2.png";
import category3 from "../img/category3.png";
import category4 from "../img/category4.png";

export default function ShopbyCategory() {
  const navigate = useNavigate();

  const handleCategoryClick = (keyword) => {
    navigate(`/products/search?keyword=${keyword}`);
  };

  return (
    <div className="shop-by-category">
      <div className="row">
        <div className="column">
          <div
            className="image-container"
            onClick={() => handleCategoryClick("Women")}
          >
            <img src={category1} alt="Women Clothes" className="category-image" />
            <div className="overlay">
              <p className="overlay-text">Women</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div
            className="image-container"
            onClick={() => handleCategoryClick("Kids")}
          >
            <img src={category2} alt="Kids Clothes" className="category-image" />
            <div className="overlay">
              <p className="overlay-text">Kids</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div
            className="image-container"
            onClick={() => handleCategoryClick("Baby")}
          >
            <img src={category3} alt="Baby Clothes" className="category-image" />
            <div className="overlay">
              <p className="overlay-text">Baby</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div
            className="image-container"
            onClick={() => handleCategoryClick("Mens")}
          >
            <img src={category4} alt="Men Clothes" className="category-image" />
            <div className="overlay">
              <p className="overlay-text">Men</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
