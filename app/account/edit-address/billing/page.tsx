'use client'
import axios from "axios";
import AddressForm from "../components/AddressForm";
import { useState } from "react";
import { Address } from "@/types";
import toast from "react-hot-toast";



function Page() {
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
            const res = await axios.post('/api/account/billing', form)
            console.log(res.statusText);
            console.log(res.data);
            if (res.status === 200) {
                setIsSaved(true)
            }
            toast.success("saved")
        } catch (e) {
            toast.error("something went wrong billing")
            console.log(e);
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <AddressForm title='Billing' form={form} setForm={setForm} onSubmit={onSubmit} isSaved={isSaved} loading={loading} />

    );
}

export default Page;

