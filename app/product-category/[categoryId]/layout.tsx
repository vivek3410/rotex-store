'use client'
import { NavStrip, Sidebar } from '@/components';
import { useCart } from '@/hooks/useCart';
import { productsByCategory } from '@/utils/products';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode
    params: {
        categoryId: string
    }
}

export default function Layout({ children, params }: LayoutProps) {
    const { categoryId } = params;
    const { subCatId, typeName } = useCart();
    const catName = productsByCategory.find((category) => category.categoryId === parseInt(categoryId))?.category;
    if (subCatId && typeName) {
        const subCatName = productsByCategory.find((category) => category.categoryId === parseInt(categoryId))?.subCategory.find((subCategory) => subCategory.id === parseInt(subCatId))?.name;
        return (
            <>
                <NavStrip catName={catName} subCatName={subCatName} typeName={typeName} catId={categoryId} subcatId={subCatId} />
                <div className='grid grid-cols-10'>
                    <div className="col-span-3 hidden xl:block">
                        <Sidebar />
                    </div>
                    <div className="col-span-10 xl:col-span-7">
                        {children}
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <NavStrip catName={catName} />
            <div className='grid grid-cols-10'>
                <div className="col-span-3">
                    <Sidebar />
                </div>
                <div className="col-span-7">
                    {children}
                </div>
            </div>
        </>
    );
}
