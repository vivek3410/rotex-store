'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsExclamationTriangle } from 'react-icons/bs';



function Page() {
    const router = useRouter()
    return (
        <div className='flex flex-col px-4 md:px-12 justify-start gap-2'>
            <div className='flex flex-col gap-4'>
                <div>The following addresses will be used on the checkout page by default.</div>
                <div className='grid grid-cols-1  md:grid-cols-2 gap-16 md:gap-8'>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='flex items-center justify-between py-2 border-b-[1px] border-slate-400'>
                            <div className='text-2xl'>Billing Address</div>
                            <div className='hover:underline cursor-pointer' onClick={() => router.push('/account/edit-address/billing')}>Add</div>
                        </div>
                        <div className='text-sm'>
                            You have not set up this type of address yet.
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='flex items-center justify-between py-2 border-b-[1px] border-slate-400'>
                            <div className='text-2xl'>Shipping Address</div>
                            <div className='hover:underline cursor-pointer' onClick={() => router.push('/account/edit-address/shipping/')}>Add</div>
                        </div>
                        <div className='text-sm'>
                            You have not set up this type of address yet.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;

