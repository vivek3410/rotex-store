'use client'
import { ProductByCategory } from "@/types"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface CategoryCardProps {
    data: ProductByCategory

}

export const CategoryCard = ({ data }: CategoryCardProps) => {
    const router = useRouter()
    const ProductCount = data.subCategory.reduce((acc, curr) => acc + curr.type.reduce((acc, curr) => acc + curr.products.length, 0), 0);

    return (
        <div className="flex flex-col gap-1 border-slate-200 border-2 w-full min-h-[400px] max-h-[400px] p-4 rounded-md cursor-pointer" onClick={() => router.push(`/product-category/${data.categoryId}`)}>
            <div className="text-right text-slate-400">{ProductCount} Products</div>
            <div className=" aspect-square flex flex-col items-center justify-center">
                <Image src="/images/product-1.png" width={300} height={300} alt="category" className="object-contain" />
            </div>
            <div className="text-slate-900 text-lg font-semibold">
                {data.category}
            </div>

        </div>
    )
}