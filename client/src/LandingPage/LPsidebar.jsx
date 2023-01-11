//Sidebar on the landing page
//contains filters, etc.
import React from 'react';
import { Container,Row, Stack } from 'react-bootstrap';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import CreateProject from './CreateProject';

function LPsidebar() {
    return (
        <div className="vh-100 d-flex flex-column ">
            <Container>
                <Row className="h-100">
                <SidebarMenu className="vh-100 d-flex flex-column align-items-stretch"   bg='dark'>
                    <SidebarMenu.Header>
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
