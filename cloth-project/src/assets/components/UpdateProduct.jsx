import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateProductById } from '../../services/productService';

export default function UpdateProduct() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState(state?.product || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        try {
            await updateProductById(product.productId, product);
            navigate("/view-all-products");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="p-4 border rounded" style={{ maxWidth: '600px', width: '100%' }}>
                <h2 className="text-center mb-4">Update Product</h2>
                <Form onSubmit={handleUpdateProduct}>
                    <Form.Group controlId="formProductName" className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="productName"
                            value={product.productName || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formCategory" className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            value={product.category || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={product.description || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formQuantity" className="mb-3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            name="quantity"
                            value={product.quantity || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPrice" className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={product.price || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Update Product
                    </Button>
                    <Button variant="danger" className="w-100 mt-3" onClick={() => navigate("/")}>
                        Cancel
                    </Button>
                </Form>
            </div>
        </Container>
    );
}
