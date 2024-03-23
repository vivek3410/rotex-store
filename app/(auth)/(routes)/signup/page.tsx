'use client'
import { Button, FloatingInput } from '@/components';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
    const router = useRouter()
    const handleSignup = () => {
        console.log('Sign up');
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
                <div className='w-full flex flex-col gap-8'>
                    <FloatingInput label='First Name' />
                    <FloatingInput label='Last Name' />
                    <FloatingInput label='Last Name' />
                    <FloatingInput label='Email' />
                    <FloatingInput label='Password' />
                </div>
                <div className='w-full flex flex-col gap-2 text-start'>
                    <Button label='Create Account' onClick={handleSignup} custom='bg-slate-600' />
                    <div className="text-sm">Have an Account? <span className='hover:text-teal-600 hover:underline cursor-pointer' onClick={() => router.push('/login')}>Login.</span> </div>
                </div>
            </div>
        </div>
    );
}
