'use client'

import { productsByCategory } from '@/utils/products';
import React from 'react';
import { subCategory } from '../../../../../types';

interface PageProps {
    params: {
        productId: string
    }
}

export default function Page({ params }: PageProps) {
    const { productId } = params;
    const id = parseInt(productId);
    const product = productsByCategory.flatMap(category =>
        category.subCategory.flatMap(subCategory =>
            subCategory.type.flatMap(type =>
                type.products.find(product =>
                    product.id === id
                )
            )
        )
    ).find(product => product !== undefined);
    return (
        <div>
            {product?.name}

        </div>
    );
}
