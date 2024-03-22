'use client'

import { cartProductType, Products, selectedImageType } from '@/types';
import { PriceFormat } from '@/utils/priceFormate';
import React, { useCallback, useEffect, useState } from 'react';
import { ProductImage } from '../productImage';
import Link from 'next/link';
import { SetQuantity } from '../setQuantity';
import { useCart } from '@/hooks/useCart';
import toast from 'react-hot-toast';
import { MdCheckCircle } from 'react-icons/md';
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
    product: Products
}

const Horizontal = () => {
    return (
        <hr className='w-[40%] my-2' />
    )
}

export function ProductDetails({ product }: ProductDetailsProps) {
    const { handleAddProductToCart, cartProducts } = useCart()
    const [isProductInCart, setIsProductInCart] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (cartProducts) {
            setIsProductInCart(cartProducts.find((item) => item.id === product.id) ? true : false)
        }
    }, [cartProducts])

    const [cartProduct, setCartProduct] = useState<cartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
        selectedImg: { ...product.images[0] },
        category: product.description,
        type: product.specifications.Application
    })

    const handleImageSelect = (image: selectedImageType) => {
        setCartProduct((prev) => (
            { ...prev, selectedImg: image }
        ))
    }

    const handleQuantity = useCallback((quantity: string) => {
        setCartProduct((prev) => (
            { ...prev, quantity: quantity === 'inc' ? prev.quantity === 10 ? 10 : prev.quantity + 1 : prev.quantity === 1 ? 1 : prev.quantity - 1 }
        ))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 py-2 md:px-16 md:py-8'>
            <div className='flex flex-col gap-12 w-full'>
                <ProductImage product={product} cartProduct={cartProduct} handleImageSelect={handleImageSelect} />
                <div className="flex flex-col gap-2">
                    <div className='flex gap-1'>
                        <span className="font-semibold text-slate-900">Certificates:</span>
                        <span>{product.certificates}</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='font-semibold text-slate-900'>Documents / Downloads</div>
                        <div className='grid grid-cols-3 bg-slate-200 py-1 px-4'>
                            <div className='col-span-1'>Catelogue</div>
                            <Link href={product.download} className='text-center cols-span-2 text-teal-600 no-underline hover:underline cursor-pointer' >Download</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 border-[1px] border-slate-400 rounded-md p-4'>
                <span className='text-slate-600 text-md md:text-xl font-bold'>{product.name}</span>
                <span className="text-teal-600 text-md md:text-xl font-bold">{product.description}</span>
                <div className='flex flex-col gap-4'>
                    <span className='text-slate-900 font-semibold text-md md:text-xl'>Specifications</span>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-1'>
                            <span className='text-slate-900 font-semibold text-md'>Model:</span>
                            <div className='text-md'>{product.specifications.model}</div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 w-full'>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center justify-between ">
                                    <div className='text-[.7em] md:text-[.8em] font-semibold'>Application</div>
                                    <div className='text-[.7em] md:text-[.8em] bg-slate-100 min-w-[150px] max-w-[150px] rounded-md px-[.5em] py-[.2em]'>{product.specifications.Application}</div>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <div className='text-[.7em] md:text-[.8em] font-semibold'>Temperature Range</div>
                                    <div className='text-[.7em] md:text-[.8em bg-slate-100 rounded-md min-w-[150px] max-w-[150px] px-[1em] py-[.2em]'>{product.specifications.TemperatureRange}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className='text-[.7em] md:text-[.8em] font-semibold'>Max Pressure(bar)</div>
                                    <div className='text-[.7em] md:text-[.8em bg-slate-100 rounded-md min-w-[150px] max-w-[150px] px-[1em] py-[.2em]'>{product.specifications.MaxPressure}</div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center justify-between gap-4">
                                    <div className='text-[.7em] md:text-[.8em] font-semibold'>Function Type</div>
                                    <div className='text-[.7em] md:text-[.8em bg-slate-100 rounded-md min-w-[150px] max-w-[150px] px-[1em] py-[.2em]'>{product.specifications.FunctionType}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className='text-[.7em] md:text-[.8em] font-semibold'>Min Pressure(bar)</div>
                                    <div className='text-[.7em] md:text-[.8em bg-slate-100 rounded-md min-w-[150px] max-w-[150px] px-[1em] py-[.2em]'>{product.specifications.MinPressure}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className='text-[.7em] md:text-[.8em] font-semibold'>Media</div>
                                    <div className='text-[.7em] md:text-[.8em bg-slate-100 rounded-md min-w-[150px] max-w-[150px] px-[1em] py-[.2em]'>{product.specifications.Media}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Horizontal />
                    <span className='text-slate-900 text-lg'>
                        <span className='font-semibold'>Price: </span>{PriceFormat(product.price)}
                    </span>
                    <Horizontal />
                    {isProductInCart ? (
                        <>
                            <div className='mb-2 text-slate-500 flex items-center gap-1'>
                                <MdCheckCircle className='text-teal-400' size={20} />
                                <p>Product Added to Cart</p>
                            </div>
                            <button className='w-full bg-yellow-400 px-[1em] py-[.2em] md:py-[.5em] rounded-md text-slate-900 font-normal md:font-bold text-md md:text-lg hover:bg-yellow-600 hover:text-slate-300' onClick={() => router.push('/cart')}>View in Cart</button>
                        </>
                    ) : (
                        <>
                            <SetQuantity cartProduct={cartProduct} handleQuantity={handleQuantity} />
                            <Horizontal />
                            <button className='w-full bg-yellow-400 px-[1em] py-[.2em] md:py-[.5em] rounded-md text-slate-900 font-normal md:font-bold text-md md:text-lg hover:bg-yellow-600 hover:text-slate-300' onClick={() => { handleAddProductToCart(cartProduct); toast.success("Added to cart") }}>Add to Cart</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
