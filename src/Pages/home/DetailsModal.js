import { Modal } from 'react-bootstrap';

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
export default DetailsModal