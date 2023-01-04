import { Col, Container, Row, Stack } from 'react-bootstrap';
import React from 'react';
import LPsidebar from '../components/LPsidebar';
import LPnavbar from '../components/LPnavbar';
import Searchbar from '../components/Searchbar';
import ProjectList from '../components/ProjectList';
import { UserAuth } from '../contexts/AuthContext';
import { useQuery } from 'react-query'

function Landing_Page() {
    const { user } = UserAuth();

    // projects
    const fetchProjects = async () => {
        let projects = await fetch("/api/project/userProjects" + `?owner=${user && user.email}`,{method: "GET"});
        return projects.json()
    }
    const { data, error, isLoading } = useQuery('projects', fetchProjects);

    if (error) return "error";
    if (isLoading) return "loading";
    console.log(data)
    return (
        <div className='overflow-hidden' style={{ backgroundColor: '#D9D9D9' }}>
            <Row>
                <Col
                    className='pe-0'
                    sm={{ span: 4 }}
                    md={{ span: 2 }}
                >
                    <LPsidebar />
                </Col>
                <Col sm={{ span: 8 }} md={{ span: 10, offset: 0 }}>
                    <Row>
                        <LPnavbar />
                    </Row>
                    <Container fluid>
                        <Stack gap={5}>
                            <Row className='align-items-center'>
                                <Col md={{ span: 4, offset: 0 }}>

                                    <h1>Hello, {user && user.displayName}</h1>
                                </Col>
                                <Col sm={{ span: 8 }} md={{ span: 3 }}>
                                    {' '}
                                    <Searchbar />{' '}
                                </Col>
                            </Row>
                            <Container fluid>
                            </Container>
                        </Stack>
                        <Stack gap={3}>
                            <div></div>
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <ProjectList projects={data} />
                                    </Col>
                                </Row>
                            </Container>
                        </Stack>
                    </Container>
                </Col>
            </Row>
        </div>
    );
}

export default Landing_Page;
