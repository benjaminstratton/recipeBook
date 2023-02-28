const express = require(`express`)
const router = express.Router()
const Restaurant = require(`../models/restaurantSchema.js`)

// INDEX
router.get(`/`, (req, res) => {
    Restaurant.find({ city: `London` }, (err, londonRestaurants) => {
        if (err) {
            console.log(err)
        }
        res.render(`city.ejs`, {
            restaurant: londonRestaurants
        })
    })
})

// NEW
router.get(`/new`, (req, res) => {
    res.render(`addNewRestaurant.ejs`)
})

// CREATE
router.post(`/`, (req, res) => {
    let type = req.body.type
    req.body.type = type.split(`, `)
    Restaurant.create(req.body, () => {
        res.redirect(`/restaurantfinder/london`)
    })
})

// SHOW
router.get(`/:id`, (req, res) => {
    Restaurant.findById(req.params.id, (err, foundRestaurants) => {
        if (err) {
            console.log(err)
        }
        res.render(`restaurant.ejs`, {
            restaurant: foundRestaurants
        })
    })
})

// EDIT
router.get(`/:id/edit`, (req, res) => {
    Restaurant.findById(req.params.id, (err, foundRestaurants) => {
        if (err) {
            console.log(err)
        }
        res.render(`editRestaurant.ejs`, {
            restaurant: foundRestaurants
        })
    })
})

// UPDATE
router.put(`/:id`, (req, res) => {
    let type = req.body.type
    req.body.type = type.split(`, `)
    Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRestaurant) => {
        if (err) {
            console.log(err)
        }
        res.redirect(`/restaurantfinder/london/${req.params.id}`)
    })
})

// DESTROY
router.delete(`/:id`, (req, res) => {
    Restaurant.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.redirect(`/restaurantfinder/london`)
    })
})

module.exports = router