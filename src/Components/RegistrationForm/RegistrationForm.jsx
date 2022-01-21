import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegistrationForm = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function resetForm() {
        setUsername('');
        setPassword('');
        setEmail('');
        setFirstName('');
        setLastName('');
        //handleClose();
    }

    function handleSubmit(e) {
        debugger
        e.preventDefault();
        let userInfo = {
            "username": username,
            "password": password,
            "email": email,
            "first_name": firstName,
            "last_name": lastName
        }

        props.register(userInfo);
        debugger
        resetForm();
    }

    return (
        <div id="sign-up">
            <Button variant="btn btn-outline-secondary" onClick={handleShow}>
          Register Here
          </Button>

          <Modal show={show} onHide={resetForm}>
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>

            <Modal.Body>

            <Form onSubmit={handleClose}>
                <label>First Name</label>
                <input type='text' value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
                <label>Last Name</label>
                <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Username</label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit' >Sign Up!</button>
            </Form>
                        
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type='submit' variant="primary" onClick={handleSubmit}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

    );

}

export default RegistrationForm;