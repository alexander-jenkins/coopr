import React, {useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Button,
    Col,
    Container,
    Form,
    Row,
    Stack,
    Alert,
} from 'react-bootstrap';
import { UserAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';
import background from '../images/WoodsCastle.png';
import AuthCard from '../components/AuthCard';

function SignUp() {
    const email = React.useRef();
    const displayName = useRef();
    const password = React.useRef();
    const passwordConfirm = React.useRef();
    const navigate = useNavigate();
    const [error, setError] = React.useState('');
    const { createUser, setDisplayName } = UserAuth();

    // handle the signup form submission
    async function handleSubmit(e) {
        // stop the page from being reloaded due to the form submission
        e.preventDefault();

        // reset the error
        setError('');

        let invalidPassword = () => {
            return password.current.value !== passwordConfirm.current.value;
        };

        try {
            if (invalidPassword()) { // noinspection ExceptionCaughtLocallyJS
                throw new Error('Password Mismatch');
            }

            await createUser(email.current.value, password.current.value)
            setDisplayName(displayName.current.value)

            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    }

    // a signed-in user should not be able to access the sign-up page!
    function checkAuth() {
        if (auth.currentUser) {
            navigate('/error', {
                state: {
                    error: 'You already have an account!',
                    redirect: '/home',
                    button: 'Home',
                },
            });
        }
    }

    // run the checkAuth function on page load
    useEffect(() => {
        checkAuth();
    });

    return (
        <div
            className='overflow-hidden'
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
            }}
        >
            <Container span={3}>
                <Row>
                    <div style={{ height: '25vh' }}></div>
                </Row>

                <Row className='justify-content-md-center'>
                    <Col md='auto'>
                        <AuthCard>
                            <Row className='px-5'>
                                <Stack gap={4}>
                                    <br />
                                    <h2 className='text-center'>Sign Up</h2>
                                    <Form onSubmit={handleSubmit}>
                                        <Stack gap={3}>
                                            <Form.Group controlId='email'>
                                                <Form.Label>
                                                    <h5>Email Address:</h5>
                                                </Form.Label>
                                                <Form.Control
                                                    placeholder='Email'
                                                    type='email'
                                                    required
                                                    ref={email}
                                                />
                                            </Form.Group>
                                            <Form.Group controlId='displayname'>
                                                <Form.Label children={<h5>Display Name</h5>} />
                                                <Form.Control
                                                    placeholder='Keep it short and sweet'
                                                    type='text'
                                                    required
                                                    ref={displayName}
                                                />
                                            </Form.Group>
                                            <Form.Group controlId='password'>
                                                <Form.Label>
                                                    <h5>Password:</h5>
                                                </Form.Label>
                                                <Form.Control
                                                    placeholder='Password'
                                                    type='password'
                                                    required
                                                    ref={password}
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>
                                                    <h5>Verify password:</h5>
                                                </Form.Label>
                                                <Form.Control
                                                    type='password'
                                                    placeholder='Verify Password'
                                                    required
                                                    ref={passwordConfirm}
                                                />
                                            </Form.Group>
                                            <Button
                                                style={{
                                                    backgroundColor: '#7749F8',
                                                    border: '#7749F8',
                                                }}
                                                variant='primary'
                                                type='submit'
                                            >
                                                Sign Up
                                            </Button>
                                            {error && <Alert>{error}</Alert>}
                                            <Link
                                                style={{ color: '#7749F8' }}
                                                to='/'
                                            >
                                                Sign in
                                            </Link>
                                            <br />
                                        </Stack>
                                    </Form>
                                </Stack>
                            </Row>
                        </AuthCard>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignUp;
