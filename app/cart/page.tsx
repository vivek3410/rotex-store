import React from 'react';
import CartClient from './components/CartClient';

export default function Page() {
    return (
        <>
            <div className='hidden md:block p-8'>
                <CartClient />
            </div>
            <div className='block md:hidden'>
                <CartClient />
            </div>
        </>
    );
}
