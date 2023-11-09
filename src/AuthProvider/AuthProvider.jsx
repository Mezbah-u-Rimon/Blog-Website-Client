import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxios from "../hooks/useAxios";

// auth context
export const AuthContext = createContext();
//google provider
const googleProvider = new GoogleAuthProvider();
//github provider
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxios()

    //google provider
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    //github provider
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    //create new  user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //Login with form
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //logout user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //update profile
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    // Auth change observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }

            setUser(currentUser);
            setLoading(false);

            //access token
            if (currentUser) {
                axiosSecure.post("/jwt", loggedUser,)
                    .then(res => {
                        console.log(res.data);
                    })
            }
            else {
                axiosSecure.post('/logout', loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
            }

        })

        return () => {
            unSubscribe();
        }
    }, [axiosSecure, user?.email])



    const value = {
        googleLogin,
        githubLogin,
        user,
        loading,
        createUser,
        signIn,
        logOut,
        profileUpdate,

    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;