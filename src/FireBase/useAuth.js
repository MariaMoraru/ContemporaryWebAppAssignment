import {useState} from 'react';
import config from "../FireBase/FireBaseConfig"
import {getAuth, 
    signOut, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

function useAuth() {
    const [isAuth, setAuth] =useState(false);
    const auth = getAuth();

    const register = (email, password) =>
    {
        createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) =>
    {
        signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () =>
    {
        signOut(auth);
    }

    return {register, login, logout}
}   
export default useAuth
