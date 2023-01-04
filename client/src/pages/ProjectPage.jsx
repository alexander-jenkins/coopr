import React, { createContext } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import PPsidebar from '../components/PPsidebar';
import TicketList from '../components/TicketList';
import tickets from '../components/test.json';

const TicketContext = createContext();

function ProjectPage() {
    return (
        <TicketContext.Provider value={''}>
            <div
                className='overflow-hidden'
                style={{ backgroundColor: '#D9D9D9', height: '100vh' }}
            >
                <Row>
                    <Col
                        className='mt-0'
                        sm={{ span: 4 }}
                        md={{ span: 2, offset: 0 }}
                        children={<PPsidebar />}
                    />
                    <Col>
                        <Container fluid>
                            <Stack gap={3}>
                                <br />
                                <TicketList ticketList={tickets} />
                            </Stack>
                        </Container>
                    </Col>
                </Row>
            </div>
        </TicketContext.Provider>
    );
}

export default ProjectPage;
