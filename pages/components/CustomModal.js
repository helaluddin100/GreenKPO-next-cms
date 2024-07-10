import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const CustomModal = ({ show, handleClose, title, body }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      {/* <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
       
      </Modal.Header> */}
      <Modal.Body>
        <button className="btn-close model-close" onClick={handleClose}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default CustomModal;
