import React from 'react';
import { Container, Card, Row, Col, Stack } from 'react-bootstrap';

function AccountCard({ children }) {
    return (
        <div>
            <Container>
                <Card>
                    <Row className='px-5'>
                        <Col md='auto'>
                            <Stack gap={4}>
                                <br />
                                {children}
                                <br />
                            </Stack>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
}

export default AccountCard;
