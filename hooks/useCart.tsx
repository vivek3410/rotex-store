'use client'
import { createContext, useContext, useState } from "react";

type CartContextType = {
    cartId: string | null,
    setCartId: (cartId: string) => void
    subCatId: string | null,
    setSubCatId: (subcatId: string) => void
    typeName: string | null,
    setTypeName: (typeName: string) => void
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartId, setCartId] = useState<string | null>(null);
    const [subCatId, setSubCatId] = useState<string | null>(null);
    const [typeName, setTypeName] = useState<string | null>(null);


    const value = {
        cartId,
        setCartId,
        subCatId,
        setSubCatId,
        typeName,
        setTypeName
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}