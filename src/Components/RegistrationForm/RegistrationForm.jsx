import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegistrationForm = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
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
        handleClose();
    }

    function handleSubmit(e) {
        debugger
        e.preventDefault();
        if(password === passwordCheck){
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
        else {
          alert('Passwords must match.')
        }
    }

    return (
        <span id="sign-up">
          <Button variant="btn btn-outline-secondary" onClick={handleShow} style={{'marginLeft':'1em'}}>
          Register
          </Button>

          <Modal show={show} onHide={resetForm}>
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>

            <Modal.Body>

            <Form onSubmit={handleClose}>
              <div className="input-group mb-3">
              <span className="input-group-text">First name</span>
              <input className="form-control" type='text' value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text">Last name</span>
              <input className="form-control" type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text">Email</span>
              <input className="form-control" type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text">Username</span>
              <input className="form-control" type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text">Password</span>
              <input className="form-control" type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div>

              <div className="input-group mb-3">
              <span className="input-group-text">Re-type Password</span>
              <input className="form-control" type='password' value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)}></input>
              </div>
            </Form>
                        
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={resetForm}>
                Close
              </Button>
              <Button type='submit' variant="primary" onClick={handleSubmit}>
                Sign Up!
              </Button>
            </Modal.Footer>
          </Modal>
        </span>

    );

}

export default RegistrationForm;