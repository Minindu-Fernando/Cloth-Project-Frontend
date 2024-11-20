
import { getAllProducts } from "../../services/viewAllNewArrival";
import { Container, Row, Button } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProductById } from "../../services/viewAllNewArrival";
import LineComponent from "./LineComponent";

export default function ViewAllNewArrival() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

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
            setProducts(products.filter((product) => product.productId !== productId));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleUpdateProduct = (product) => {
        navigate(`/update-new-arrival/${product.productId}`, { state: { product } });
    };

    return (
        <Container fluid>
              <LineComponent text=" VIEW ALL NEW ARRIVALS" />
            <Row>
                <div className="product-grid">
                    {products.map((product) => (
                        <div className="product-card" key={product.productId}>
                            <img src={product.image} alt={product.productName} />
                            <h6><b>{product.productName}</b></h6>
                            <p>{product.description}</p>
                            <p>Rs{product.price}</p>
                            <p>Available: {product.quantity}</p>
                            <button style={{ marginRight: '5%' }} className="btn btn-warning" onClick={() => handleUpdateProduct(product)}>Update</button>
                            <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.productId)}>Delete</button>
                        </div>
                    ))}
                </div>
            </Row>
        </Container>
    );
}

