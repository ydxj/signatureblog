import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok} from 'react-icons/fa';
import { Container } from 'react-bootstrap';

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
export default Footer