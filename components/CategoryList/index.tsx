import Image from "next/image"
import { Container } from "../Container"
import { CategoryCard } from "./CategoryCard"
import { BiRightArrowAlt } from "react-icons/bi"
import { categories, productsByCategory } from "@/utils/products"
import { ProductByCategory } from "@/types"


export const CategoryList = () => {
    const images = [
        {
            url: '/images/ce.png',
            alt: 'ce'
        },
        {
            url: '/images/ex.png',
            alt: 'ex'
        },
        {
            url: '/images/fs.png',
            alt: 'fs'
        },
        {
            url: '/images/icex.png',
            alt: 'icex'
        },
        {
            url: '/images/inmetro.png',
            alt: 'inmetro'
        },
        {
            url: '/images/isi.png',
            alt: 'isi'
        },
        {
            url: '/images/kosha.png',
            alt: 'kosha'
        },
        {
            url: '/images/pct.png',
            alt: 'pct'
        }
    ]

    return (
        <div>
            <div className="my-[40px]">
                <Container>
                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mx-4 gap-8">
                        {productsByCategory.map((category, index) => (
                            <CategoryCard key={index} data={category} />
                        ))}
                    </div>
                </Container>

            </div>
            <div className="bg-teal-600 flex flex-col items-center justify-center gap-2 h-[140px] ">
                <div className=" text-sm md:text-xl text-white font-semibold ">Rotex is constantly working towards its motto </div>
                <div className="text-sm text-white flex items-center gap-1">
                    Click here to know more
                    <BiRightArrowAlt size={18} />
                </div>
            </div>
            <div className="bg-slate-200 flex flex-col items-center py-4 gap-4 ">
                <div className="text-slate-900 text-lg">Standards we follow</div>
                <div className="grid grid-cols-4 md:grid-cols-8 items-center justify-center gap-8 md:gap-8 xl:gap-20 px-2 ">
                    {images.map((image, index) => (
                        <Image key={index} src={image.url} width={100} height={100} alt={image.alt} />
                    ))}
                </div>
            </div>

            <div className="bg-white flex flex-col items-center justify-center py-4">
                <div className="text-slate-900 text-xl">Our Clients</div>
                <div></div>
            </div>
        </div>
    )
}