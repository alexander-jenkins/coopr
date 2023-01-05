//Displays information on a ticket
//ProjectPage -> TicketList -> TicketCard
import { Card, Col, Container, Form, Row, Modal, Stack } from 'react-bootstrap';
import React, { useState } from 'react';
import FavoriteButton from './FavoriteButton';
import EditTicket from './EditTicket';
import TicketBadge from './TicketBadge';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import comments from '../test.json';


function TicketCard(props) {
    const ticket = props.ticket;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='shadow p-0 mb-5 bg-light rounded'>
            <Card>
                <Card.Header style={{ border: 'none' }}>
                    <Container fluid>
                        <Row md='auto' className='align-items-center'>
                            <Col>
                                <Form.Check type='checkbox'>
                                    <FavoriteButton status={ticket.favorite} />
                                </Form.Check>
                            </Col>
                            <Col>#{ticket.idNum}</Col>
                            <Col>Raised by: {ticket.raisedBy}</Col>
                            <Col>Assignee: {ticket.assignee}</Col>
                            <Col>Category: {ticket.category}</Col>
                            <Col>Due Date: {ticket.dueDate}</Col>
                            <EditTicket placeholder={ticket} />
                            <TicketBadge type={ticket.priority} />
                        </Row>
                    </Container>
                </Card.Header>
                <Card.Body onClick = {handleShow}>
                        <Card.Title>
                            <TicketBadge type={ticket.status} />{' '}
                            {ticket.title}
                        </Card.Title>
                        <Card.Text children={ticket.description} />
                </Card.Body>
            </Card>

            <Modal
                                    show={show}
                                    onHide={handleClose}
                                    keyboard={false}
                                    size='lg'
                                    centered
                                >
                                     <Modal.Header closeButton style={{ border: 'none' }}/>
                                    <Stack gap={3}>
                                        <TicketCard
                                            ticket={{
                                                favorite: true,
                                                idNum: 'abc123456',
                                                raisedBy: 'John Doe',
                                                assignee: 'Jane Doe',
                                                category: 'Log in',
                                                dueDate: '12/25/22',
                                                priority: 'Minor',
                                                status: 'Open',
                                                title: "Can't Sign In",
                                                description: 'Its not working',
                                            }}
                                        />
                                        <CommentForm />
                                        <CommentList commentList={comments} />
                                        <br/>
                                    </Stack>
                                </Modal>
        </div>
    );
}

export default TicketCard;
