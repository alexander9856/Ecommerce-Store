export const discountCalculator = (oldPrice, newPrice) => {
    if (oldPrice) {
        return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
    }
    return undefined
}
