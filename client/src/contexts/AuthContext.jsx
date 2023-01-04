// import react and components
import { createContext, useContext, useEffect, useState } from 'react';

// required firebase functions
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile
} from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    // sign up a new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // set name
    const setDisplayName = (name) => {
        return updateProfile(auth.currentUser, {displayName: name})
    }

    // sign in a user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // allow the user to log out
    const logout = () => {
        return signOut(auth);
    };

    // change the value of current user when the state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user, createUser, setDisplayName, signIn, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};
