'use client'
import { Button, FloatingInput } from '@/components';
import { doSendForgotPasswordEmail } from '@/firebase/auth';
import React, { useState } from 'react';

function Page() {
    const [email, setEmail] = useState("")
    const [isSending, setIsSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState('')


    const handleForgotPassword = async (e: any) => {
        e.preventDefault()
        try {
            if (!isSending) {
                setIsSending(true)
                await doSendForgotPasswordEmail(email).then(() => {
                    setSent(true)
                })

            }

        } catch (e) {
            console.log(e);
            setError('email dosent Exist')
        }
        finally {
            setIsSending(false)
        }

    }
    return (
        <div className='bg-slate-600 py-8 px-2 md:mx-auto text-center'>

            <div className='flex flex-col justify-center items-center gap-2 mb-8'>
                <div className=' text-slate-400 flex gap-2 justify-center'>
                    <span className='border-r-[2px] border-slate-500 pr-2'>Home</span>

                    <span>RESET</span>
                </div>
                <div className='text-white text-xl md:text-4xl'>RESET PASSWORD</div>
            </div>

            <div className='flex flex-col mx-auto items-center gap-4 bg-white min-h-[300px] max-w-[600px] px-8 md:px-16 py-8 rounded-3xl z-30 shadow-xl'>
                {sent && (
                    <div className='bg-blue-100 border-blue-500 border-[2px] w-full p-2 text-left'>Email Sent successfully</div>
                )}
                {error && !sent && (
                    <div className='bg-red-100 border-red-500 border-[2px] w-full text-left px-2 py-2'>Enter valid email</div>
                )}

                <div className='w-full flex flex-col gap-8'>
                    <FloatingInput label='Email' name="email" custom="rounded-xl" onChange={(e) => setEmail(e.target.value)} />
                    <div className='flex flex-col gap-4'>
                        <Button label={isSending ? 'sending...' : 'send'} onClick={(e) => handleForgotPassword(e)} custom='bg-slate-600' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;

