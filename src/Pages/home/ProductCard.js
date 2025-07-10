import { Card, Button, Col } from 'react-bootstrap';

const ProductCard = ({ produit, onShow }) => (
  <Col md={4} className="mb-4">
    <Card className="shadow h-100 border-0 rounded-4 product-card">
      <Card.Img
        variant="top"
        src={produit.image}
        style={{ height: '220px', objectFit: 'cover' }}
        className="rounded-top-4"
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="fw-bold text-primary">{produit.title}</Card.Title>
        <Card.Text className="text-muted mb-2">{produit.details.slice(0, 100)}...</Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold text-danger">{produit.price} MAD</span>
          <Button variant="outline-primary" size="sm" onClick={() => onShow(produit)}>
            Show Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  </Col>
);

export default ProductCard