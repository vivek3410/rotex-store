'use client'
import { Button, Heading } from '@/components';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import ItemsContent from './ItemsContent';
import { PriceFormat } from '@/utils/priceFormate';

export default function CartClient() {
    const { cartProducts, handleClearCart } = useCart()

    if (cartProducts?.length === 0 || !cartProducts) {
        return (
            <div className="flex flex-col items-center">
                <div className='text-3xl'>Your Cart is Empty</div>
                <div>
                    <Link href={"/"} className='text-slate-500 flex items-center gap-1 mt-2'>
                        <MdArrowBack />
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        )
    }

    const subtotal = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
        <div>
            <Heading title='Shopping Cart' center />
            <div className='grid grid-cols-5 gap-4 text-xs pb-2 items-center mt-8 border-b-[1.5px] border-slate-200'>
                <div className='col-span-2 justify-self-start'>PRODUCT</div>
                <div className='justify-self-center'>PRICE</div>
                <div className='justify-self-center'>QUANTITY</div>
                <div className='justify-self-end'>TOTAL</div>
            </div>
            <div>
                {cartProducts && cartProducts.map((product) => (
                    <ItemsContent key={product.id} item={product} />
                ))}
            </div>
            <div className='border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4'>
                <div>
                    <Button label={"Clear cart"} onClick={handleClearCart} small outline custom='max-w-[90px]' />
                </div>
                <div className='text-sm flex flex-col gap-1 items-start'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-between w-full text-base font-semibold'>
                            <span>SubTotal</span>
                            <span>{PriceFormat(subtotal)}</span>
                        </div>
                        <p className='text-slate-500'>Taxes and shipping calculated at checkout</p>
                        <Button label='Checkout' onClick={() => { }} custom='w-full' />
                        <Link href={"/"} className='text-slate-500 flex items-center gap-1 mt-2'>
                            <MdArrowBack />
                            <span>Continue Shopping</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
