'use client'
import { Products } from '@/types';
import { PriceFormat } from '@/utils/priceFormate';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
interface ProductCardProps {
    product: Products
}

export default function ProductCard({ product }: ProductCardProps) {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center gap-4 w-[300px] h-[250px] px-2 py-4 cursor-pointer" onClick={() => router.push(`/product/${product.id}`)}>
            <Image src={product.images.length >= 1 ? product.images[0].image : '/images/400x400.png'} alt={product.name} width={150} height={150} className='object-contain mx-auto' />
            <div className='flex items-center justify-between'>
                <div className='flex flex-col px-2'>
                    <div className='text-slate-800 font-semibold text-lg'>{product.name}</div>
                    <div className='text-teal-600 text-sm'>{product.description}</div>
                </div>
                <div className='text-slate-700 font-semibold'>{PriceFormat(product.price)}</div>
            </div>
        </div>
    );
}
