// src/components/AddProduct.jsx

import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { addProduct } from '../../services/addProduct'; // Adjust the import path as needed

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { productName, description, category, quantity, price };

    try {
      const response = await addProduct(product, image);
      console.log('Product added successfully:', response);
      // Add any success handling logic, like showing a success message
    } catch (error) {
      console.error('Error adding product:', error);
      // Add any error handling logic, like showing an error message
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="p-4 border rounded" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4">Add New Product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formProductName" className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCategory" className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formQuantity" className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPrice" className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Add Product
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddProduct;
