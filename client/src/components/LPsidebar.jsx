import React from 'react';
import { Container,Row, Stack } from 'react-bootstrap';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Logo from '../images/Logo.svg';
import CreateProject from '../components/CreateProject';

function LPsidebar() {
    return (
        <div className="vh-100 d-flex flex-column ">
            <Container>
                <Row className="h-100">
                <SidebarMenu className="vh-100 d-flex flex-column align-items-stretch"   bg='dark'>
                    <SidebarMenu.Header>
                        <Stack gap={5}>
                            <br />
                            <SidebarMenu.Brand className='text-center'>
                                <div>
                                    <img
                                        src={Logo}
                                        width='75'
                                        height='75'
                                        alt='Coopr Logo'
                                    ></img>{' '}
                                    <h1 className={'text-light'}>Coopr</h1>
                                </div>
                            </SidebarMenu.Brand>
                        </Stack>
                    </SidebarMenu.Header>
                    <SidebarMenu.Body>
                        <Container>
                            <Stack gap={4}>
                                <br />
                                <div className='text-center'>
                                    <CreateProject />
                                </div>
                                <br />
                                <div>
                                    <SidebarMenu.Nav.Title>
                                        <h5 className='text-light'>Projects</h5>
                                        <br />
                                    </SidebarMenu.Nav.Title>
                                    <Container>
                                        <Stack gap={3}>
                                            <div>
                                                <SidebarMenu.Nav.Title className='text-light'>
                                                    My Projects
                                                </SidebarMenu.Nav.Title>
                                            </div>
                                            <div>
                                                <SidebarMenu.Nav.Title className='text-light'>
                                                    Shared With Me
                                                </SidebarMenu.Nav.Title>
                                            </div>
                                        </Stack>
                                    </Container>
                                </div>
                            </Stack>
                        </Container>
                    </SidebarMenu.Body>
                </SidebarMenu>
                </Row>
            </Container>
        </div>
    );
}

export default LPsidebar;
