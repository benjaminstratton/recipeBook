const mongoose = require(`mongoose`)

const cityRestaurantSchema = new mongoose.Schema(
    { 
        city: String,
        name: String,
        address: String,
        website: String,
        description: String,
        img: String,
        type: [String],
        rating: {type: Number, min: 1, max: 5}
    }
)

const restaurantCollection = mongoose.model(`Restaurant`, cityRestaurantSchema)

module.exports = restaurantCollection