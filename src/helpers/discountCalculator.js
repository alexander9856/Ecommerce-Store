export const discountCalculator = (oldPrice, price) => {
    if (oldPrice) {
        return Math.round(((oldPrice - price) / oldPrice) * 100);
    }
    return undefined
}
