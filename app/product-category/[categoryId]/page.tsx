
import ProductCard from "@/app/product/components/productCard";
import { NavStrip } from "@/components";
import { productsByCategory } from "@/utils/products";

interface PageProps {
    params: {
        categoryId: string
    }
}
export default function Page({ params }: PageProps) {
    const { categoryId } = params;
    const id = parseInt(categoryId);
    const category = productsByCategory.find((category) => category.categoryId === id);
    if (!category) {
        return <div>Category not found</div>;
    }

    return (
        <>
            {/* <NavStrip catName={category.category} /> */}
            <div className="flex flex-col gap-2 p-4">
                <div className="font-semibold text-xl md:text-2xl">{category.category}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center  md:gap-6 ">
                    {category.subCategory.map((subcategory) => subcategory.type.map((type) => type.products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))))}
                </div>
            </div>
        </>
    );
}
