const express = require(`express`)
const app = express()
const mongoose = require(`mongoose`)
const methodOverride = require(`method-override`)
require(`dotenv`).config()




// Controllers
const dubaiController = require(`./controllers/dubai.js`)
const londonController = require(`./controllers/london.js`)
const losAngelesController = require(`./controllers/losAngeles.js`)
const newYorkController = require(`./controllers/newYork.js`)
const parisController = require(`./controllers/paris.js`)
const restaurantFinderController = require(`./controllers/restaurantFinder.js`)
const sydneyController = require(`./controllers/sydney.js`)

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride(`_method`))
app.use(express.static('public'))



// Middleware for Controllers
app.use('/dubai', dubaiController)
app.use('/london', londonController)
app.use('/la', losAngelesController)
app.use('/ny', newYorkController)
app.use('/paris', parisController)
app.use('/', restaurantFinderController)
app.use('/sydney', sydneyController)

mongoose.connect(process.env.MONGODB, () => {
    console.log('The connection with mongodb is established');
})

app.listen(3000, () => {
    console.log('listening...');
})