export const filterData = (data, colorsCriteria, priceBetween) => {
    let filteredData = [...data]
    if (colorsCriteria.length > 0) {
        filteredData = filteredData.filter(x => colorsCriteria.includes(x.color));
    }
    filteredData = filteredData.filter(x => x.price >= priceBetween[0] && x.price <= priceBetween[1]);
    return filteredData
}