import React from 'react';
import { Container } from 'react-bootstrap';
import { UserAuth } from '../contexts/AuthContext';

export default function Account() {
    const { user } = UserAuth();
    return (
        <Container fluid>
            <p>
                <strong>Account</strong>
                <br />
                <strong>ID:</strong> {user && user.uid}
                <br />
                <strong>Email:</strong> {user && user.email}
                <br />
                <strong>Display:</strong> {(user && user.displayName) || 'null'}
            </p>
        </Container>
    );
}
