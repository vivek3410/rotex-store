'use client'
import { useCart } from "@/hooks/useCart"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { BiChevronRight } from "react-icons/bi"

interface NavStripProps {
    catName: string | undefined
    subCatName?: string | undefined
    catId?: string | undefined
    subcatId?: string | undefined
    typeName?: string | undefined
    productName?: string | undefined
}
export const NavStrip = ({ catName, subCatName, typeName, productName, catId, subcatId }: NavStripProps) => {
    const router = useRouter()

    return (
        <div className="flex items-center p-[1em] border-b-2 border-slate-300">
            <div className="text-teal-600 underline hover:text-slate-900 cursor-pointer" onClick={() => router.push('/')} >Home</div>
            <BiChevronRight size={24} />
            <div className=" text-teal-600 underline hover:text-slate-900 cursor-pointer" onClick={() => router.push(`/product-category/${catId}`)}>{catName}</div>
            {subCatName && catId && subcatId && (
                <>
                    <BiChevronRight size={24} />
                    <div className=" text-teal-600 underline hover:text-slate-900 cursor-pointer" onClick={() => router.push(`/product-category/${catId}/subCategory/${subcatId}/product-list/${typeName}`)}>{subCatName}</div>
                </>
            )}
            {typeName && (
                <>
                    <BiChevronRight size={24} />
                    <div className=" text-teal-600 underline cursor-pointer hover:text-slate-900">{typeName}</div>
                </>
            )}
            {productName && (
                <>
                    <BiChevronRight size={24} />
                    <div className=" text-slate-800 hover:text-slate-900">{productName}</div>
                </>
            )}
        </div>
    )
}