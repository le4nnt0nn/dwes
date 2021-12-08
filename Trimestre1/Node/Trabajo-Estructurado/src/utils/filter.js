function filterObject(items, filters) {
    return items.filter(item => (
        Object.entries(filters).every(([key, value]) => value === undefined || item[key] == value)
    ));
}

function sortObject(items) {
    return items.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })
}

function paginateObject(items, page_size, page_number) {
    return items.slice((page_number - 1) * page_size, page_number * page_size);
}

module.exports = {
    filterObject,
    sortObject,
    paginateObject,
};