import { useEffect, useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
    let location = useLocation();
    let [error, setError] = useState(
        'An unknown error has occurred, please try again.'
    );
    let [redirect, setRedirect] = useState('/home');
    let [label, setLabel] = useState('Return to home.');

    useEffect(() => {
        if (!!location.state.error) setError(location.state.error);
        if (!!location.state.redirect) setRedirect(location.state.redirect);
        if (!!location.state.button) setLabel(location.state.button);
    }, []); // eslint-disable-line

    return (
        <Container>
            <h1>Whoops! Something went wrong.</h1>
            <Alert children={error} />
            <Button
                variant='primary'
                onClick={() => navigate(redirect)}
                children={label}
            />
        </Container>
    );
}

export default Error;
