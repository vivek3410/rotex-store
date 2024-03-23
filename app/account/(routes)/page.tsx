'use client'
import React from 'react';

interface Props {

}

function Page(props: Props) {
    const handleLogout = () => {
        console.log('Logout');
    }
    return (
        <div className='flex flex-col py-4 gap-8 mx-4 md:mx-0'>
            <div className='flex items-center justify-center text-4xl'>My Account</div>
            <div className='flex flex-col justify-start gap-4'>
                <div className='text-sm'>Hello <span className="font-bold">mamidivivek3410</span> (not <span className='font-bold'>mamidivivek3410</span>? <span className='hover:underline cursor-pointer' onClick={handleLogout}>Log out</span> )</div>
                <div className='text-sm'>
                    From your account dashboard you can view your <span className="text-teal-600 hover:underline cursor-pointer">
                        recent orders
                    </span>,manage your <span className="text-teal-600 hover:underline cursor-pointer">
                        shipping and billing addresses
                    </span> , and <span className="text-teal-600 hover:underline cursor-pointer">edit your password and account details.</span></div>
            </div>
        </div>
    );
}

export default Page;

