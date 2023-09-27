import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

export default function Login() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setLogin('');
      setPassword('');
    }, 300)
  }
  const handleShow = () => setShow(true);

  const handleLogin = (e) => {
    e.preventDefault();
  }

  async function confirmLogin() 
  {
    fetch('http://localhost:8081/api/v1/auth/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: `${login}`,
        password: `${password}`
      })
    })
    .then(response => response.json())
    .then(jwt => sessionStorage.setItem('token', `${jwt.jwtToken}`));
  }
  // .then(response => response.json())
  // .then(user => {
  //   console.log(user);
  //   fetch('http://localhost:8081/api/v1/users/', {
  //     method: 'GET',
  //     mode: 'cors',
  //     headers: {
  //       'Authorization': `Bearer ${user.jwtToken}`
  //     }
  //   })
  //   .then(users => setUsr(users))
  //   .catch(err => console.log(err))
  //   }
  // )
  // onSubmit={handleLogin(confirmLogin)}

  return (
    <>
      <button className='button-white' onClick={handleShow}>
        Zaloguj
        <div className='button-white--underline'></div>
      </button>

      {/* closeButton */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Zaloguj się</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleLogin}>
          <Modal.Body>    
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Login</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="login"
                    value = {login}
                    onChange = {(e) => setLogin(e.target.value)}
                    autoFocus
                    required
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Hasło</Form.Label>
                <Form.Control 
                  type='password'
                  placeholder="hasło"
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button className='button-black' type='button' onClick={handleClose}>
              Zamknij
            </button>
            <button className='button-white' type='submit' onClick={confirmLogin}>
              Zaloguj
              <div className='button-white--underline'></div>
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}