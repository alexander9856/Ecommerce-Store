export const sortData = (data, sortCriteria) => {
    if (sortCriteria) {
        let sortedData = [...data];
        if (sortCriteria == 'nameDesc') {
            sortedData = sortedData.sort((a, b) => a.name.localeCompare(b.name))
        }
        else if (sortCriteria == 'nameAsc') {
            sortedData = sortedData.sort((a, b) => b.name.localeCompare(a.name))
        }
        else if (sortCriteria == 'priceDesc') {
            sortedData = sortedData.sort((a, b) => a.price - b.price)
        }
        else if (sortCriteria == 'priceAsc') {
            sortedData = sortedData.sort((a, b) => b.price - a.price)
        }
        return sortedData
    }
    return data
}