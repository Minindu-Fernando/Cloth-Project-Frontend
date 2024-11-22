import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardComponent({image}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
</Card>  )
}
