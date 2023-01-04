import React, { useRef, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import axios from 'axios';

function Admin() {
    const project = useRef();
    function getTickets(e) {
        e.preventDefault();

    }

    return (
        <Container>
            <Form onSubmit={getTickets}>
                <Form.Control type='input' ref={project}></Form.Control>
                <Button type='submit'> Load some tickets</Button>
            </Form>

            <ul>
                {tickets.map((ticket) => (
                    <Card key={ticket.__id}>
                        <Card.Body>
                            <Card.Title>{ticket.title}</Card.Title>
                            <Card.Text>{ticket.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </ul>
        </Container>
    );
}
export default Admin;
