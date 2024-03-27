'use client'
import { auth } from "@/firebase/firebaseConfig";
import { user } from "@/types";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface AuthContextType {
    loading: boolean
    currentUser: any
    isUserLoggedIn: boolean
    userId: any
    userDetails: user | null
}
export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState<any | null>(null)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [userId, setUserId] = useState(null)
    const [userDetails, setUserDetails] = useState<user | null>(null)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(initializeUser);
        return unsubscribe
    }, [])

    async function initializeUser(user: any) {
        setLoading(true)
        if (user) {
            setCurrentUser({ ...user })
            setIsUserLoggedIn(true)
            localStorage.setItem('user', JSON.stringify(user))
            setUserId(user.uid)
        } else {
            setCurrentUser(null)
            setIsUserLoggedIn(false)
            setUserId(null)
        }
        setLoading(false)
    }

    // useEffect(() => {
    //     const userData: any = localStorage.getItem('user')
    //     const user = JSON.parse(userData);
    //     // console.log(user);
    //     if (user) {
    //         setIsUserLoggedIn(true)
    //         // console.log(user.uid);
    //         setUserId(user)
    //     }
    // }, [])

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                if (userId) {
                    const res = await axios.get('/api/getUser', {
                        headers: {
                            'userId': userId
                        }
                    })
                    setUserDetails(res.data)
                }
            } catch (e) {
                console.log(e);
                // toast.error("some thing went wrong")
            }
        }
        if (userId) {
            fetchUserDetails()
        }
    }, [userId])


    const value = {
        loading,
        currentUser,
        isUserLoggedIn,
        userId,
        userDetails
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used in a AuthProvider')
    return context
}