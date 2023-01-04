// noinspection DuplicatedCode

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { UserAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import UserDropdown from '../components/UserDropdown';

function AccountNavbar() {
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
        <div className='shadow bg-light rounded'>
            <Navbar style={{ backgroundColor: '#F8F9FA', display: 'flex' }}>
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate('/home')}>
                        <HomeButton />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <Nav className='ms-auto'>
                                <UserDropdown>
                                    <NavDropdown.Item onClick={viewProfile}>
                                        View Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleSignOut}>
                                        Sign Out
                                    </NavDropdown.Item>
                                </UserDropdown>
                            </Nav>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default AccountNavbar;
