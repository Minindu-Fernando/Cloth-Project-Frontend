import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

    export default function NewArrivals({ image, title, text, price }) {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Button style={{width:'100%'}} variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        );
    }
    

