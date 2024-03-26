'use client'
import { productsByCategory } from '@/utils/products';
import React, { useEffect } from 'react';
import { useCart } from '@/hooks/useCart';
import { ProductCard } from '@/components';

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
    }, [subcatId, typeName])

    return (
        <div className='pl-4 pt-4 flex flex-col gap-4 mb-4'>
            <span className='text-2xl font-semibold'>{typeName}</span>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '>
                {products?.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
