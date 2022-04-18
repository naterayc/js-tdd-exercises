const carSales = (carsSold) => {
    let brands = carsSold.map(item => {
        return item.make
    });

    brands = brands.sort();
    const brandsAndPrices = brands.map(brand => {
        return {
            brand: brand,
            total: carsSold.filter(car => car.make === brand).reduce((total, car) => total + car.price, 0)
        }
    });
    const result = brandsAndPrices.reduce((brand, brandData) => {
        brand[brandData.brand] = brandData.total;
        return brand;
    },{});
    return result;

}

module.exports = carSales;
