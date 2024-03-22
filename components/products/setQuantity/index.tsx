import { cartProductType } from "@/types"

interface SetQuantityProps {
    cartProduct: cartProductType
    handleQuantity: (quantity: string) => void

}
export const SetQuantity = ({ cartProduct, handleQuantity }: SetQuantityProps) => {
    return (
        <div className="flex items-center gap-4">
            <div className="font-semibold">QUANTITY:</div>
            <div className="flex items-center gap-4">
                <button className="w-5 h-5 rounded-sm border-[1px] border-slate-400 flex items-center justify-center" onClick={() => handleQuantity("dec")} >-</button>
                <span>{cartProduct.quantity}</span>
                <button className="w-5 h-5 rounded-sm border-[1px] border-slate-400 flex items-center justify-center" onClick={() => handleQuantity("inc")}>+</button>
            </div>
        </div>
    )
}