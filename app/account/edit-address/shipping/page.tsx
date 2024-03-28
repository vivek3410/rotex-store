'use client'
import React, { useState } from 'react';
import AddressForm from '../components/AddressForm';
import { Address } from '@/types';
import toast from 'react-hot-toast';
import axios from 'axios';
import withAuth from '@/hooks/withAuth';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';



function Page() {
    const router = useRouter()
    const [form, setForm] = useState<Address>({
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        pincode: "",
        StreetAddress: "",
        Country: "",
        userId: "",
    })

    const [isSaved, setIsSaved] = useState(false)
    const [loading, setLoading] = useState(false)
    const onSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        try {
            // console.log(form);
            const res = await axios.post('/api/account/shipping', form)
            console.log(res.statusText);
            if (res.status === 200) {
                setIsSaved(true)
            }
            toast.success("saved")
            router.back()

        } catch (e) {
            toast.error("something went wrong shipping")
            console.log(e);
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <AddressForm title='Shipping' form={form} setForm={setForm} onSubmit={onSubmit} isSaved={isSaved} loading={loading} />
    );
}

export default withAuth(Page);

