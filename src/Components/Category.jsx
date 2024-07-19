import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='d-grid'>
      <button onClick={handleShow} className='btn btn-primary rounded'>Add Category</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          <div>
        <FloatingLabel
        controlId="floatingId"
        label="Category Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="1" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingCat" label="Category Name">
        <Form.Control type="text" placeholder="Music" />
      </FloatingLabel>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
      
      </div>
  )
}

export default Category