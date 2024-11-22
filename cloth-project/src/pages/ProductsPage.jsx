import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchProducts } from '../services/productService';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Import rc-slider styles
import './productpage.css';
import { Col, Container, Row } from 'react-bootstrap';
import MegaMenu from '../assets/components/MegaMenu';
import Pagination from 'react-bootstrap/Pagination';
import LineComponent from '../assets/components/LineComponent';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]); // Default price range
  const location = useLocation();
  const navigate = useNavigate();

  const productsPerPage = 16;

  // Extract the query parameter from the URL
  const params = new URLSearchParams(location.search);
  const keyword = params.get('keyword');

  useEffect(() => {
    if (keyword) {
      setLoading(true);
      searchProducts(keyword)
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
    navigate('/products/search'); // Clear the keyword in the URL
  };

  // Handle Product Sorting
  const handleSortByPrice = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (order === 'low-to-high') {
        return a.price - b.price;
      } else if (order === 'high-to-low') {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="products-page">
      <MegaMenu />
      <Container fluid>
        <LineComponent text={keyword} />
        <h1>Products for {keyword || 'All Categories'}</h1>
        {/* Loading Spinner */}
        {loading && <div className="spinner">Loading...</div>}
        <Row>
          <Col md={3}>
            {/* Filter Section */}
            <div className="filters" style={{ marginTop: '5%' }}>
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
              <div className="sort-buttons">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleSortByPrice('low-to-high')}
                >
                  Price Low to High
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleSortByPrice('high-to-low')}
                >
                  Price High to Low
                </button>
              </div>
            </div>
          </Col>
          <Col>
            {/* Product List */}
            <div className="products-list">
              {currentProducts.length === 0 && !loading && !error && (
                <p>No products found for the selected filters.</p>
              )}
              {currentProducts.map((product) => (
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
                  <h5>Rs {product.price}</h5>
                  <p>Available: {product.quantity}</p>
                  <button className="btn btn-danger">Add to Cart</button>
                </div>
              ))}
            </div>
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination className="mt-3">
                <Pagination.First
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            )}
          </Col>
        </Row>
        {error && <p>{error}</p>}
      </Container>
    </div>
  );
}
