'use client'
import { Button, FloatingInput, FloatingTextArea } from '@/components';
import React from 'react';

interface Props {
    title: string;

}

function AddressForm(props: Props) {
    const { title } = props
    return (
        <div className='flex flex-col gap-4 px-4'>
            <div className='text-4xl border-b-[1px] border-slate-400 pb-2 '>{title} Address</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>First Name:</label>
                    <FloatingInput label='First Name' custom='rounded-xl' name='FirstName' />
                </div>
                <div className='flex gap-4 items-center justify-between '>
                    <label htmlFor="" className='text-sm font-bold'>Last Name:</label>
                    <FloatingInput label='Last Name' custom='rounded-xl ' name='LastName' />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>Company Name(optional):</label>
                    <FloatingInput label='Company Name' custom='rounded-xl ' name='CompanyName' />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>Country or Region*:</label>
                    <FloatingInput label='Company Name' custom='rounded-xl ' name='Country' />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>Street Address*:</label>
                    <FloatingTextArea label='Address line-1' custom='rounded-xl w-[280px]' name='StreetAddress' />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>Town / City*:</label>
                    <FloatingInput label='Town / City' custom='rounded-xl ' name='Town' />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>State*:</label>
                    <FloatingInput label='State' custom='rounded-xl ' name='State' />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>Pincode*:</label>
                    <FloatingInput label='Pincode' custom='rounded-xl ' name='Pincode' />
                </div>
            </div>
            <Button label='Save Address' custom='rounded-full max-w-full md:max-w-[20%]' outline onClick={() => { }} />
        </div>
    );
}

export default AddressForm;

