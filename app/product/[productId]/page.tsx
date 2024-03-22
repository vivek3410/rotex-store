import { NavStrip } from '@/components';
import { PriceFormat } from '@/utils/priceFormate';
import { productsByCategory } from '@/utils/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PageProps {
    params: {
        productId: string
    }
}

export default function Page({ params }: PageProps) {
    const { productId } = params
    const product = productsByCategory.flatMap(category =>
        category.subCategory.flatMap(subCategory =>
            subCategory.type.flatMap(type =>
                type.products.find(product =>
                    product.id === parseInt(productId)
                )
            )
        )
    ).find(product => product !== undefined);

    const catName = productsByCategory.find(category =>
        category.subCategory.find(subCategory =>
            subCategory.type.find(type =>
                type.products.find(product =>
                    product.id === parseInt(productId)
                )
            )
        )
    )?.category;

    const subcatName = productsByCategory.flatMap(category =>
        category.subCategory.find(subCategory =>
            subCategory.type.find(type =>
                type.products.find(product =>
                    product.id === parseInt(productId)
                )
            )
        )
    )?.find(cat => cat !== undefined)?.name;

    const typeName = productsByCategory.flatMap(category =>
        category.subCategory.flatMap(subcategory =>
            subcategory.type.find(type =>
                type.products.find(product =>
                    product.id === parseInt(productId)
                )
            )
        )
    ).find(type => type !== undefined)?.name;





    return (
        <>
            <NavStrip catName={catName} subCatName={subcatName} typeName={typeName} productName={product?.name} />
            {product && (
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 py-2 md:px-16 md:py-8'>
                    <div className='flex flex-col gap-12 w-full'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={product?.images[0].image} alt={product?.name} width={300} height={300} />
                        </div>
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
                        <span className='text-slate-600 text-xl font-bold'>{product.name}</span>
                        <span className="text-teal-600 text-xl font-bold">{product.description}</span>
                        <div className='flex flex-col gap-4'>
                            <span className='text-slate-900 font-semibold text-xl'>Specifications</span>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-slate-900 font-semibold text-md'>Model:</span>
                                    <div className='text-md'>{product.specifications.model}</div>
                                </div>
                                <div className='grid grid-cols-2 gap-8 w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <div className="flex items-center justify-between ">
                                            <div className='text-[.7em] md:text-[.8em] font-semibold'>Application</div>
                                            <div className='text-[.7em] md:text-[.8em] bg-slate-100 min-w-auto max-w-auto rounded-md px-[.5em] py-[.2em]'>{product.specifications.Application}</div>
                                        </div>
                                        <div className="flex items-center justify-between gap-4">
                                            <div className='text-[.7em] md:text-[.8em] font-semibold'>Temperature Range</div>
                                            <div className='text-[.7em] md:text-[.8em bg-slate-100 rounded-md min-w-auto max-w-auto px-[1em] py-[.2em]'>{product.specifications.TemperatureRange}</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className='text-[.7em] md:text-[.8em] font-semibold'>Max Pressure(bar)</div>
                                            <div className='text-[.7em] md:text-[.8em bg-slate-100 rounded-md min-w-auto max-w-auto px-[1em] py-[.2em]'>{product.specifications.MaxPressure}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <div className="flex items-center justify-between gap-4">
                                            <div className='text-[.7em] md:text-[.8em] font-semibold'>Function Type</div>
                                            <div className='text-[.7em] md:text-[.8em bg-slate-100 rounded-md min-w-auto max-w-auto px-[1em] py-[.2em]'>{product.specifications.FunctionType}</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className='text-[.7em] md:text-[.8em] font-semibold'>Min Pressure(bar)</div>
                                            <div className='text-[.7em] md:text-[.8em bg-slate-100 rounded-md min-w-auto max-w-auto px-[1em] py-[.2em]'>{product.specifications.MinPressure}</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className='text-[.7em] md:text-[.8em] font-semibold'>Media</div>
                                            <div className='text-[.7em] md:text-[.8em bg-slate-100 rounded-md min-w-auto max-w-auto px-[1em] py-[.2em]'>{product.specifications.Media}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className='text-slate-900text-lg'>
                                <span className='font-semibold'>Price: </span>
                                {PriceFormat(product.price)}
                            </span>
                            <button className='w-full bg-yellow-400 px-[1em] py-[.2em] md:py-[.5em] rounded-md text-slate-900 font-normal md:font-bold text-md md:text-lg hover:bg-yellow-600 hover:text-slate-300'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
