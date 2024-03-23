'use client'
import { Button, FloatingInput } from "@/components";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const handleLogin = () => {
        console.log('Login');
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

            <div className='flex flex-col mx-auto items-center bg-white min-h-[300px] max-w-[600px] px-8 md:px-16 py-8 rounded-3xl z-30 shadow-xl'>
                <div className='w-full flex flex-col gap-8'>
                    <FloatingInput label='Email' name="email" custom="rounded-xl"/>
                    <div className='flex flex-col text-start gap-1 '>
                        <FloatingInput label='Password' name="password" custom="rounded-xl" />
                        <div className='hover:underline hover:text-teal-600 cursor-pointer'>Forgot your password?</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Button label='Login' onClick={() => { }} custom='bg-slate-600' />
                        <div className='hover:underline hover:text-teal-600 cursor-pointer' onClick={() => router.push('/signup')}>Create Account</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
