import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './admincardcomponent.css';

export default function AdminCardComponent({ imageSrc, overlayText, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <Card className="admin-card" onClick={handleClick}>
      <Card.Img src={imageSrc} alt="Card image" className="admin-card-img" />
      <Card.ImgOverlay className="admin-card-overlay">
        <Card.Title className="admin-card-text">{overlayText}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}
