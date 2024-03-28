'use client'
import React, { useEffect, useState } from 'react';
import AddressForm from '../../components/AddressForm';
import { Address } from '@/types';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function Page({ params }: { params: { shippingId: string } }) {
    const router = useRouter()
    const { userId } = useAuth()
    const [address, setAddress] = useState<Address>({
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        pincode: "",
        StreetAddress: "",
        country: "",
        userId: "",
    })
    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const res = await axios.get(`/api/account/shipping/${params.shippingId}`, {
                    headers: {
                        'userId': userId
                    }
                })
                setAddress(res.data)
            } catch (e) {
                console.log(e);
            }
        }
        fetchAddress();
    }, [])
    const [form, setForm] = useState<Address>({
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        pincode: "",
        StreetAddress: "",
        country: "",
        userId: "",
    })
    const [isEdited, setIsEdited] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e: any) => {
        try {
            const res = await axios.patch(`/api/account/shipping/${params.shippingId}`, form)
            if (res.status === 200) {
                setIsEdited(true)
            }
            toast.success("saved")
            router.push('/account/edit-address')
        } catch (e) {
            toast.error("something went wrong editshipping")
            console.log(e);
        }
    }
    return (
        <AddressForm title='Edit' form={form} setForm={setForm} onSubmit={onSubmit} isSaved={isEdited} loading={loading} />

    );
}
