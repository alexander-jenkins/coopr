import React from 'react';
import LPcards from './LPcards';
import { Stack } from 'react-bootstrap';

function ProjectList(props) {
    //LandingPage -> ProjectList -> LPCards
    const projects = props.projects;
    return (
        <div>
            <Stack gap={2}>
                {projects &&
                    projects.map((project) => (
                        <LPcards title={project.title} description={project.description} key={project.__id} />
                    ))}
            </Stack>
        </div>
    );
}

export default ProjectList;
