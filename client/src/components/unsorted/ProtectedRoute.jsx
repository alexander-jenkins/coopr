import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth();
    const navigate = useNavigate();

    // if the user is not logged in, should bounce to error page and ask for auth
    function checkAuth() {
        if (!user) {
            navigate('/error', {
                state: {
                    error: 'You must log in before accessing this page!',
                    redirect: '/',
                    button: 'Login',
                },
            });
        }
    }

    // run the checkAuth function on page load
    useEffect(() => {
        checkAuth();
    });

    // continue render of intent page
    return children;
};

export default ProtectedRoute;
