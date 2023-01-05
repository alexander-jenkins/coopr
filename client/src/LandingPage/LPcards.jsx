import { Card, Row, Col } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddContributorButton from './AddContributorButton';

function LPcards(props) {
    const navigate = useNavigate();
    
    return (
        <div className='shadow p-0 mb-5 bg-light rounded'>
            {' '}
            <Card>
                <Card.Header style={{ border: 'none' }}>
                        <Row md='auto' className='align-items-center'>
                            <Col>
                                <Card.Title>{props.title}</Card.Title>
                                </Col>
                                <Col>
                                <AddContributorButton name = {props.title} />
                                </Col>
                        </Row>
                </Card.Header>
                <Card.Body onClick={() => navigate('/project')}>
                    <Card.Text> {props.description} </Card.Text>
                </Card.Body>
            </Card>

            
        </div>
    );
}

export default LPcards;
