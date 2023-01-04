import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { UserAuth } from '../contexts/AuthContext';
import AccountNavbar from '../components/AccountNavbar';
import AccountCard from '../components/AccountCard';

function Account() {
    const { user } = UserAuth();
    return (
        <>
            <div
                className='overflow-hidden'
                style={{ backgroundColor: '#D9D9D9', height: '100vh' }}
            >
                <Container fluid>
                        <Stack gap={3}>
                            <AccountNavbar />
                            <Container>
                                <AccountCard>
                                    <strong>Account</strong>
                                    <p>ID: {user && user.uid}</p>
                                    <p>Email: {user && user.email}</p>
                                    <p>Display: {(user && user.displayName) || 'null'}</p>
                                </AccountCard>
                            </Container>
                        </Stack>
                </Container>
            </div>
        </>
    );
}

export default Account;
