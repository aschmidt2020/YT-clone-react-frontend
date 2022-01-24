import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CommentUpdate = (props) => {
  const [text, setText] = useState(props.comment.text)
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  function handleClose() {
    setShow(false);
    setText(props.comment.text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    debugger
    let updatedComment = {
      "id": props.comment.id,
      "video_id": props.comment.video_id,
      "text": text,
      "likes": props.comment.likes,
      "dislikes": props.comment.dislikes
    }

    props.updateComment(updatedComment);
    setShow(false);
  }

  return (
    <span>
      <Button variant="btn btn-outline-secondary" onClick={handleShow} data-toggle="popover" title="Edit Comment" data-content="Edit comment" trigger="hover">
        &nbsp;<i className="bi bi-pen"></i>&nbsp;&nbsp;
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form className="search-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="input-group mb-3">
              <label className="input-group-text">Text</label>
              <input className="form-control" type="text" value={text} onChange={(event) => setText(event.target.value)} />
            </div>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  );
}

export default CommentUpdate;