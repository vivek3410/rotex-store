import { useCart } from "@/hooks/useCart"
import { useRouter } from "next/navigation"
import { BiShoppingBag } from "react-icons/bi"

export const ShoppingCartIcon = ({ }) => {
    const { cartProducts } = useCart()
    const router = useRouter()
    return (
        <div style={{ position: 'relative', display: 'inline-block' }} className="cursor-pointer" onClick={() => router.push('/cart')}>
            <BiShoppingBag size={34} />
            {cartProducts && cartProducts?.length > 0 && (
                <div style={{
                    position: 'absolute',
                    top: -5, // Adjust this value to position the circle vertically
                    right: -5, // Adjust this value to position the circle horizontally
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    width: 20,
                    height: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: 12,
                }}>
                    {cartProducts.length}
                </div>
            )}
        </div>
    )
}