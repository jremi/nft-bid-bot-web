const { Router } = require('express')

const router = Router()

const auctionController = require('../controllers/auctionController')

router.get('/auction/:auctionId', auctionController.auction)

module.exports = router
