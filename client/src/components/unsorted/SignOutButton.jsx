//Button in the CooprNavbar dropdown
//Signs the user out and returns them to the Sign-in Page
import React from 'react';
import { Button } from 'react-bootstrap';
import { UserAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function SignOutButton() {
    const { logout } = UserAuth();
    const navigate = useNavigate();

    async function handleSignOut() {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

    return <Button onClick={handleSignOut}> Sign out </Button>;
}

export default SignOutButton;
