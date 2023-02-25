const express = require(`express`)
const router = express.Router()
const Restaurant = require(`../models/restaurantSchema.js`)

// INDEX
router.get(`/`, (req, res) => {
    Restaurant.find({ city: 'Paris' }, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.render('city.ejs', { restaurant: data })
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
    Restaurant.findById(req.params.id, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.render(`editRestaurant.ejs`, { restaurant: data })
    }

    )
})

// UPDATE
router.put(`/:id`, (req, res) => {
    if (req.body.type) {
        req.body.type = type.split(`,`)
    }
    Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRestaurant) => {
        if (err) {
            console.log(err)
        }
        res.redirect(`/restaurantfinder/paris/${req.params.id}`)
    })
})




// DESTROY
router.delete(`/:id`, (req, res) => {
    res.redirect(`/restaurantfinder`)
})

module.exports = router