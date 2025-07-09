import React, { useState } from 'react';
import { Container, Card, Button, Row, Col, Modal, Nav, Navbar,Form } from 'react-bootstrap';
import { FaMapMarkedAlt, FaPlaneArrival, FaSuitcase } from 'react-icons/fa';
import { FastService, TransfertAeroport, TransfertInterville, camelTour, chauffeur, fesTanneries, hassanII, koutoubia, menara, miseDispo } from "../../Assets/assets";
import './styles.css'; 
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const produits = [
        {
            title:"Circuit de 9 jours au départ de Casablanca",
            price: 8612,
            image:hassanII,
            details:"Ce circuit de 9 jours au départ de Casablanca devrait découvrir plus de 70% des différences marocaines les plus connues. Ce voyage part de la plus grande ville marocaine vers Rabat, la capitale administrative du pays. Ensuite, vers la ville impériale du Maroc, c'est-à-dire Fès. \n Votre voyage vous mènera ensuite dans le désert à couper le souffle de Merzouga. Plongez dans la culture et la splendeur naturelle du désert. Alors que le soleil se couche sur les dunes dorées de l'Erg Chebbi, observez comment les Bédouins ont traversé le désert pendant des siècles. Au camp, savourez un bon dîner tout en écoutant un spectacle de tambours berbères traditionnels. Vous remonterez votre chameau à Merzouga après avoir passé la nuit sous le ciel étoilé du désert.\nEnfin, vous arriverez à Marrakech, la ville rouge. Sans visiter cette ville, assurément, l'une des villes les plus belles et les plus fascinantes du pays,",
            pointsForts:[
                "Montez à dos de chameau et campez dans le désert",
                "Découvrez Chefchaouen, une ville à la façade bleue.",
                "En savoir plus sur les vestiges romains de Volubilis.",
                "Nourrir et photographier des singes sauvages.",
                "Explorez Fès, la plus ancienne ville du monde encore en vie.",
                "Découvrez les fascinants souks et marchés du Maroc.",
                "Explorez Marrakech et visitez Jamaa El Fna."
            ],
            materiel:"100% equipee",
            detailsPrix:"Par personne",
            Pack: 9,
            Circuits:[
                "Arrivée à Casablanca",
                "Casablanca - Rabat - Meknès - Fès",
                "Explorer Fès",
                "Fès-Ifrane-Midelt-Merzouga",
                "Explorer Merzouga",
                "Mergouga-Gorges du Todra-Vallée du Dadès",
                "Vallée du Dadès - Ouarzazate - Ait Ben-Haddou - Marrakech",
                "Visite de Marrakech",
                "Transfert à l'aéroport"
            ],
            Inclus:[
                "Chauffeur/guide multilingue",
                "éhicule tout confort 4×4/minibus climatisé",
                "Prise en charge et retour à l'aéroport / hôtel / riad",
                "Carburant et stationnement",
                "Guides locaux",
                "Billets d'entrée aux monuments et musées",
            ],
            Exclus:[
                "Dépenses personnelles",
                "Hôtels & hébergements",
                "Billets d'avion et visa"
            ]
        },
        {
            title:"Circuit de 7 jours de Casablanca à Marrakech",
            price: 5500,
            image:menara,
            details:"Ce circuit de 7 jours de Casablanca à Marrakech comprend tous les sites les plus emblématiques du pays. Voyagez en véhicule privé confortable entre les villes et profitez de visites guidées de sites clés tels que la mosquée Hassan II, la médina de Fès el Bali, classée au patrimoine mondial de l'UNESCO, et Ait Benhaddou. Avec un guide local expert à vos côtés, découvrez la culture et l'histoire marocaines tout en explorant certains des endroits les plus fascinants du pays. En chemin, profitez de beaucoup de temps pour vous détendre et vous imprégner de l'atmosphère unique de ce beau pays",
            pointsForts:[
                "Trekk chameaux et camp dans le désert",
                "Promenez-vous dans la rue étroite de Fès",
                "Explorez la médina de Marrakech et visitez Jamaa El Fna",
                "Découvrez les marchés exotiques et les souks du Maroc",
                "Balade dans la ville bleue de Chefchaouen",
                "Explorez les ruines romaines de Volubilis et Meknès",
            ],
            materiel:"100% equipee",
            detailsPrix:"Par personne",
            Pack: 7,
            Circuits:[
                "Casablanca to Chefchaouen (338 km)",
                "Free Day to Explore Chefchaouen",
                "Chefchaouen to Fes via Volubilis & Meknes (277 km)",
                "Fes Sightseeing Tour",
                "Fes to Merzouga via Ifrane, Azrou & Midelt (470km)",
                "Sahara Desert to Todra Gorge and Dades Valley",
                "Dades Valley to Marrakech via Ait Benhaddou (325km)"
            ],
            Inclus:[
                "Chauffeur/guide multilingue",
                "éhicule tout confort 4×4/minibus climatisé",
                "Prise en charge et retour à l'aéroport / hôtel / riad",
                "Carburant et stationnement",
                "Guides locaux",
                "Billets d'entrée aux monuments et musées",
            ],
            Exclus:[
                "Dépenses personnelles",
                "Hôtels & hébergements",
                "Billets d'avion et visa"
            ]
        },
        {
            title:"TRANSFERT AEROPORT",
            price: 350,
            image:chauffeur,
            details:"Les meilleures offres et avec un prix moins cher. Réservez alors votre Transfert Aéroport ou Transfert depuis l'aéroport vers autre ville, notre Agence de Transport Touristique mis à votre disposition ses meilleurs services tous pour votre satisfaction.\nVotre véhicule est privé et climatisé. Vous n’aurez pas à partager avec quelqu’un d’autre. Vous rencontrerez notre chauffeur juste à l’extérieur de l’Aéroport, où il tiendra une pancarte portant votre nom.\nNos chauffeurs parlent Arabe ,Anglais, Français",
            materiel:"100% equipee",
            detailsPrix:"Par personne",
            Circuits:["Aéroport Casablanca Vers Hôtel / Toutes les villes du Maroc"]
        },
        {
            title:"TRANSFERT INTER-VILLE",
            price: 1800,
            image:TransfertInterville,
            details:"Pour tout transfert inter-ville partout au Maroc. Signature Tours & Trip met à votre disposition un minivan avec chauffeur expérimenté qui vous accompagnera dans votre voyage.\nVoyagez sereinement avec un Chauffeur Privé : pas de compteur qui tourne, aucun supplément de tarif et n’attendez plus votre tour dans la file des Taxis.\nVous arrivez à l’aéroport? Un chauffeur vous attend avec une pancarte nominative à la sortie douane et nous portons vos valises jusqu’au véhicule.\nVous allez à l’aéroport? Programmez l’arrivée d’un chauffeur chez vous ou dans votre hôtel.",
            materiel:"51% cotton / 43% polyester / 6% elastane",
        },
        {
            title:"MISE À DISPOSITION",
            price: 1800,
            image:miseDispo,
            details:"Nous proposons un Service de mise à disposition complet\nBesoin d’une voiture de tourisme avec chauffeur à l’heure ou à la journée? Nous proposons la solution adaptée à vos attentes\n\nPour vos déplacements professionnels : Congrés, Évènements ou diner d’affaires..\nPour vos déplacements personnels : Diner, Soirées, Shopping ou un rendez-vous chez le médecin..\nUne visite touristique\nÉvènements exceptionnels : Mariages, Anniversaires, Réceptions..\nPour toutes ces occasions, nous mettons à disposition un Chauffeur VTC avec une Berline ou Van de standing, avec tout les équipements nécessaires à bord pour rendre votre trajet agréable.",
            miseaDisposition:[
                "Un forfait kilométrique (20km/h)",
                "Une Berline ou Van haut de gamme",
                "Un chauffeur expérimenté",
                "Un accueil personnalisé et le transport de vos bagages",
                "Le carburant, les péages ainsi que les assurances"
            ],
            NB:"Le prix est variable selon la prestation du service le jour / Nuit"
        },
        {
            title:"FAST SERVICE AEROPORT",
            price: 1550,
            image:FastService,
            details:"Pour votre arrivée, un agent vous est dédié et vous assiste dans toutes vos formalités aéroportuaires (Enregistrement, douanes, détaxe, Salon VIP…) en vous assurant un passage prioritaire aux services immigration.\n\nAccueil du passager selon la position de l'avion :\nSi l’avion est accosté, votre agent vous attendra à la sortie de la passerelle avec un panneau signalétique portant votre nom.\nSi l’avion est sur le tarmac, votre agent vous attendra à l'entrée du terminal (dès que vous descendez du bus) avec un panneau signalétique portant votre nom.\nPassage en priorité par un circuit dédié pour les formalités de l’immigration.\nAccompagnement du passager à la zone de collecte des bagages. Nous mettons à votre disposition, si vous le souhaitez, un véhicule avec chauffeur pour votre transfert depuis l’aéroport.",
            materiel:"100% equipee",
            detailsPrix:"Par personne",
            Circuits:[
                "Aéroport vers Hôtel"
            ],
        },
        {
            title:"Circuits 4 jours dans le désert de Marrakech à Fès",
            price: 3487,
            image:fesTanneries,
            details:"L'excursion de 4 jours dans le désert de Marrakech à Fès est l'une des meilleures excursions dans le désert de Marrakech que l'opérateur Signature Tours & Trip organise. Nous recommandons cette visite car il y a tellement de choses à voir et à faire en plus d'une balade à dos de chameau et d'une nuit dans le camp du désert de Merzouga.\n\n4 jours suffisent pour explorer le désert du Sahara et se rendre à Fès. Boire une tasse de thé, Profiter des sites des dunes de l'Erg Chebbi, rencontrer des nomades vivant dans des grottes… De plus, vous pourrez randonner dans les gorges du Todra et la vallée du Dadès.",
            materiel:"100% equipee",
            detailsPrix:"Par personne",
            Pack: 4,
            Circuits:[
                "Excursion d'une journée de Marrakech à Ait Ben Haddou et aux gorges du Dadès",
                "Excursion d'une journée des gorges du Dadès à l'Erg Chebbi et au désert de Merzouga",
                "Tour du désert de Merzouga et balade à dos de chameau",
                "Tour du désert de Merzouga à Fès",
            ],
            Inclus:[
                "Chauffeur/guide multilingue",
                "éhicule tout confort 4×4/minibus climatisé",
                "Prise en charge et retour à l'aéroport / hôtel / riad",
                "Carburant et stationnement",
                "Guides locaux",
                "Billets d'entrée aux monuments et musées",
            ],
            Exclus:[
                "Dépenses personnelles",
                "Hôtels & hébergements",
                "Billets d'avion et visa"
            ]
        }
    ]
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

