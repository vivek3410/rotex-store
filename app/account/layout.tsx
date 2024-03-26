'use client'
import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import AccountSidebar from './components/sidebar';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { isUserLoggedIn } = useAuth();
    const router = useRouter()
   


    return (
        <div>

            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <AccountSidebar />
                <div className='col-span-3'>
                    {children}
                </div>
            </div>
        </div>
    );
}
