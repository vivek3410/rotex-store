'use client'
import Image from "next/image";
import { Container } from "@/components";
import Link from "next/link";
import { Toaster } from 'react-hot-toast';
import { BiChevronDown, BiPhone, BiSearch, BiShoppingBag, BiUserCircle, } from "react-icons/bi";
import Vertical from "../Vertical";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";
import { ShoppingCartIcon } from "../ShoppingCartIcon";


type NotificationStripProps = {
    closeButton: () => void;
    custom?: string;
}
const NotificationStrip = ({ closeButton, custom }: NotificationStripProps) => {
    return (
        <>
            <div className={`bg-slate-600 flex items-center justify-center py-1 text-sm text-teal-400 relative ${custom}`}>
                New Arrivals!
                <div className={`cursor-pointer absolute top-0 right-0 mr-4 mt-1 text-slate-900`} onClick={closeButton}><CgCloseO size={18} /></div>
            </div>

        </>
    )
}

const Accounts = () => {
    return (
        <div className="bg-slate-200 px-2 md:px-4 xl:px-20 flex flex-col md:flex-row gap-1 md:gap-4 md:justify-between py-2">
            <div className="flex items-center justify-between md:justify-normal gap-4">
                <div className="flex items-center gap-1 md:gap-2 text-sm">
                    <BiPhone />
                    <span className="text-sm">1800 266 6123</span>
                </div>
                <Vertical />
                <div className="text-sm">Customer Support</div>
            </div>
            <div className="flex flex-col md:flex-row  md:items-center text-sm gap-1 md:gap-2">
                <div className="flex items-center justify-between gap-2">
                    <div>
                        My Orders
                    </div>
                    <Vertical />
                    <div>Track your order</div>
                </div>
                <Vertical />
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center">
                        My Account
                        <BiChevronDown size={24} />
                    </div>
                    <Vertical />
                    <div className="flex items-center gap-4">
                        <div><FaFacebook /></div>
                        <div><BsTwitter /></div>
                        <div><BsInstagram /></div>
                        <div><BsYoutube /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Header = () => {
    const [showNotification, setShowNotification] = useState(true);
    const closeButton = () => {
        setShowNotification(!showNotification);
    }
    return (
        <div className=" w-full bg-slate-300 shadow-sm z-30 h-[250px] md:h-[190px]">
            <NotificationStrip closeButton={closeButton} custom={`${showNotification ? 'block' : 'hidden'}`} />
            <Accounts />
            <div className={`${showNotification ? ' py-4 md:py-[30px]' : 'py-4 md:py-[50px]'} flex items-center px-4  justify-between md:justify-between md:gap-0`}>
                <Link href={"/"}><Image src={"/images/rotex-logo.png"} alt="Rotex Logo" width={140} height={150} className="min-w-24 md:w-48" /></Link>
                <div className="hidden md:block w-full md:mx-12">
                    <div className="flex justify-around bg-white rounded-full px-4 py-2">
                        <input type="text" className="outline-none w-full" placeholder="Search Products" />
                        <BiSearch size={24} />
                    </div>
                </div>
                <div className="flex items-center gap-8 md:gap-2">
                    <ShoppingCartIcon />
                    <BiUserCircle size={34} />
                </div>
            </div>
            <div className="flex justify-around md:hidden bg-white mx-4 rounded-full px-4 py-1">
                <input type="text" className="outline-none w-full" placeholder="Search Products" />
                <BiSearch size={24} />
            </div>
        </div>
    );
}

export default Header;