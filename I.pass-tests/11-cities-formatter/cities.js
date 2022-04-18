const formatCities = (capitals, formatter) => {
    return capitals.map(element => {
        return formatter(element)
    });
}

module.exports = formatCities;
