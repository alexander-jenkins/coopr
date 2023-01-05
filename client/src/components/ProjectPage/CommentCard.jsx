import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function CommentCard(props) {
    const comment = props.comment;
    return (
        <div>
            <Container align='start' fluid>
                <Card>
                    <Card.Header style={{ border: 'none' }}>
                        <Row md='auto' className='align-items-center'>
                            <Col span={1}>
                                <Card.Title>{comment.user}</Card.Title>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{comment.comment}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default CommentCard;
