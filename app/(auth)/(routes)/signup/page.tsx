'use client'
import { Button, FloatingInput } from '@/components';
import { doCreateUserWithEmailAndPassword } from '@/firebase/auth';
import { user } from '@/types';
import axios from 'axios';
import { update } from 'firebase/database';
import { useRouter } from 'next/navigation';
import React, { use, useState } from 'react';
import toast from 'react-hot-toast';


export default function Page() {
    const router = useRouter()
    const [form, setForm] = useState<user>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState("")


    const [isRegistering, setIsRegistering] = useState(false);
    // console.log(isRegistering);

    const updateForm = (fieldName: keyof typeof form, value: string) => {
        setForm((prev) => (
            { ...prev, [fieldName]: value }
        ))
    }
    // console.log(form);
    const onSubmit = async (e: any) => {
        try {
            if (!isRegistering) {
                setIsRegistering(true)
                if (form.password !== confirmPassword) {
                    return toast.success("password do not match")
                }
                const res = await doCreateUserWithEmailAndPassword(form)
                console.log(res?.prismaRes);
                if (!res?.prismaRes) {
                    setError("Email already exists")
                    return;
                }
                router.push('/login')
                toast.success("registered sucessfully");
            }
            setIsRegistering(false)
        } catch (e) {
            console.log(e);
        }
        finally {
            setIsRegistering(false)
        }

    }
    return (
        <div className='bg-slate-600 py-8 mx-auto text-center'>
            <div className='flex flex-col justify-center items-center gap-2 mb-8'>
                <div className=' text-slate-400 flex gap-2 justify-center'>
                    <span className='border-r-[2px] border-slate-500 pr-2'>Home</span>

                    <span>Create Account</span>
                </div>
                <div className='text-white text-xl md:text-4xl'>CREATE ACCOUNT</div>
            </div>

            <div className='flex flex-col mx-8 md:mx-auto items-center bg-white min-h-[300px] max-w-[600px] px-8 md:px-16 py-8 rounded-3xl z-30 shadow-xl gap-8'>
                {error && (
                    <div className='text-red-500 text-left '>{error}</div>
                )}
                <div className='w-full flex flex-col gap-8'>
                    <FloatingInput label='First Name' name='firstname' custom='rounded-xl' onChange={(e) => { updateForm('firstName', e.target.value) }} required />
                    <FloatingInput label='Last Name' name='lastname' custom='rounded-xl' onChange={(e) => updateForm('lastName', e.target.value)} required />
                    <FloatingInput label='Email' name='email' custom='rounded-xl' onChange={(e) => updateForm('email', e.target.value)} required />
                    <FloatingInput label='Password' name='password' custom='rounded-xl' onChange={(e) => updateForm('password', e.target.value)} required />
                    <FloatingInput label='Confirm Password' name='confirmpassword' custom='rounded-xl' onChange={(e) => setConfirmPassword(e.target.value)} required />

                </div>
                <div className='w-full flex flex-col gap-2 text-start'>
                    <Button label={isRegistering ? 'SigningUp...' : 'SignUp'} onClick={(e) => onSubmit(e)} custom={``} />
                    <div className="text-sm">Have an Account? <span className='hover:text-teal-600 hover:underline cursor-pointer' onClick={() => router.push('/login')}>Login.</span> </div>
                </div>
            </div>
        </div>
    );
}
