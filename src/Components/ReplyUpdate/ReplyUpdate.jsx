import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ReplyUpdate = (props) => {
    const [text, setText] = useState(props.reply.text)
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    function handleClose () {
        setShow(false);
        setText(props.reply.text);
    }

    function handleSubmit(event){
        event.preventDefault();
        debugger
        let updatedReply = {
            "id": props.reply.id,
            "text": text,
            "comment": props.reply.comment
        }

        props.updateReply(updatedReply);
        setShow(false);
    }

    return (
        <span>
        <Button variant="btn btn-outline-secondary" style={{'marginTop':'1em'}} onClick={handleShow} data-toggle='popover' title='Edit reply' data-content='Edit reply' trigger='hover'>
        <i className="bi bi-pen"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Reply</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <form className='search-form' onSubmit={handleSubmit}>
              <div className='input-group mb-3'>
                  <label className='input-group-text'>Text</label>
                  <input className='form-control' type='text' value={text} onChange={(event) => setText(event.target.value)}/>     
              </div>
          </form>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary" onClick={handleSubmit}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
  </span>
    );
}
 
export default ReplyUpdate;