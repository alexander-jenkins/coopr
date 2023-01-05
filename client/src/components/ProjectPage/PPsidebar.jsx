import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import CreateTicket from './CreateTicket';

function PPsidebar() {
    return (
        <div>
            <SidebarMenu bg='dark' fixed='left' style={{ height: '100vh' }}>
                <SidebarMenu.Body>
                    <Container>
                        <Stack gap={4}>
                            <br />
                            <div className='text-center'>
                                <CreateTicket />
                            </div>
                            <div>
                                <br />
                                <SidebarMenu.Nav.Title>
                                    <h5 className='text-light'>Filter</h5>
                                </SidebarMenu.Nav.Title>
                                <br />
                                <Container>
                                    <Stack gap={3}>
                                        <div>
                                            <SidebarMenu.Nav.Title className='text-light'>
                                                All Tickets
                                            </SidebarMenu.Nav.Title>
                                        </div>
                                        <div>
                                            <SidebarMenu.Nav.Title className='text-light'>
                                                Priority
                                            </SidebarMenu.Nav.Title>
                                        </div>
                                        <div>
                                            <SidebarMenu.Nav.Title className='text-light'>
                                                Favorited
                                            </SidebarMenu.Nav.Title>
                                        </div>
                                    </Stack>
                                </Container>
                                <br />
                                <SidebarMenu.Nav.Title>
                                    <h5 className='text-light'>Status</h5>
                                </SidebarMenu.Nav.Title>
                                <br />
                                <Container>
                                    <Stack gap={3}>
                                        <div>
                                            <SidebarMenu.Nav.Title className='text-light'>
                                                New
                                            </SidebarMenu.Nav.Title>
                                        </div>
                                        <div>
                                            <SidebarMenu.Nav.Title className='text-light'>
                                                Opened
                                            </SidebarMenu.Nav.Title>
                                        </div>
                                        <div>
                                            <SidebarMenu.Nav.Title className='text-light'>
                                                Solved
                                            </SidebarMenu.Nav.Title>
                                        </div>
                                        <div>
                                            <SidebarMenu.Nav.Title className='text-light'>
                                                Closed
                                            </SidebarMenu.Nav.Title>
                                        </div>
                                    </Stack>
                                </Container>
                            </div>
                        </Stack>
                    </Container>
                </SidebarMenu.Body>
            </SidebarMenu>
        </div>
    );
}

export default PPsidebar;
