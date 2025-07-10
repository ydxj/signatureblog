import { useState } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';


const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    personnes: 0,
    lieuArrivee: "",
    dateHeureArrivee: "",
    lieuDepart: "",
    dateDepart: "",
    transport: "",
    vol: "",
    demandes: "",
    conditionsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.conditionsAccepted) {
      alert("Vous devez accepter les conditions générales de vente.");
      return;
    }
    console.log("Réservation envoyée:", formData);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Formulaire de réservation</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nom complet *</Form.Label>
              <Form.Control type="text" name="nom" required value={formData.nom} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numéro de téléphone *</Form.Label>
              <Form.Control type="tel" name="telephone" required value={formData.telephone} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-mail *</Form.Label>
              <Form.Control type="email" placeholder="prenom@gmail.com" name="email" required value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de personnes *</Form.Label>
              <Form.Control type="number" name="personnes" min="0" required value={formData.personnes} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lieu d'arrivée *</Form.Label>
              <Form.Control type="text" name="lieuArrivee" required value={formData.lieuArrivee} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date et heure d'arrivée *</Form.Label>
              <Form.Control type="datetime-local" name="dateHeureArrivee" required value={formData.dateHeureArrivee} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Lieu départ *</Form.Label>
              <Form.Control type="text" name="lieuDepart" required value={formData.lieuDepart} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date de départ *</Form.Label>
              <Form.Control type="date" name="dateDepart" required value={formData.dateDepart} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Transport depuis l'aéroport ou le train ? *</Form.Label>
              <Form.Select name="transport" required value={formData.transport} onChange={handleChange}>
                <option value="">Sélectionner</option>
                <option value="Arrivée aéroport">Arrivée aéroport</option>
                <option value="Départ aéroport">Départ aéroport</option>
                <option value="Mise à disposition">Mise à disposition</option>
                <option value="Excursion touristique">Excursion touristique</option>
                <option value="Circuits">Circuits</option>
                <option value="Autres">Autres</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numéro de vol</Form.Label>
              <Form.Control type="text" name="vol" value={formData.vol} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Demandes spéciales</Form.Label>
              <Form.Control as="textarea" rows={3} name="demandes" value={formData.demandes} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="conditionsAccepted"
                label="J'accepte les Conditions Générales de Vente"
                checked={formData.conditionsAccepted}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center">
          <Button variant="primary" type="submit">Je réserve !</Button>
        </div>
      </Form>
    </Container>
  );
};

export default ReservationForm