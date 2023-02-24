const express = require(`express`)
const router = express.Router()
const Restaurant = require(`../models/restaurantSchema.js`)
const seedData = require(`../models/restaurantFinder.js`)

// SEED
router.get('/seed', (req, res) => {
    Restaurant.create(seedData, (err, seededData) => {
        res.send(seededData)
    })
})

// INDEX
router.get(`/`, (req, res) => {
    res.send(`Index`)
})

// NEW
router.get(`/new`, (req, res) => {
    res.send(`New`)
})

// CREATE
router.post(`/`, (req, res) => {
    res.redirect(`/restaurantfinder`)
})

// SHOW
router.get(`/:id`, (req, res) => {
    res.send(`Show`)
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