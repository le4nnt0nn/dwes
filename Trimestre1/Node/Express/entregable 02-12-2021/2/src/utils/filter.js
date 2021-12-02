function filterObject(items, filters) {
    return items.filter(item => (
        Object.entries(filters).every(([key, value]) => value === undefined || item[key] == value)
    ));
}

module.exports = {
    filterObject,
};