import React from 'react';
import { Card } from 'react-bootstrap';

const CaseCard = ({ title, description, imgUrl }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CaseCard;
