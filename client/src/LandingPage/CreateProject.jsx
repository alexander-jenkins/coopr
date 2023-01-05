// noinspection JSUnresolvedVariable

import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Stack } from 'react-bootstrap';
import { UserAuth } from '../contexts/AuthContext';
import axios from 'axios';

function CreateProject() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { user } = UserAuth();

    // form refs
    const newProjTitle = useRef();
    const newProjDescription = useRef();

    // hit the new proj api
    function saveNewProject(e) {
        e.preventDefault();
        axios
            .post(
                '/api/project/newProject',
                {
                    title: newProjTitle.current.value,
                    description: newProjDescription.current.value,
                    owner: user.email,
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(() => {
                newProjTitle.current.value = '';
                newProjDescription.current.value = '';
                handleClose();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <Button
                onClick={handleShow}
                style={{ backgroundColor: '#7749F8', border: '#7749F8' }}
            >
                {' '}
                New Project+
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create New Project</Modal.Title>
                </Modal.Header>
                <Form onSubmit={saveNewProject}>
                    <Modal.Body>
                        <Stack gap={1}>
                            <Form.Group>
                                <Form.Label>
                                    <h5>Title</h5>
                                </Form.Label>
                                <Form.Control
                                    placeholder='Enter Title'
                                    required
                                    ref={newProjTitle}
                                />
                            </Form.Group>
                            <br />

                            <Form.Group>
                                <Form.Label>
                                    <h5>Description</h5>
                                </Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={5}
                                    placeholder='Enter Description'
                                    required
                                    ref={newProjDescription}
                                />
                            </Form.Group>
                        </Stack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            variant='primary'
                            type='submit'
                            style={{
                                backgroundColor: '#7749F8',
                                border: '#7749F8',
                            }}
                        >
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default CreateProject;
