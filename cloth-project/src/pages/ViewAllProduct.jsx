import { getAllProducts } from "../services/category"; // Adjust the import path as needed
import { Container, Row, Button } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { deleteProductById } from "../services/viewAllProducts";


export default function ViewAllProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const productData = await getAllProducts();
            setProducts(productData);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        fetchProducts();
      }, []);

      const handleDeleteProduct = async (productId) => {
        try {
          await deleteProductById(productId);
          // Remove the deleted product from the state to update UI
          setProducts(products.filter((product) => product.productId !== productId));
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      };

  return (
    <div>
      <Container fluid>
        <Row>
        <div className="product-grid">
              {products.map((product) => (
                <div
                  className="product-card"
                  key={product.productId}                >
                  <img src={product.image} alt={product.productName} />
                  <h6>
                    <b>{product.productName}</b>
                  </h6>
                  <p>{product.description}</p>
                  <p>Rs{product.price}</p>
                  <p>Available: {product.quantity}</p>
                  <button style={{marginRight:'5%'}}className="btn btn-warning">Update</button>
                  <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.productId)}>Delete</button>
                </div>
              ))}
            </div>
        </Row>
      </Container>
    </div>
  )
}
