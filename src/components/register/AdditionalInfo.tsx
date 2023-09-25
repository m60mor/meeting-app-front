import Form from 'react-bootstrap/Form';

export default function AdditionallInfo() {
    return (
        <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Numer telefonu</Form.Label>
            <Form.Control  autoFocus />
        </Form.Group>
        </>
    )
}