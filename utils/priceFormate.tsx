

export const PriceFormat = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'usd' }).format(price)
}
