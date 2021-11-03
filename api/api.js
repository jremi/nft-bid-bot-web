require('dotenv').config()

const express = require('express')

// Create express instance
const app = express()

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
