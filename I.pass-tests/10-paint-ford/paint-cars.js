const paintShop = (carsArray, color) => {
    return carsArray.map(car => {
        if (car.make === "Ford") {
            return {
                make: car.make,
                model: car.model,
                colour: color
            }
        }
        return {
            make: car.make,
            model: car.model,
            colour: car.colour
        }
    })

}

module.exports = {
    paintShop
};
