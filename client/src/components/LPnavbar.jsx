import React from 'react';
import { Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { UserAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import UserDropdown from '../components/UserDropdown';

function LPnavbar() {
    const { logout } = UserAuth();
    const navigate = useNavigate();

    let viewProfile = () => navigate('/account');

    async function handleSignOut() {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='shadow p-0 mb-5 bg-light rounded'>
            <Navbar
                align='end'
                style={{ backgroundColor: '#F8F9FA', display: 'flex' }}
            >
                <Nav className='ms-auto'>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Col>
                            <UserDropdown>
                                <NavDropdown.Item onClick={viewProfile}>
                                    View Profile
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleSignOut}>
                                    Sign Out
                                </NavDropdown.Item>
                            </UserDropdown>
                        </Col>
                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        </div>
    );
}

export default LPnavbar;
