import { NavStrip, ProductDetails, ProductImage } from '@/components';
import { productsByCategory } from '@/utils/products';

interface PageProps {
    params: {
        productId: string
    }
}

export default function Page({ params }: PageProps) {
    const { productId } = params
    const product = productsByCategory.flatMap(category =>
        category.subCategory.flatMap(subCategory =>
            subCategory.type.flatMap(type =>
                type.products.find(product =>
                    product.id === parseInt(productId)
                )
            )
        )
    ).find(product => product !== undefined);

    const catName = productsByCategory.find(category =>
        category.subCategory.find(subCategory =>
            subCategory.type.find(type =>
                type.products.find(product =>
                    product.id === parseInt(productId)
                )
            )
        )
    )?.category;

    const subcatName = productsByCategory.flatMap(category =>
        category.subCategory.find(subCategory =>
            subCategory.type.find(type =>
                type.products.find(product =>
                    product.id === parseInt(productId)
                )
            )
        )
    )?.find(cat => cat !== undefined)?.name;

    const typeName = productsByCategory.flatMap(category =>
        category.subCategory.flatMap(subcategory =>
            subcategory.type.find(type =>
                type.products.find(product =>
                    product.id === parseInt(productId)
                )
            )
        )
    ).find(type => type !== undefined)?.name;

    return (
        <>
            <NavStrip catName={catName} subCatName={subcatName} typeName={typeName} productName={product?.name} />
            {product && (
                <ProductDetails product={product} />
            )}
        </>
    );
}
