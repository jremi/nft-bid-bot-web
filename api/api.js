require('dotenv').config()

const express = require('express')
const cors = require('cors')

// Create express instance
const app = express()

// Enable default CORS options
app.use(cors())

// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Require & Import API routes
const auctions = require('./routes/auctions')

// Use API Routes
app.use(auctions)

// Create supabase instance
global.db = require('./db')

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app,
}
