import { cartProductType, Products, selectedImageType } from "@/types"
import Image from "next/image"
import { images } from '../../../types';

interface ProductImageProps {
    product: Products
    cartProduct: cartProductType
    handleImageSelect: (image: selectedImageType) => void
}

export const ProductImage = ({ product, cartProduct, handleImageSelect }: ProductImageProps) => {

    return (
        <div className='flex flex-col  gap-8'>
            <div className="flex items-center justify-center">
                <Image src={cartProduct.selectedImg.image} alt={product?.name} width={400} height={400} />

            </div>
            <div className="grid grid-cols-5 gap-4 ">
                {product.images.map((image, index) => (
                    <div key={index} className={`flex justify-center items-center p-2 border-teal-600 ${cartProduct.selectedImg.view === image.view ? 'border-[2px]' : 'border-none'}`} onClick={() => handleImageSelect(image)}>
                        <Image src={image.image} alt={product.name} width={100} height={100} className=" cursor-pointer" />
                    </div>
                ))}
            </div>
        </div>
    )
}