'use client'
import { useCart } from '@/hooks/useCart';
import { cartProductType } from '@/types';
import { PriceFormat } from '@/utils/priceFormate';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiMinus, BiPlus, BiX } from 'react-icons/bi';

interface ItemsContentProps {
    item: cartProductType
}

export default function ItemsContent({ item }: ItemsContentProps) {
    const router = useRouter()
    const { handleRemoveProductFromCart, handleCartQtyDec, handleCartQtyInc } = useCart()
    const total = item.price * item.quantity
    return (
        <>
            <div className='hidden md:block'>
                <div className='grid grid-cols-5 gap-4 items-center border-t-[1.2px] border-slate-200 py-4 text-xs md:text-sm text-slate-60'>
                    <div className="col-span-2 flex  gap-2 justify-self-start">
                        <Image src={item.selectedImg.image} alt={item.name} width={60} height={60} className='object-contain aspect-square' />
                        <div className='flex flex-col gap-1'>
                            <span className='hover:underline cursor-pointer' onClick={() => router.push(`product/${item.id}`)}>{item.name}</span>
                            <span>{item.category}</span>
                            <div className='underline text-slate-600 cursor-pointer' onClick={() => handleRemoveProductFromCart(item)}>Remove</div>
                        </div>
                    </div>
                    <div className='justify-self-center'>
                        <span>{PriceFormat(item.price)}</span>
                    </div>
                    <div className='justify-self-center flex gap-1 md:gap-4 items-center'>
                        <button className='w-5 h-5 rounded-sm border-slate-600 border-[1.5px] flex items-center justify-center' onClick={() => handleCartQtyDec(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button className='w-5 h-5 rounded-sm border-slate-600 border-[1.5px] flex items-center justify-center' onClick={() => handleCartQtyInc(item)}>+</button>
                    </div>
                    <div className='justify-self-end'>
                        <span>{PriceFormat(total)}</span>
                    </div>

                </div>
            </div>
            <div className='block md:hidden my-4'>
                <div className='bg-slate-50 relative grid grid-cols-3 gap-4 border-t-[1.2px] items-center border-slate-200 text-xs py-2'>
                    <button className="absolute -top-4 -right-2 px-2 py-1 rounded-full bg-white shadow-xl" onClick={() => handleRemoveProductFromCart(item)}>
                        <BiX size={20} />
                    </button>
                    <Image src={item.selectedImg.image} alt={item.name} width={100} height={100} className='object-contain aspect-square' />
                    <div className='flex flex-col gap-2 text-lg'>
                        <span className='text-lg hover:underline cursor-pointer font-semibold' onClick={() => router.push(`/product/${item.id}`)} >{item.name}</span>
                        <span className='text-lg'>{PriceFormat(item.price)}</span>
                        <span className=''>Qty: {item.quantity}</span>
                    </div>
                    <div className=' flex flex-col gap-2 items-center'>
                        <button className='flex items-center justify-center' onClick={() => handleCartQtyInc(item)}>
                            <BiPlus size={24} />
                        </button>
                        <span className='text-lg'>{item.quantity}</span>

                        <button className='flex items-center justify-center' onClick={() => handleCartQtyDec(item)}>
                            <BiMinus size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
