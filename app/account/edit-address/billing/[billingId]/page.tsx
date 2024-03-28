'use client'
import axios from "axios";
import { useState } from "react";
import { Address } from "@/types";
import toast from "react-hot-toast";
import AddressForm from "../../components/AddressForm";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";



function Page({ params }: { params: { billingId: string } }) {
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
    const [isEdit, setIsEdit] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const onSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.patch(`/api/account/billing/${params.billingId}`, form)
            if (res.status === 200) {
                setIsEdit(true)
            }
            toast.success("saved")
            router.push('/account/edit-address')

        } catch (e) {
            toast.error("something went wrong billing")
            console.log(e);
        }
        finally {
            setLoading(false)
        }
    }

    
    return (
        <AddressForm title='Edit Billing' form={form} setForm={setForm} onSubmit={onSubmit} isSaved={isEdit} loading={loading} />

    );
}

export default Page;

