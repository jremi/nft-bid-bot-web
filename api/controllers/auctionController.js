// Get Auction
module.exports.auction = async (req, res) => {
  const { error, data } = await global.db
    .from('auction')
    .select('*, auction_bids(*)')
    .single()
    .eq('twitter_auction_id', req.params.auctionId)
  res.json({ error, data })
}
