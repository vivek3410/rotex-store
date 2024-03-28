'use client'
import { Button, FloatingInput } from "@/components";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { doSignInWithUserAndPassword } from '@/firebase/auth';
import { useAuth } from "@/hooks/useAuth";

export default function Page() {
    const router = useRouter();
    const pathname = usePathname();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [error, setError] = useState('')
    const { isUserLoggedIn } = useAuth()

    if (isUserLoggedIn) {
        return router.push('/account')
    }


    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setIsSigningIn(true)
            if (email === '' || password === '') {
                setError('Please fill all the fields')
                return
            }
            if (!isSigningIn) {
                const user = await doSignInWithUserAndPassword(email, password)
                router.push('/account')
            }
            setIsSigningIn(false)
        } catch (e) {
            // toast.error("something went wrong login")
            setError("invalid Credentials")
        } finally {
            setIsSigningIn(false)
        }

    }

    return (
        <div className='bg-slate-600 py-8 px-2 md:mx-auto text-center'>
            <div className='flex flex-col justify-center items-center gap-2 mb-8'>
                <div className=' text-slate-400 flex gap-2 justify-center'>
                    <span className='border-r-[2px] border-slate-500 pr-2'>Home</span>

                    <span>My Account</span>
                </div>
                <div className='text-white text-xl md:text-4xl'>LOGIN</div>
            </div>

            <div className='flex flex-col mx-auto items-center bg-white min-h-[300px] max-w-[600px] px-8 md:px-16 py-8 rounded-3xl z-30 shadow-xl gap-4'>
                {error && (<div className='text-red-500 w-full text-start rounded-xl'>{error}</div>)}
                <div className='w-full flex flex-col gap-8'>
                    <FloatingInput label='Email' name="email" custom="rounded-xl" onChange={(e) => setEmail(e.target.value)} />
                    <div className='flex flex-col text-start gap-1 '>
                        <FloatingInput label='Password' name="password" custom="rounded-xl" onChange={(e) => setPassword(e.target.value)} />
                        <div className='hover:underline hover:text-teal-600 cursor-pointer' onClick={() => router.push('/forgot-password')}>Forgot your password?</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Button label={isSigningIn ? 'signing...' : 'signIn'} onClick={(e) => onSubmit(e)} type="submit" custom={isSigningIn ? 'cursor-not-allowed opacity-50' : ''} />
                        <div className='hover:underline hover:text-teal-600 cursor-pointer' onClick={() => router.push('/signup')}>Create Account</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
