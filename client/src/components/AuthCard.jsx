import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function AuthCard({ children }) {
    return (
        <div>
            <Container fluid>
                <Card>
                    <Row className='px-5'>
                        <Col md='auto'>{children}</Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
}

export default AuthCard;
