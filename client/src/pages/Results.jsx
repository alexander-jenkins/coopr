import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import LPnavbar from '../components/LPnavbar';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { useNavigate, useLocation } from 'react-router-dom';
import Searchbar from '../LandingPage/Searchbar'

function Result() {

    const location = useLocation();
    const navigate = useNavigate();
    const view = location.state;

    return (

        <div
            className='overflow-hidden'
            style={{ backgroundColor: '#D9D9D9', height: '100vh' }}
        >

                    <Row flex>
                        <LPnavbar />
                    </Row>
                    <Container>
                    <Row>
                        <Searchbar />
                        <h2>Result page</h2>
                        <p>searches for: {view} </p>
                        <Col span = {1}>
                        <Button onClick={() => navigate('/home')}>
                            Back
                        </Button>
                        </Col>
                    </Row>
                    </Container>
        </div >

    )

}
export default Result