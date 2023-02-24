const express = require(`express`)
const router = express.Router()
const Restaurant = require(`../models/restaurantSchema.js`)
const seedData = require(`../models/restaurantFinder.js`)

// SEED
router.get('/seed', (req, res) => {
    Restaurant.create(seedData, (err, seededData) => {
        if (err) {
            console.log(err)
        }
        res.send(seededData)
    })
})

// INDEX
router.get(`/`, (req, res) => {
    res.render(`city.ejs`)
})

module.exports = router