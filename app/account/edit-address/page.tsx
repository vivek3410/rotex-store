'use client'
import { AlertModal } from '@/components';
import { useAuth } from '@/hooks/useAuth';
import { Address } from '@/types';
import axios from 'axios';
import { headers } from 'next/headers';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { BsExclamationTriangle } from 'react-icons/bs';
import { FaDeleteLeft } from 'react-icons/fa6';
import { LuDelete } from 'react-icons/lu';



function Page() {
    const router = useRouter()
    const { userId } = useAuth()
    const [shippingAddress, setShippingAddress] = useState<Address[] | null>(null)
    const [billingAddress, setBillingAddress] = useState<Address[] | null>(null)

    const [error, setError] = useState<string | null>(null)
    // console.log(userId);
    useEffect(() => {
        const fetchShippingAddresses = async () => {
            try {
                const res = await axios.get('/api/account/shipping', {
                    headers: {
                        'userID': userId
                    }
                })
                // console.log(res.data);
                if (!res.data) {
                    setError('No addresses found')
                    return
                }
                setShippingAddress(res.data)
            } catch (e) {
                console.log(e);
            }
        }
        const fetchBillingAddress = async () => {
            try {
                const res = await axios.get(`/api/account/billing`, {
                    headers: {
                        'userId': userId
                    }
                })
                // console.log(res.data);
                if (!res.data) {
                    setError('No addresses found')
                    setBillingAddress(null)
                    return
                }
                setBillingAddress(res.data)

            } catch (e) {
                console.log(e);
            }
        }
        fetchShippingAddresses()
        fetchBillingAddress()
    }, [])

    const onDeleteBilling = async (id: string | undefined) => {
        try {
            await axios.delete(`/api/account/billing/${id}`, {
                headers: {
                    'userId': userId
                }
            })
            router.push('/account/edit-address')
            toast.success("deleted")
        } catch (e) {
            console.log(e);
            toast.error("some thing went wrong")
        }
    }

    const onDeleteShipping = async (id: string | undefined) => {
        try {
            await axios.delete(`/api/account/shipping/${id}`, {
                headers: {
                    'userId': userId
                }
            })
            window.location.reload()
            toast.success("deleted")
        } catch (e) {
            console.log(e);
            toast.error("some thing went wrong")
        }
    }
    return (
        <>

            <div className='flex flex-col px-4 md:px-12 justify-start gap-2'>
                <div className='flex flex-col gap-4'>
                    <div>The following addresses will be used on the checkout page by default.</div>
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-16 md:gap-8'>
                        <div className='w-full flex flex-col gap-2'>
                            <div className='flex items-center justify-between py-2 border-b-[1px] border-slate-400'>
                                <div className='text-2xl'>Billing Address</div>
                                <div className='hover:underline cursor-pointer' onClick={() => router.push('/account/edit-address/billing')}>Add</div>
                            </div>
                            {!billingAddress ? (
                                <div>You have not set up this type of address yet.</div>
                            ) : (
                                <div className='flex flex-col gap-4'>
                                    {billingAddress.map((address) => (
                                        <div key={address.id} className='flex justify-between border-b-[1px] border-slate-400 pb-2'>
                                            <div>
                                                {address.firstName} {address.lastName}
                                                <div>{address.StreetAddress}</div>
                                                <div>{address.city} {address.pincode}</div>
                                                <div>{address.state}</div>

                                            </div>
                                            <div>
                                                <Link href={`/account/edit-address/billing/${address.id}`}>
                                                    <BiEdit size={24} />
                                                </Link>
                                                <BiTrash size={24} onClick={() => onDeleteBilling(address.id)} className='cursor-pointer' />
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <div className='flex items-center justify-between py-2 border-b-[2px] border-slate-400'>
                                <div className='text-2xl'>Shipping Address</div>
                                <div className='hover:underline cursor-pointer' onClick={() => router.push('/account/edit-address/shipping/')}>Add</div>
                            </div>
                            <div className='text-sm'>
                                {!shippingAddress ? (
                                    <div>You have not set up this type of address yet.</div>
                                ) : (
                                    <div className='flex flex-col gap-4'>
                                        {shippingAddress.map((address) => (
                                            <div key={address.id} className='flex justify-between border-b-[1px] border-slate-400 pb-2'>
                                                <div>
                                                    {address.firstName} {address.lastName}
                                                    <div>{address.StreetAddress}</div>
                                                    <div>{address.city} {address.pincode}</div>
                                                    <div>{address.state}</div>

                                                </div>
                                                <div>
                                                    <Link href={`/account/edit-address/shipping/${address.id}`}>
                                                        <BiEdit size={24} />
                                                    </Link>
                                                    <BiTrash size={24} onClick={() => onDeleteShipping(address.id)} className='cursor-pointer' />
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;

