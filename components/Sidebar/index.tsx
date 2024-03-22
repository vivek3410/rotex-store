'use client'
import { productsByCategory } from "@/utils/products"
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { BiMinus, BiPlus } from "react-icons/bi";

export const Sidebar = () => {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col pt-16 pl-8 gap-4 ">
                <div className="text-xl font-semibold text-slate-900 ">Categories</div>
                <div className="flex flex-col gap-2 text-slate-900 font-normal border-b-2 border-slate-200 pb-4">
                    {productsByCategory.map((category, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <div className="flex flex-col gap-1">
                                    <Disclosure.Button className={"flex items-center gap-1"}>
                                        {open ? <BiMinus size={20} /> : <BiPlus size={20} />}
                                        {category.category}
                                    </Disclosure.Button>
                                    <Disclosure.Panel>
                                        <ul>
                                            {category.subCategory.map((subCategory, subIndex) => (
                                                <li key={subIndex} className="flex flex-col gap-2">
                                                    <Disclosure>
                                                        {({ open }) => (
                                                            <div className="flex flex-col gap-1">
                                                                <Disclosure.Button className={"flex items-center gap-1 pl-4"}>
                                                                    {open ? <BiMinus size={20} /> : <BiPlus size={20} />}
                                                                    {subCategory.name}
                                                                </Disclosure.Button>
                                                                <Disclosure.Panel className={"flex flex-col gap-1"}>
                                                                    {subCategory.type.map((type, typeIndex) => (
                                                                        <div key={typeIndex} className="pl-12 cursor-pointer" onClick={() => router.push(`/product-category/${category.categoryId}/subCategory/${subCategory.id}/product-list/${type.name}`)}>{type.name}</div>
                                                                    ))}
                                                                </Disclosure.Panel>
                                                            </div>
                                                        )}
                                                    </Disclosure>
                                                </li>
                                            ))}
                                        </ul>
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </>
    )
}