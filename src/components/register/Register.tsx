import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import BasicInfo from './BasicInfo';
import PersonalInfo from './PersonalInfo';
import AdditionallInfo from './AdditionalInfo';

import './register.css';

export default function Register() {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [page, setPage] = useState<number>(1);
  
  type jsxType = JSX.IntrinsicElements[keyof JSX.IntrinsicElements];
  let form: jsxType= <div></div>;
  let leftButtonText = 'Zamknij';
  let rightButtonText = 'Dalej'

  if (page === 1) {
    form = <BasicInfo />
    leftButtonText = 'Zamknij';    
    rightButtonText = 'Dalej';
  }
  else if (page === 2) {
    form = <PersonalInfo />
    leftButtonText = 'Wróć';    
    rightButtonText = 'Dalej';
  }
  else if (page === 3) {
    form = <AdditionallInfo />    
    leftButtonText = 'Wróć';    
    rightButtonText = 'Zarejestruj';
  }

  const nextPage = () => {
    if (page < 3) {
      setPage(prev => prev + 1);
    }
  }

  const prevPage = () => {
    if(page > 1) {
      setPage(prev => prev - 1);
    } else {
      handleClose();
    }
  }

  const resetModal = () => {
    handleClose();
    setTimeout(() => {setPage(() => 1)}, 300);
  }

  return (
    <>
      <button className='button-black' onClick={handleShow}>
        Zarejestruj
      </button>

      <Modal show={show} onHide={resetModal}>
        <Modal.Header>
          <Modal.Title>Rejestracja</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='progress-b' style={{width: 33.3 * page + '%'}}></div>
          {form}
        </Modal.Body>
        <Modal.Footer>
          <button className='button-black' onClick={prevPage}>
            {leftButtonText}
          </button>
          <button className='button-white' onClick={nextPage}>
            {rightButtonText}
            <div className='button-white--underline'></div>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}