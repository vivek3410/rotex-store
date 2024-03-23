'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';

interface Props {

}

function Navbar(props: Props) {
    const pathname = usePathname();

    const routes = [
        {
            label: "Orders",
            href: '/account/orders',
            active: pathname === '/account/orders'
        },
        {
            label: "Addresses",
            href: '/account/edit-address',
            route: [
                {
                    label: "Billing Address",
                    href: '/account/edit-address',
                },
                {
                    label: "Shipping Address",
                    href: '/account/edit-address',
                }
            ],
            active: pathname === '/account/edit-address'
        }, {
            label: "Account Details",
            href: '/account/edit-account',
            active: pathname === '/account/edit-account'
        }
    ]

    const route = routes && routes.find(route => route.active)

    if (!route || !route.route) return (
        <div className='flex border-b-[2px] border-slate-300 px-4 py-2 gap-2'>
            <div className='flex items-center'>
                <Link href={'/'} className='flex items-center gap-2'>
                    <span className='hover:underline'>Home</span>
                    <BiChevronRight size={20} />
                </Link>
            </div>
            <div className='flex items-center  gap-2 '>
                <Link href={'/'} className='flex items-center gap-2'>
                    <span className='hover:underline'>My Account</span>
                </Link>
            </div>
        </div>
    )
    const links = [
        {
            label: 'Home',
            href: '/',

        },
        {
            label: 'My Account',
            href: '/account',
        },
        {
            label: route?.label,
            href: route.href,
        }
    ]
    return (
        <div className='flex items-center px-4 py-2 border-b-[2px] gap-2 border-slate-300'>
            {links.map((link, index) => (
                <>
                    <Link href={link.href} key={index} className='flex items-center gap-2'>
                        <span className='hover:underline'>{link.label}</span>
                        {index !== links.length - 1 ? <BiChevronRight size={20} /> : ''}
                    </Link>

                </>


            ))}
        </div>
    );
}

export default Navbar;

