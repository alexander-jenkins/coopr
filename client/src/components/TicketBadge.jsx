import React from 'react';
import { Badge } from 'react-bootstrap';

function ProjectPill(props) {
    const style = props.type;

    if (style === 'Open') {
        return (
            <Badge pill bg='primary'>
                Open
            </Badge>
        );
    } else if (style === 'Closed') {
        return (
            <Badge pill bg='secondary'>
                Closed
            </Badge>
        );
    } else if (style === 'Solved') {
        return (
            <Badge pill bg='dark'>
                Solved
            </Badge>
        );
    } else if (style === 'Minor') {
        return (
            <Badge pill bg='success'>
                Minor
            </Badge>
        );
    } else if (style === 'Medium') {
        return (
            <Badge pill bg='warning'>
                Medium
            </Badge>
        );
    } else if (style === 'Critical') {
        return (
            <Badge pill bg='danger'>
                Critical
            </Badge>
        );
    }
}

export default ProjectPill;
