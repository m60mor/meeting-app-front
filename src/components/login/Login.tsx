import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='button-white' onClick={handleShow}>
        Zaloguj
        <div className='button-white--underline'></div>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Zaloguj się</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                placeholder="abc"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Hasło</Form.Label>
              <Form.Control type='password'/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='button-black' onClick={handleClose}>
            Zamknij
          </button>
          <button className='button-white' onClick={handleClose}>
            Zaloguj
            <div className='button-white--underline'></div>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}