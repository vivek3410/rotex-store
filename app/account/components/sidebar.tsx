'use client'
import { doSignOut } from '@/firebase/auth';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { BiHomeAlt, BiHomeCircle, BiUser } from 'react-icons/bi';
import { CiShoppingBasket } from 'react-icons/ci';
import { GrDashboard, GrOrderedList } from 'react-icons/gr';



function AccountSidebar() {
    const pathname = usePathname();
    const router = useRouter()

    const routes = [
        {
            label: "Dashboard",
            href: '/account',
            icon: <GrDashboard size={20} />,
            active: pathname === '/account'
        },
        {
            label: "Orders",
            href: '/account/orders',
            icon: <CiShoppingBasket size={20} />,
            active: pathname === '/account/orders'
        },
        {
            label: "Addresses",
            href: '/account/edit-address',
            icon: <BiHomeAlt size={20} />,
            active: pathname === '/account/edit-address'
        }, {
            label: "Account Details",
            href: '/account/edit-account',
            icon: <BiUser size={20} />,
            active: pathname === '/account/edit-account'
        },
    ]

    return (
        <div className='py-24 px-8'>
            {routes.map((route, index) => (
                <div key={index} className=' flex flex-col items-center border-t-[1px] border-slate-300 '>
                    <Link href={route.href} className={`w-full flex items-center justify-between py-2 ${route.active ? 'font-bold' : ''}`} >
                        {route.label}
                        {route.icon ? route.icon : ''}
                    </Link>

                </div>
            ))}
            <div className='border-t-[1px] border-slate-300 cursor-pointer' onClick={() => doSignOut().then(() => { router.push('/login'); toast.success("Logged Out") })}>Customer Logout</div>
        </div >
    );
}

export default AccountSidebar;

