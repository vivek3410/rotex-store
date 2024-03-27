'use client'
import Image from 'next/image';
import React, { useCallback } from 'react';
import { useCart } from '@/hooks/useCart';
import { cartProductType } from '@/types';
import { PriceFormat } from '@/utils/priceFormate';
import { BiMinus, BiPlus } from 'react-icons/bi';

interface ItemsContentProps {
    item: cartProductType,
}

export default function ItemsContent({ item }: ItemsContentProps) {

    const { handleRemoveProductFromCart, handleCartQtyInc, handleCartQtyDec } = useCart();
    const handleQty = useCallback((value: string) => {
        console.log(value);
    }, [])



    const total = item.price * item.quantity;
    return (
        <>
            <div className='hidden md:grid grid-cols-5 gap-4 items-center border-t-[1.2px] border-slate-200 py-4 text-xs md:text-sm text-slate-600'>
                <div className='col-span-2 flex gap-1 justify-self-start'>
                    <Image src={item.selectedImg.image} alt={item.name} width={60} height={60} className='object-contain aspect-square' />
                    <div className='flex flex-col gap-1'>
                        <span>{item.name}</span>
                        <span>{item.description}</span>
                        <div className='underline text-slate-600 cursor-pointer' onClick={() => handleRemoveProductFromCart(item)}>Remove</div>
                    </div>
                </div>
                <div className='justify-self-center'>
                    <span>{PriceFormat(item.price)}</span>
                </div>
                <div className='justify-self-center flex gap-4 items-center'>
                    <button className='w-5 h-5 rounded-sm border-slate-600 border-[1.5px] flex items-center justify-center' onClick={() => handleCartQtyDec(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button className='w-5 h-5 rounded-sm border-slate-600 border-[1.5px] flex items-center justify-center' onClick={() => handleCartQtyInc(item)}>+</button>
                </div>
                <div className='justify-self-end'>
                    <span>{PriceFormat(total)}</span>
                </div>
            </div>
            <div className=' md:hidden flex justify-between mt-8'>
                <div className='col-span-2 flex gap-1 justify-self-start'>
                    <Image src={item.selectedImg.image} alt={item.name} width={100} height={100} className='object-contain aspect-square' />
                    <div className='flex flex-col gap-2 pt-4'>
                        <span className='text-xs'>{item.name}</span>
                        <div className='font-bold text-sm'>QTY: <span> {item.quantity}</span></div>
                        <div className='underline text-slate-600 cursor-pointer text-xs' onClick={() => handleRemoveProductFromCart(item)}>Remove</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <button className='w-5 h-5 rounded-sm  flex items-center justify-center' onClick={() => handleCartQtyDec(item)}>
                        <BiMinus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button className='w-5 h-5 rounded-sm  flex items-center justify-center' onClick={() => handleCartQtyInc(item)}>
                        <BiPlus size={22} />
                    </button>
                </div>


            </div>
        </>
    );
}
