export const sortData = (data, sortCriteria) => {
    if (!sortCriteria) return data;
    const sortingFunctions = {
        nameDesc: (a, b) => a.name.localeCompare(b.name),
        nameAsc: (a, b) => b.name.localeCompare(a.name),
        priceDesc: (a, b) => b.price - a.price,
        priceAsc: (a, b) => a.price - b.price,
    };

    const sortingFunction = sortingFunctions[sortCriteria];
    return [...data].sort(sortingFunction);
};