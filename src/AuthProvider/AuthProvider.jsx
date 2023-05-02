import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)


        })
        return () => { unsubscribe() }
    }, [])


    const userName = (name,img) => {

        return  updateProfile(auth.currentUser, {
                displayName: name, photoURL: img
            })
            .then(() => setUser((user)=>({...user,displayName: name, photoURL: img})))
            .catch((error) => {console.log(error)});
        }



    const authInfo = {
        user,
        loginAccount,
        createAccount,
        logOut,
        userName


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;