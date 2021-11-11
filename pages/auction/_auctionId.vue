<template>
  <div class="page-auction">
    <template v-if="!auction">
      <h3>This auction was not found!</h3>
    </template>
    <template v-else>
      <div class="columns">
        <div class="column">
          <b-message v-if="!auction.is_active" type="is-warning" size="is-large"
            ><b>👋 Hey there! This auction is closed.</b></b-message
          >
          <b-message
            v-if="!auction.is_active && auctionBids.length"
            type="is-success"
            size="is-large"
          >
            <b
              >💰 To settle this auction the winning bidder and seller must
              directly coordinate the transfer of this NFT.</b
            >
          </b-message>
          <div v-if="!auction.is_active && topBid" class="title is-5">
            Sold for:
            <b-tag size="is-large" type="is-success"
              ><b>{{ topBid.bid_amount }} {{ auction.currency }}</b></b-tag
            ><span v-if="cryptoPriceUsd" class="pl-2 subtitle is-4"
              ><b>{{ cryptoPriceUsd | currency }}</b></span
            >
          </div>
          <div v-if="auction.is_active" class="mb-3">
            <client-only>
              <h3 class="title is-5 has-text-centered mb-2">
                Auction ending in
              </h3>
              <flip-countdown :deadline="auctionEndTimeStamp"></flip-countdown>
            </client-only>
          </div>
          <b-message v-if="!auctionBids.length" type="is-info" size="is-large"
            ><b
              >🤔 This auction
              {{ auction.is_active ? 'currently has no' : 'received no' }}
              bids.</b
            ></b-message
          >
          <b-table v-else striped :data="auctionBids" class="mt-4">
            <b-table-column
              v-slot="props"
              field="created_at"
              label="Bid placed on"
            >
              <div class="mt-2">
                {{ $moment(props.row.created_at).format('MM/DD/YY - hh:mm A') }}
              </div>
            </b-table-column>
            <b-table-column
              v-slot="props"
              field="twitter_username"
              label="Bid placed by"
            >
              <a
                :href="`https://twitter.com/${props.row.twitter_username}`"
                target="_blank"
                class="is-flex is-align-items-center"
                :class="{ 'has-text-weight-bold': props.row.id === topBid.id }"
              >
                <img
                  :src="props.row.twitter_profile_pic"
                  class="profile-pic mr-2"
                />
                <div>@{{ props.row.twitter_username }}</div>
                <span v-if="props.row.id === topBid.id" class="pl-2">🥇</span>
                <span
                  v-else-if="
                    auctionBids[1] && props.row.id === auctionBids[1].id
                  "
                  class="pl-2"
                  >🥈</span
                >
                <span
                  v-else-if="
                    auctionBids[2] && props.row.id === auctionBids[2].id
                  "
                  class="pl-2"
                  >🥉</span
                >
                <span v-else class="pl-2"> </span>
              </a>
            </b-table-column>
            <b-table-column
              v-slot="props"
              field="bid_amount"
              label="Bid amount"
            >
              <b-tag type="is-dark" class="mt-2"
                ><b>{{ props.row.bid_amount }} {{ auction.currency }}</b></b-tag
              >
            </b-table-column>
          </b-table>
        </div>
        <div class="column is-one-third">
          <TweetEmbed
            v-if="auction.twitter_auction_id"
            :tweet-id="auction.twitter_auction_id"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
import CoinGecko from 'coingecko-api'
import CoinGeckoCoinsList from '@/assets/json/coingecko-coins-list.json'

export default {
  components: {
    FlipCountdown,
  },
  async asyncData({ route, $axios }) {
    const { data: auction } = await $axios.$get(
      `api/auction/${route.params.auctionId}`
    )
    auction?.auction_bids?.reverse() // desc
    return { auction }
  },
  data() {
    return {
      auction: {},
      cryptoPriceUsd: null,
      poller: null,
    }
  },
  async fetch() {
    await this.fetchCryptoPriceUsd()
  },
  computed: {
    auctionBids() {
      return this.auction.auction_bids
    },
    topBid() {
      return this.auction.auction_bids ? this.auction.auction_bids[0] : null
    },
    auctionEndTimeStamp() {
      const gmtDateTime = this.$moment
        .utc(
          this.auction.twitter_auction_created_at,
          'ddd MMM DD hh:mm:ss ZZ YYYY'
        )
        .add(this.auction.duration_value, this.auction.duration_type)
      return gmtDateTime.local().format('YYYY-MM-DD HH:mm:ss')
    },
  },
  mounted() {
    if (this.auction.is_active) {
      this.poller = setInterval(async () => {
        await this.fetchAuction()
        await this.fetchCryptoPriceUsd()
      }, 10000)
    }
  },
  beforeDestroy() {
    clearInterval(this.poller)
  },
  methods: {
    async fetchAuction() {
      const { data: auctionData } = await this.$axios.$get(
        `api/auction/${this.$route.params.auctionId}`
      )
      auctionData?.auction_bids?.reverse() // desc
      this.auction = auctionData
      if (!this.auction.is_active) {
        clearInterval(this.poller)
      }
    },
    async fetchCryptoPriceUsd() {
      const CoinGeckoClient = new CoinGecko()
      const { id: coinId } = CoinGeckoCoinsList.find(
        (coin) => coin.symbol === this.auction?.currency?.toLowerCase()
      )
      const { data: cryptoData } = await CoinGeckoClient.coins.fetch(coinId, {})
      this.cryptoPriceUsd =
        cryptoData?.market_data?.current_price?.usd * this.topBid?.bid_amount
    },
  },
}
</script>

<style>
.page-auction .table {
  border: 1px solid #d1d9dd;
  border-radius: 12px;
}

.page-auction .profile-pic {
  border-radius: 50%;
  width: 40px;
  border: 1px solid whitesmoke;
}

.page-auction .table tbody tr:last-child,
.page-auction .table tbody tr:last-child td {
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}
</style>
