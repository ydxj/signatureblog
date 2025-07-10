import { useState } from 'react';
import { Container, Row, Nav, Navbar } from 'react-bootstrap';
import './styles.css'; 
import { FaSuitcase } from 'react-icons/fa';
import produits from './Produits';
import ProductCard from './ProductCard';
import DetailsModal from './DetailsModal';
import Hero from './Hero';
import ReservationForm from './ReservationForm';
import Footer from './Footer';

const App = () => {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShow = (prod) => {
    setSelected(prod);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-primary">
            Signature Tours <FaSuitcase className="ms-1" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Tours</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Hero />

      <Container className="py-5">
        <h2 className="text-center mb-5">Nos Offres</h2>
        <Row>
          {produits.map((produit, idx) => (
            <ProductCard key={idx} produit={produit} onShow={handleShow} />
          ))}
        </Row>
      </Container>

      <DetailsModal show={showModal} handleClose={handleClose} produit={selected} />
      <ReservationForm />
      <Footer />
    </>
  );
};

export default App;
