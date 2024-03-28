'use client'
import React from 'react';
import CartClient from './CartClient';
import withAuth from '@/hooks/withAuth';

function Cart() {
    return (
        <div className='p-4 md:p-8'>
            <CartClient />
        </div>
    );
}

export default withAuth(Cart)
