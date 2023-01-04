// noinspection JSUnresolvedVariable

import React, { useRef, useState } from 'react';
import {
    Modal,
    Button,
    Form,
    Stack,
    Row,
    Col,
    Container,
} from 'react-bootstrap';
import { UserAuth } from '../contexts/AuthContext';
import axios from 'axios';

function CreateTicket() {
    const { user } = UserAuth();
    function newTicket(data) {
        axios({
            method: 'post',
            url: '/api/ticket/newTicket',
            headers: { 'Content-Type': 'application/json' },
            data: data,
        })
            .then((response) => console.table(response.data))
            .then((error) => console.log(error));
    }

    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    };

    // refs for the form
    const newTicketTitle = useRef();
    const newTicketAssignee = useRef();
    const newTicketCategory = useRef();
    const newTicketDueDate = useRef();
    const [newTicketStatus, setNewTicketStatus] = useState();
    const [newTicketPriority, setNewTicketPriority] = useState();
    const newTicketDescription = useRef();

    function updateFormStatus(e) {
        setNewTicketStatus(e.target.value);
    }

    function updateFormPriority(e) {
        setNewTicketPriority(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const ticket = {
            title: newTicketTitle.current.value,
            description: newTicketDescription.current.value,
            owner: user.email,
            assignee: newTicketAssignee.current.value,
            status: newTicketStatus,
            category: newTicketCategory.current.value,
            priority: newTicketPriority,
            due: newTicketDueDate.current.value,
            pinned: false,
        };
        newTicket(ticket);
        toggleShow();
    }

    return (
        <div>
            <Button
                onClick={toggleShow}
                style={{ backgroundColor: '#7749F8', border: '#7749F8' }}
            >
                {' '}
                New Ticket+
            </Button>

            <Modal
                show={show}
                onHide={toggleShow}
                backdrop='static'
                keyboard={false}
                size='lg'
                centered
            >
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Ticket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack gap={1}>
                            <Container>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label
                                                children={<h5>Title:</h5>}
                                            />
                                            <Form.Control
                                                ref={newTicketTitle}
                                                placeholder='Enter Title'
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label
                                                children={<h5>Assigned To:</h5>}
                                            />
                                            <Form.Control
                                                ref={newTicketAssignee}
                                                placeholder='enter Assignee'
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                <h5>Category:</h5>
                                            </Form.Label>
                                            <Form.Control
                                                ref={newTicketCategory}
                                                required
                                                placeholder='Enter Category'
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                <h5>Due Date:</h5>
                                            </Form.Label>
                                            <Form.Control
                                                ref={newTicketDueDate}
                                                placeholder='Enter Due Date'
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Form.Group required>
                                            <Form.Label>
                                                <h5>Status:</h5>
                                            </Form.Label>
                                            <div
                                                onChange={updateFormStatus}
                                                className='mb-3'
                                            >
                                                <Form.Check
                                                    inline
                                                    label='Open'
                                                    value='Open'
                                                    name='Status'
                                                    type='radio'
                                                />
                                                <Form.Check
                                                    inline
                                                    label='Closed'
                                                    value='Closed'
                                                    name='Status'
                                                    type='radio'
                                                />
                                                <Form.Check
                                                    inline
                                                    type='radio'
                                                    value='Solved'
                                                    label='Solved'
                                                    name='Status'
                                                />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group required>
                                            <Form.Label>
                                                <h5>Priority:</h5>
                                            </Form.Label>
                                            <div
                                                onChange={updateFormPriority}
                                                className='mb-3'
                                            >
                                                <Form.Check
                                                    inline
                                                    value='Low'
                                                    label='Low'
                                                    name='Priority'
                                                    type='radio'
                                                />
                                                <Form.Check
                                                    inline
                                                    value='Medium'
                                                    label='Medium'
                                                    name='Priority'
                                                    type='radio'
                                                />
                                                <Form.Check
                                                    inline
                                                    value='Critical'
                                                    label='Critical'
                                                    name='Priority'
                                                    type='radio'
                                                />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />

                                <Row>
                                    <Form.Group>
                                        <Form.Label>
                                            <h5>Description:</h5>
                                        </Form.Label>
                                        <Form.Control
                                            ref={newTicketDescription}
                                            as='textarea'
                                            rows={5}
                                            placeholder='Enter Description'
                                            required
                                        />
                                    </Form.Group>
                                </Row>
                            </Container>
                            <br />
                        </Stack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary'  onClick={toggleShow}>
                            Cancel
                        </Button>
                        <Button
                            variant='primary'
                            style={{
                                backgroundColor: '#7749F8',
                                border: '#7749F8',
                            }}
                            type='submit'
                        >
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default CreateTicket;
