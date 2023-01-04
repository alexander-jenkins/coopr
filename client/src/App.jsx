import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './pages/Account';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { AuthContextProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import Error from './pages/Error';
import Results from './pages/Results'
import Admin from './pages/Admin';
import {QueryClient, QueryClientProvider} from 'react-query';

// query
const queryClient = new QueryClient();

export default function App() {
    return (
        <div>
            <QueryClientProvider client={queryClient}>

            <AuthContextProvider>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    {/*<Route path='/admin' element={<Admin />} />*/}
                    <Route path='/error' element={<Error />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route
                        path='/account'
                        element={<ProtectedRoute children={<Account />} />}
                    />
                    <Route
                        path='/home'
                        element={<ProtectedRoute children={<LandingPage />} />}
                    />
                    <Route
                        path= '/result'
                        element={<ProtectedRoute children={<Results />} />}
                    />
                    <Route
                        path='/project'
                        element={<ProtectedRoute children={<ProjectPage />} />}
                    />
                </Routes>

            </AuthContextProvider>
            </QueryClientProvider>
        </div>
    );
}
