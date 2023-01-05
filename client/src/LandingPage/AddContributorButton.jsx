//Contains a button that shows a form that allows users to add contributors to their project 
import React, { useState } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function AddContributorButton(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const textInput = React.createRef();
    const name  = props.name;

    function saveNewContributor(e) {
        e.preventDefault();
        axios
            .patch(
                '/api/project/addCollaborator?'+ new URLSearchParams({
                    projectId: "638fcad1bb0f1b30858e4ccc"
                }),
                {
                    uid: textInput.current.value
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(() => {
                handleClose();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <Button onClick={handleShow} style={{ backgroundColor: '#F8F9FA', border: '#F8F9FA' }}>
                <FontAwesomeIcon
                    icon={faUserPlus}
                    size='lg'
                    style={{ color: 'black' }}
                />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton ><Modal.Title>Add Contributor to {name}</Modal.Title></Modal.Header>
                <Container>
                <br />
                <Form className="d-flex" onSubmit = {saveNewContributor}>
                    <Form.Control type="search" placeholder="Add Contributor" required className="me-2" aria-label="Search" ref={textInput} />
                    <Button type="submit" style={{ backgroundColor: "#7749F8", border: "#7749F8" }}>Add+</Button>
                </Form>
                <br />
                </Container>
            </Modal>
        </div>
    )
}

export default AddContributorButton