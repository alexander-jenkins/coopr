//Navbar displayed at the top of every page
//Not displayed on Sign-in/ Sign-up
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import { UserAuth } from '../../contexts/AuthContext';
import LogoBlack from '../images/LogoBlack.svg';

export default function CooprNavbar() {
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
        <Navbar bg='light' variant='light' className='shadow p-0 rounded'>
            <Container fluid>
                <Navbar.Brand onClick={() => navigate('/app')}>
                    <img
                        src={LogoBlack}
                        width='25'
                        height='25'
                        alt='Coopr Logo'
                    />
                    <span>
                        <strong>Coopr</strong>
                    </span>
                </Navbar.Brand>

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
    );
}
