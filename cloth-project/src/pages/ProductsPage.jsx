import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchProducts } from '../services/products';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Import rc-slider styles
import './productpage.css'
import { Col, Container, Row } from 'react-bootstrap';
import MegaMenu from '../assets/components/MegaMenu';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]); // Default price range
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the query parameter from the URL
  const params = new URLSearchParams(location.search);
  const keyword = params.get('keyword');

  useEffect(() => {
    if (keyword) {
      setLoading(true);
      fetchProducts(keyword)
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data); // Initialize filtered products
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [keyword]);

  // Filter products based on the price range
  useEffect(() => {
    if (products.length) {
      const filtered = products.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      setFilteredProducts(filtered);
    }
  }, [priceRange, products]);

  // Handle Reset Filters
  const handleResetFilters = () => {
    setPriceRange([0, 10000]); // Reset price range
    navigate('/products'); // Clear the keyword in the URL
  };

  return (
    <div className="products-page">
    <Container fluid>
    <MegaMenu/>
    <h1>Products for {keyword || 'All Categories'}</h1>
    {/* Loading Spinner */}
    {loading && <div className="spinner">Loading...</div>}
    <Row>
    <Col md={3}>
      {/* Filter Section */}
      <div className="filters" style={{marginTop:'5%'}}>
        <h3>Filters</h3>
        <div className="price-slider">
          <label>
            Price Range: Rs {priceRange[0]} - Rs {priceRange[1]}
          </label>
          <Slider
            range
            min={0}
            max={10000}
            defaultValue={priceRange}
            value={priceRange}
            onChange={(newRange) => setPriceRange(newRange)}
          />
        </div>
        <button className="btn btn-secondary" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </Col>
<Col>

      {/* Product List */}
      <div className="products-list">
        {filteredProducts.length === 0 && !loading && !error && (
          <p>No products found for the selected filters.</p>
        )}
        {filteredProducts.map((product) => (
          <div
            className="product-card"
            key={product.productId}
            onClick={() => handleProductClick(product.productId)}
            style={{ cursor: 'pointer' }}
          >
            <img src={product.image} alt={product.productName} />
            <h6>
              <b>{product.productName}</b>
            </h6>
            <p>{product.description}</p>
            <p>Rs {product.price}</p>
            <p>Available: {product.quantity}</p>
            <button className="btn btn-danger">Add to Cart</button>
          </div>
        ))}
      </div>
</Col>
</Row>
      {error && <p>{error}</p>}
      </Container>
    </div>
  );
}
