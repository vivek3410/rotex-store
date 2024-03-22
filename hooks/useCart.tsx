'use client'
import { cartProductType } from "@/types";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
    cartId: string | null,
    setCartId: (cartId: string) => void
    subCatId: string | null,
    setSubCatId: (subcatId: string) => void
    typeName: string | null,
    setTypeName: (typeName: string) => void
    handleAddProductToCart: (product: cartProductType) => void
    cartProducts: cartProductType[] | null
    handleRemoveProductFromCart: (product: cartProductType) => void
    handleCartQtyDec: (product: cartProductType) => void
    handleCartQtyInc: (product: cartProductType) => void
    handleClearCart: () => void
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartId, setCartId] = useState<string | null>(null);
    const [subCatId, setSubCatId] = useState<string | null>(null);
    const [typeName, setTypeName] = useState<string | null>(null);
    const [cartProducts, setCartProducts] = useState<cartProductType[] | null>(null)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('cart');
        const cProducts: cartProductType[] = JSON.parse(cartItems);
        setCartProducts(cProducts);
    }, [])


    const handleAddProductToCart = useCallback((product: cartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            return updatedCart
        })
    }, [])

    const handleRemoveProductFromCart = useCallback((product: cartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((item) => item.id !== product.id)
            setCartProducts(filteredProducts);
            toast.success('Product removed from cart')
            localStorage.setItem('cart', JSON.stringify(filteredProducts))
        }
    }, [cartProducts])

    const handleClearCart = useCallback(() => {
        setCartProducts(null)
        localStorage.removeItem('cart')
        toast.success('Cart cleared')
    }, [cartProducts])

    const handleCartQtyDec = useCallback((product: cartProductType) => {
        let updatedCart;
        if (product.quantity === 1) {
            return toast.success('Product quantity cannot be less than 1')
        }

        if (cartProducts) {
            updatedCart = [...cartProducts]
            const existingProduct = cartProducts.findIndex((item) => item.id === product.id)
            if (existingProduct > -1) {
                updatedCart[existingProduct].quantity = --updatedCart[existingProduct].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
    }, [cartProducts])

    const handleCartQtyInc = useCallback((product: cartProductType) => {
        if (product.quantity === 10) {
            return toast.success('Product quantity cannot be more than 10')
        }
        if (cartProducts) {
            let updatedCart = [...cartProducts]
            const existingProduct = cartProducts.findIndex((item) => item.id === product.id)
            if (existingProduct > -1) {
                updatedCart[existingProduct].quantity = ++updatedCart[existingProduct].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
    }, [cartProducts])


    const value = {
        cartId,
        setCartId,
        subCatId,
        setSubCatId,
        typeName,
        setTypeName,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyDec,
        handleCartQtyInc,
        handleClearCart,
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