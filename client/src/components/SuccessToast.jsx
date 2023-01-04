import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function SuccessToast() {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    return (
        <div>
            <Row>
                <Col md={6} className='mb-2'>
                    <Button variant='danger' onClick={toggleShow}>
                        Delete
                    </Button>
                    <Toast
                        onClose={() => setShow(false)}
                        show={show}
                        delay={3000}
                        autohide
                        position='bottom-start'
                    >
                        <Toast.Header>
                            <strong>Success</strong>
                        </Toast.Header>
                        <Toast.Body>Ticket Successfully Deleted</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    );
}

export default SuccessToast;
