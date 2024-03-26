import { NavStrip, Sidebar } from '@/components';
import { productsByCategory } from '@/utils/products';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode
    params: {
        categoryId: string
        subcatId: string
        typeName: string
    }
}

export default function Layout({ children }: LayoutProps) {

    return (
        <div>{children}</div>
    );
}
