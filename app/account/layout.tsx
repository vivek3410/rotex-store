'use client'
import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import AccountSidebar from './components/sidebar';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { Loader } from '@/components';
import withAuth from '@/hooks/withAuth';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    const { isUserLoggedIn } = useAuth();
    const router = useRouter()

    const { currentUser } = useAuth();
    if (!currentUser) {
        return <Loader />
    }

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

export default Layout