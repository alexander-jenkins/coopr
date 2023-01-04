import React from 'react';
import { Nav, Navbar, Col, Row } from 'react-bootstrap';

function LPnav() {
    return (
        <div>
            <Navbar className='rounded' style={{ backgroundColor: '#F8F9FA' }}>
                <Nav className='me-auto'>
                    <Row>
                        <Col sm={{ offset: 1 }} md={{ offset: 1 }}>
                            <Nav.Link href='#recent'>
                                <strong>Recent</strong>
                            </Nav.Link>
                        </Col>
                        <Col sm={{ span: 2 }} md={{ span: 2 }}>
                            <Nav.Link href='#favorites'>
                                <strong>Favorites</strong>
                            </Nav.Link>
                        </Col>
                    </Row>
                </Nav>
            </Navbar>
        </div>
    );
}

export default LPnav;
