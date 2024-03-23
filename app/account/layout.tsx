import React from 'react';
import Navbar from './components/navbar';
import AccountSidebar from './components/sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
