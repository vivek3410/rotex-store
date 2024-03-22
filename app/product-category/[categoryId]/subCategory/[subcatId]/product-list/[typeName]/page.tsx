'use client'
import { productsByCategory } from '@/utils/products';
import React, { useEffect } from 'react';
import ProductCard from '@/app/product/components/productCard';
import { useCart } from '@/hooks/useCart';

interface PageProps {
    params: {
        categoryId: string
        typeName: string
        subcatId: string
    }
}

export default function Page({ params }: PageProps) {
    const { typeName, categoryId, subcatId } = params;
    const { setSubCatId, setTypeName } = useCart()
    const catId = parseInt(categoryId)
    const category = productsByCategory.find((category) => category.categoryId === catId);
    const subCat = category?.subCategory.find((subCategory) => subCategory.id === parseInt(subcatId));
    const products = subCat?.type.find((type) => type.name === typeName);
    useEffect(() => {
        setSubCatId(subcatId)
        setTypeName(typeName)
        // location.reload();
    }, [])

    return (
        <div className='pl-4 pt-4 flex flex-col gap-4'>
            <span className='text-2xl font-semibold'>{typeName}</span>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 w-full '>
                {products?.products.map((product) => (
                    <div key={product.id} className='flex flex-col items-center justify-center'>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
