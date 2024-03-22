import { useCart } from '@/hooks/useCart';
import { cartProductType } from '@/types';
import { PriceFormat } from '@/utils/priceFormate';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ItemsContentProps {
    item: cartProductType
}

export default function ItemsContent({ item }: ItemsContentProps) {
    const router = useRouter()
    const { handleRemoveProductFromCart, handleCartQtyDec, handleCartQtyInc } = useCart()
    const total = item.price * item.quantity
    return (
        <div className='grid grid-cols-5 gap-4 items-center border-t-[1.2px] border-slate-200 py-4 text-xs md:text-sm text-slate-60'>
            <div className="col-span-2 flex gap-2 justify-self-start">
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
            <div className='justify-self-center flex gap-4 items-center'>
                <button className='w-5 h-5 rounded-sm border-slate-600 border-[1.5px] flex items-center justify-center' onClick={() => handleCartQtyDec(item)}>-</button>
                <span>{item.quantity}</span>
                <button className='w-5 h-5 rounded-sm border-slate-600 border-[1.5px] flex items-center justify-center' onClick={() => handleCartQtyInc(item)}>+</button>
            </div>
            <div className='justify-self-end'>
                <span>{PriceFormat(total)}</span>
            </div>

        </div>
    );
}