const DetailsModal = ({ show, handleClose, produit }) => {
  if (!produit) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>{produit.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Description:</strong> {produit.details}</p>
        {produit.pointsForts && (
          <>
            <h5 className="mt-3 text-success">Points Forts:</h5>
            <ul>{produit.pointsForts.map((point, i) => <li key={i}>{point}</li>)}</ul>
          </>
        )}
        {produit.Circuits && (
          <>
            <h5 className="mt-3 text-info">Itinéraire:</h5>
            <ol>{produit.Circuits.map((c, i) => <li key={i}>{c}</li>)}</ol>
          </>
        )}
        {produit.Inclus && (
          <>
            <h5 className="mt-3 text-primary">Inclus:</h5>
            <ul>{produit.Inclus.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
          </>
        )}
        {produit.Exclus && (
          <>
            <h5 className="mt-3 text-danger">Exclus:</h5>
            <ul>{produit.Exclus.map((e, idx) => <li key={idx}>{e}</li>)}</ul>
          </>
        )}
        {produit.miseaDisposition && (
          <>
            <h5 className="mt-3 text-warning">Mise à disposition:</h5>
            <ul>{produit.miseaDisposition.map((m, i) => <li key={i}>{m}</li>)}</ul>
          </>
        )}
        {produit.NB && <p className="mt-2"><strong>Note:</strong> {produit.NB}</p>}
      </Modal.Body>
    </Modal>
  );
};

const Hero = () => (
  <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">
    <div>
      <h1 className="display-4 fw-bold">Explore Morocco with Us</h1>
      <p className="lead">Unforgettable tours, transfers & desert experiences</p>
    </div>
  </div>
);
const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-5">
    <Container className="text-center">
      <p className="mb-2">© {new Date().getFullYear()} Signature Tours & Trip. Tous droits réservés.</p>
      <div className="d-flex justify-content-center gap-3 fs-5">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaTiktok />
        </a>
      </div>
    </Container>
  </footer>
);

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
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Tours</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
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
