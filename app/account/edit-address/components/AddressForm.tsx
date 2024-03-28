'use client'
import { Button, FloatingInput, FloatingTextArea } from '@/components';
import { useAuth } from '@/hooks/useAuth';
import { Address } from '@/types';
import React, { useEffect, useState } from 'react';

interface Props {
    form: Address
    setForm: (form: Address) => void
    title: string
    onSubmit: (e: any) => void
    isSaved: boolean
    loading: boolean
    address?: Address

}

function AddressForm(props: Props) {
    const { form, setForm, title, onSubmit, isSaved, loading, address } = props
    const { userId } = useAuth()
    const [newForm, setNewForm] = useState<Address>({
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        pincode: "",
        StreetAddress: "",
        Country: "",
        userId: "",
    })
    // console.log(form.pincode);
    useEffect(() => {
        updatedForm('userId', userId)
    }, [])

    const updatedForm = (fieldName: keyof typeof form, value: string) => {
        setNewForm((prev: any) => (
            { ...prev, [fieldName]: value }
        ))
        setForm(newForm)
    }


    return (
        <div className='flex flex-col gap-4 px-4'>
            <div className='text-4xl border-b-[1px] border-slate-400 pb-2 '>{title} Address</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>First Name:</label>
                    <FloatingInput label='First Name' custom='rounded-xl' name='FirstName' value={address?.firstName} onChange={(e) => updatedForm('firstName', e.target.value)} />
                </div>
                <div className='flex gap-4 items-center justify-between '>
                    <label htmlFor="" className='text-sm font-bold'>Last Name:</label>
                    <FloatingInput label='Last Name' custom='rounded-xl ' name='LastName' value={address?.lastName} onChange={(e) => updatedForm('lastName', e.target.value)} />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>Company Name(optional):</label>
                    <FloatingInput label='Company Name' custom='rounded-xl ' name='CompanyName' value={address?.companyName} onChange={(e) => updatedForm('companyName', e.target.value)} />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>Country or Region*:</label>
                    <FloatingInput label='Company Name' custom='rounded-xl ' name='Country' value={address?.Country} onChange={(e) => updatedForm('Country', e.target.value)} />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>Street Address*:</label>
                    <FloatingTextArea label='Address line-1' custom='rounded-xl w-[280px]' name='StreetAddress' value={address?.StreetAddress} onChange={(e) => updatedForm('StreetAddress', e.target.value)} />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>Town / City*:</label>
                    <FloatingInput label='Town / City' custom='rounded-xl ' name='Town' value={address?.city} onChange={(e) => updatedForm('city', e.target.value)} />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>State*:</label>
                    <FloatingInput label='State' custom='rounded-xl ' name='State' value={address?.state} onChange={(e) => updatedForm('state', e.target.value)} />
                </div>
                <div className='flex gap-4 items-center justify-between w-full'>
                    <label htmlFor="" className='text-sm font-bold'>Pincode*:</label>
                    <FloatingInput label='Pincode' custom='rounded-xl ' name='Pincode' value={address?.pincode} onChange={(e) => updatedForm('pincode', e.target.value)} />
                </div>
            </div>
            <Button label={isSaved ? 'saved' : 'Save'} custom={`rounded-full max-w-full md:max-w-[20%] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} outline onClick={(e) => onSubmit(e)} />
        </div>
    );
}

export default AddressForm;

