import Form from 'react-bootstrap/Form';

export default function PersonalInfo() {
    return (
        <>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Imię</Form.Label>
            <Form.Control  autoFocus />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Data urodzenia</Form.Label>
            <Form.Control autoFocus />
        </Form.Group>
        </>
    )
}