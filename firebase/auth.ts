
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebaseConfig"
import axios from "axios"
import { user } from "@/types"

export const doCreateUserWithEmailAndPassword = async (form: user) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, form.email, form.password)
        return res
    } catch (e) {
        console.log(e);
    }
}

export const doSignInWithUserAndPassword = async (email: string, password: string) => {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user

}

export const doSignOut = () => {
    localStorage.removeItem('user')
    return auth.signOut()
}

export const doSendForgotPasswordEmail = async (email: string) => {
    const res = sendPasswordResetEmail(auth, email)
    return res
}

