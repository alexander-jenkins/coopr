import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import {
    Alert,
    Button,
    Col,
    Container,
    Form,
    Row,
    Stack,
} from 'react-bootstrap';
import background from '../images/RockyMountainCastle.png';
import AuthCard from './AuthCard';
import { auth } from '../../firebase';

function SignIn() {
    const { signIn } = UserAuth();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    // handle sign in
    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        try {
            await signIn(email.current.value, password.current.value);
            navigate('/app');
        } catch (err) {
            setError(err.message);
        }
    }

    // a signed-in user should not be able to access the sign-up page!
    function checkAuth() {
        if (auth.currentUser) navigate('/app');
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
                                    <h2 className='text-center'>Sign in</h2>

                                    <Form onSubmit={handleSubmit}>
                                        <Stack gap={2}>
                                            <Form.Group controlId='email'>
                                                <Form.Label>
                                                    <h5>Email Address:</h5>
                                                </Form.Label>
                                                <Form.Control
                                                    type='email'
                                                    placeholder='Email'
                                                    required
                                                    ref={email}
                                                />
                                            </Form.Group>
                                            <Form.Group controlId='password'>
                                                <Form.Label>
                                                    <h5>Password:</h5>
                                                </Form.Label>
                                                <Form.Control
                                                    type='password'
                                                    placeholder='Password'
                                                    required
                                                    ref={password}
                                                />
                                            </Form.Group>
                                            <Button
                                                align='center'
                                                variant='primary'
                                                type='submit'
                                                style={{
                                                    backgroundColor: '#7749F8',
                                                    border: '#7749F8',
                                                }}
                                            >
                                                Sign In
                                            </Button>
                                            {error && <Alert>{error}</Alert>}
                                            <Link
                                                style={{ color: '#7749F8' }}
                                                to='/signup'
                                            >
                                                Sign up
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

export default SignIn;
