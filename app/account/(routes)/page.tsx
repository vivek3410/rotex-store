'use client'
import { Loader } from '@/components';
import { doSignOut } from '@/firebase/auth';
import { useAuth } from '@/hooks/useAuth';
import withAuth from '@/hooks/withAuth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


function Page() {
    const router = useRouter()
    const handleLogout = () => {
        doSignOut().then(() => {
            router.push('/login')
            toast.success("Logged out successfully")
        })
    }
    const { currentUser } = useAuth();


    return (
        <div className='flex flex-col py-4 gap-8 mx-4 md:mx-0'>

            <div className='flex items-center justify-center text-4xl'>My Account</div>
            <div className='flex flex-col justify-start gap-4'>
                {currentUser && (
                    <div className=" text-green-500 text-left">Logged in successfully</div>
                )}
                <div className='text-sm'>Hello <span className="font-bold">{currentUser.email}</span> (not <span className='font-bold'>{currentUser.email.split('@gmail.com')}</span>? <span className='hover:underline cursor-pointer' onClick={handleLogout}>Log out</span> )</div>
                <div className='text-sm'>
                    From your account dashboard you can view your <span className="text-teal-600 hover:underline cursor-pointer" onClick={() => router.push('/orders')}>
                        recent orders
                    </span>,manage your <span className="text-teal-600 hover:underline cursor-pointer" onClick={() => router.push('/account/edit-address')}>
                        shipping and billing addresses
                    </span> , and <span className="text-teal-600 hover:underline cursor-pointer" onClick={() => router.push('/account/edit-account')}>edit your password and account details.</span></div>
            </div>
        </div>
    );
}

export default Page;

