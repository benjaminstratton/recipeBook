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

    res.render(`index.ejs`)


})

// NEW
router.get(`/new`, (req, res) => {
    res.render(`addNewRestaurant.ejs`)
})

// CREATE
router.post(`/`, (req, res) => {
    let city = req.body.city
    Restaurant.create(req.body, (err, newRestaurant) => {
        if (err) {
            console.log(err)
        }

        res.redirect(`/${city}`)
    })
})



module.exports = router