'use client'
import { FloatingInput } from '@/components';
import React from 'react';


function Page() {
    return (
        <div className='flex flex-col py-4 gap-4 md:gap-12'>
            <div className='flex items-center justify-center text-4xl'>Account Details</div>
            <div className='flex flex-col px-4 md:px-12 justify-start gap-4'>
                <div className='grid grid-cols-2 gap-4 items-center'>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-slate-900 font-bold'>First Name*</label>
                        <FloatingInput label='First name' name='FirstName' custom='rounded-xl' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-slate-900 font-bold'>Last Name*</label>
                        <FloatingInput label='Last name' name='LastName' custom='rounded-xl' />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="" className='text-slate-900 font-bold'>Email Address*</label>
                    <FloatingInput label='Email Address' name='Email' value='Email' custom='rounded-xl' />
                </div>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="" className='text-slate-900 font-bold'>Phone Number*</label>
                    <FloatingInput label='Phone Number' name='Phone' value='Phone' custom='rounded-xl' />
                </div>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="" className='text-slate-900 font-bold'>Display Name*</label>
                    <div className="flex flex-col gap-1">
                        <FloatingInput label='Display Name' name='username' value='vivek' custom='rounded-xl' />
                        <span className='text-sm'>This will be how your name will be displayed in the account section and in reviews</span>
                    </div>
                </div>
            </div>
            <div className='px-4'>
                <div className='text-3xl text-slate-600 border-b-[1px] border-slate-500 py-2'>Password Change</div>
                <div className='flex flex-col gap-4 mt-4 px-4 md:px-12'>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-slate-900 font-bold'>Current password *</label>
                        <div className="flex flex-col gap-1">
                            <FloatingInput label='Current password ' name='CurrentPassword' custom='rounded-xl' />
                            <span className='text-sm'>This will be how your name will be displayed in the account section and in reviews</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-slate-900 font-bold'>New password*</label>
                        <div className="flex flex-col gap-1">
                            <FloatingInput label='New password' name='NewPassword' custom='rounded-xl' />

                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-slate-900 font-bold'>Confirm new password*</label>
                        <div className="flex flex-col gap-1">
                            <FloatingInput label='Confirm new password' name='ConfirmPassword' custom='rounded-xl' />

                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="" className='text-slate-900 font-bold'>GSTIN Number*</label>
                        <div className="flex flex-col gap-1">
                            <FloatingInput label='GSTIN Number' name='GSTINNumber' custom='rounded-xl' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;

