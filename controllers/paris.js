const express = require(`express`)
const router = express.Router()
const Restaurant = require(`../models/restaurantSchema.js`)

// INDEX
router.get(`/`, (req, res) => {
    Restaurant.find({ city: 'Paris' }, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.render('city.ejs', { city: data })
    })

})

// NEW
router.get(`/new`, (req, res) => {
    res.render(`addNewRestaurant.ejs`)
})

// CREATE
router.post(`/`, (req, res) => {
    res.redirect(`/restaurantfinder`)
})

// SHOW
router.get(`/:id`, (req, res) => {
    Restaurant.findById(req.params.id, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.render(`restaurant.ejs`, { restaurant: data })
    })

})

// EDIT
router.get(`/:id/edit`, (req, res) => {
    res.send(`Edit`)
})

// UPDATE
router.put(`/:id`, (req, res) => {
    res.redirect(`/restaurantfinder`)
})

// DESTROY
router.delete(`/:id`, (req, res) => {
    res.redirect(`/restaurantfinder`)
})

module.exports = router