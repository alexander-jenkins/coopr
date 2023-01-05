//Contains the form for entering comments
import React from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import { UserAuth } from '../../contexts/AuthContext';

function CommentForm() {
    const { user } = UserAuth();
    return (
        <div>
            <Container align='start' fluid>
                <Card>
                    <Card.Header style={{ border: 'none' }}>
                        <Row md='auto' className='align-items-center'>
                            <Col span={1}>
                                <Card.Title>{user.email}</Card.Title>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Container align='end'>
                            <Form>
                                <Row className='align-items-center'>
                                    <Form.Control
                                        as='textarea'
                                        rows={3}
                                        placeholder='Enter  Comment'
                                        style={{ border: 'none' }}
                                    />
                                </Row>
                                <br />
                                <Col>
                                    <Button
                                        type='submit'
                                        style={{ backgroundColor: '#7749F8', border: '#7749F8' }}>
                                        Submit
                                    </Button>
                                </Col>
                            </Form>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default CommentForm;