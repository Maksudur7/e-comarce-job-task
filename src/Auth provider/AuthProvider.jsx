import { createContext, useEffect, useState } from "react";
import app from "./Firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContex = createContext()

const AuthProvider = ({ children }) => {
    const Auth = getAuth(app)
    const [loing, setLoding] = useState(true)
    const [users, setusers] = useState([])

    const Regester = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const Login = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const Googleprovider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        setLoding(true)
        return signInWithPopup(Auth, Googleprovider);
    }

    const updatePhoto = (name, Url) => {
        // setLoding(true)
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: Url
        })
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(Auth, user => {
            console.log(user)
            setusers(user)
            if (user) {
                fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({

                        username: 'kminchelle',
                        password: '0lelplR',
                        // expiresInMins: 60, // optional
                    })
                })
                    .then(res => res.json())
                    .then(console.log);
            }


            setLoding(false)
        })
        return () => {
            setLoding(true)
            unSubscribe()
        }
    }, [Auth])

    const logout = () => {
        setLoding(true)
        return signOut(Auth)
    }

    const authinfo = {
        Regester,
        Login,
        GoogleLogin,
        loing,
        users,
        updatePhoto,
        logout
    }
    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;