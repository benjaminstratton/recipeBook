const mongoose = require(`mongoose`)

const cityRestaurantSchema = new mongoose.Schema({
    city: String,
    restaurants: [
        {
            name: String,
            address: String,
            website: String,
            description: String,
            img: String,
            type: [String],
            rating: {type: Number, min: 1, max: 5}
        }
    ]
})