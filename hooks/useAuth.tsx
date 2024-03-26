'use client'
import { auth } from "@/firebase/firebaseConfig";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    loading: boolean
    currentUser: any
    isUserLoggedIn: boolean
    userId: any
}
export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState<any | null>(null)
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [userId, setUserId] = useState(null)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(initializeUser);
        return unsubscribe
    }, [])

    async function initializeUser(user: any) {
        setLoading(true)
        if (user) {
            setCurrentUser({ ...user })
            setIsUserLoggedIn(true)
            setUserId(user.uid)
        } else {
            setCurrentUser(null)
            setIsUserLoggedIn(false)
            setUserId(null)
        }
        setLoading(false)
    }

    const value = {
        loading,
        currentUser,
        isUserLoggedIn,
        userId,
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