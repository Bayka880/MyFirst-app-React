import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";

function Addplayer(props) {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState();

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: e.target.elements.playername.value,
      score: parseInt(e.target.elements.score.value),
    };
    props.addplayer(obj);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Add player
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="">Player name</FormLabel>
              <FormControl type="text" name="playername" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="">Player score</FormLabel>
              <FormControl name="score" type="text" />{" "}
            </FormGroup>
            <Button type="submit" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Addplayer;
