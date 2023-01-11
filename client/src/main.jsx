import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/AuthPages/SignIn';
import SignUp from './components/AuthPages/SignUp';
import LandingPage from './pages/LandingPage';
import Account from './pages/Account';
import { AuthContextProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProjectPage from './pages/ProjectPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    {
        path: '/app',
        element: <App />,
        children: [
            {
                path: '',
                element: <LandingPage />,
            },
            {
                path: 'projects',
                element: <ProjectPage />,
            },
        ],
    },
    {
        path: '/account',
        element: <App />,
        children: [
            {
                path: '',
                element: <Account />,
            },
        ],
    },
]);
const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <RouterProvider router={router} />
            </AuthContextProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
