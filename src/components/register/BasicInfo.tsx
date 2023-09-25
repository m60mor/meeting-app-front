import Form from 'react-bootstrap/Form';

export default function BasicInfo() {
    return (
      <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" autoFocus />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Hasło</Form.Label>
          <Form.Control type='password'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Potwierdź hasło</Form.Label>
          <Form.Control type='password'/>
        </Form.Group>
      </>
    )
}