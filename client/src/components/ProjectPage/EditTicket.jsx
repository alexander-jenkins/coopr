import React, { useState } from 'react';
import {
    Modal,
    Button,
    Form,
    Stack,
    Row,
    Col,
    Container,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function EditTicket() {
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    function closeAll() {
        setShowEdit(false);
        setShowDelete(false);
    }

    return (
        <div>
            <Button
                onClick={() => setShowEdit(true)}
                style={{ backgroundColor: '#F8F9FA', border: '#F8F9FA' }}
            >
                {' '}
                <FontAwesomeIcon
                    icon={faEdit}
                    size='lg'
                    style={{ color: 'black' }}
                />
            </Button>

            <Modal
                show={showEdit}
                onHide={() => setShowEdit(false)}
                backdrop='static'
                keyboard={false}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Stack gap={1}>
                            <Container>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                <h5>Title:</h5>
                                            </Form.Label>
                                            <Form.Control placeholder='Enter Title' />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                <h5>Assigned To:</h5>
                                            </Form.Label>
                                            <Form.Control placeholder='enter Assignee' />
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
                                            <Form.Control placeholder='Enter Category' />
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
                                            <Form.Control placeholder='Enter Due Date' />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                <h5>Status:</h5>
                                            </Form.Label>
                                            <div className='mb-3'>
                                                <Form.Check
                                                    inline
                                                    label='Open'
                                                    name='Status'
                                                    type='radio'
                                                    value='Open'
                                                />
                                                <Form.Check
                                                    inline
                                                    label='Closed'
                                                    name='Status'
                                                    type='radio'
                                                    value='Closed'
                                                />
                                                <Form.Check
                                                    inline
                                                    label='Solved'
                                                    name='Status'
                                                    type='radio'
                                                    value='Solved'
                                                />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                <h5>Priority:</h5>
                                            </Form.Label>
                                            <div className='mb-3'>
                                                <Form.Check
                                                    inline
                                                    label='Low'
                                                    name='Priority'
                                                    type='radio'
                                                    value='Low'
                                                />
                                                <Form.Check
                                                    inline
                                                    label='Medium'
                                                    name='Priority'
                                                    type='radio'
                                                    value='Medium'
                                                />
                                                <Form.Check
                                                    inline
                                                    label='Critical'
                                                    name='Priority'
                                                    type='radio'
                                                    value='Critical'
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
                                            as='textarea'
                                            rows={5}
                                            placeholder='Enter Description'
                                        />
                                    </Form.Group>
                                </Row>
                            </Container>
                            <br />
                        </Stack>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant='danger' onClick={() => setShowDelete(true)}>
                Delete
            </Button>
                    <Button
                        variant='primary'
                        style={{
                            backgroundColor: '#7749F8',
                            border: '#7749F8',
                        }}
                        onClick={() => setShowEdit(false)}
                    >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDelete} onHide={() => setShowDelete(false)} backdrop='static' centered>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This action cannot be undone. Proceed?</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setShowDelete(false)}>
                        Cancel
                    </Button>
                    <Button variant='danger' onClick={() => closeAll()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EditTicket;
