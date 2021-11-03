<template>
  <div class="page-get-started">
    <div class="content is-medium">
      <div class="notification is-light">
        <div class="columns is-align-items-center">
          <div class="column is-one-fifth">
            <img src="~/assets/twitter-logo.png" width="100" />
          </div>
          <div class="column">
            <h2><b>Twitter auction tool designed for #NFTartists</b></h2>
          </div>
        </div>
      </div>
      <p>
        Stop paying insane gas fees. Control your own NFT auctions on Twitter.
        Finalize the payment with the highest bidder directly.
      </p>
      <p>
        NFTBidBot enables you to create a regular Twitter post containing
        details about your NFT auction and then start an auction that other
        Twitter users in the cryptoverse can bid on.
      </p>
      <ul class="has-text-weight-bold">
        <li>🚀 Makes sure each bid meets the next bid price.</li>
        <li>🦄 Notifies bidders when the bid is received.</li>
        <li>👌 Notifies bidders when they have been outbid.</li>
        <li>🥂 Notifies bidders when the auction has closed.</li>
        <li>🏆 Provides real-time auction leaderboard.</li>
      </ul>
      <hr />
      <h2 class="subtitle">Start new Twitter auction</h2>
      <h2 class="subtitle is-5 has-text-grey">Example:</h2>
      <blockquote>
        <p class="is-flex is-align-items-center">
          <font-awesome-icon :icon="['fab', 'twitter-square']" />
          @NFTBidBot auction start 0.01 $ETH 24 hours
        </p>
      </blockquote>
      <code
        >@NFTBidBot auction start &lt;START_PRICE&gt; &lt;CURRENCY&gt;
        &lt;DURATION_VALUE&gt; &lt;DURATION_TYPE&gt;</code
      >
      <ul>
        <li>
          <strong
            ><b-tag size="is-large" type="is-primary"
              >START_PRICE</b-tag
            ></strong
          >
          The starting price for the auction.
        </li>
        <li>
          <strong
            ><b-tag size="is-large" type="is-primary">CURRENCY</b-tag></strong
          >
          The currency for the auction (For example: <em><b>ETH</b></em>).
        </li>
        <li>
          <strong
            ><b-tag size="is-large" type="is-primary"
              >DURATION_VALUE</b-tag
            ></strong
          >
          How long to run the auction.
        </li>
        <li>
          <strong
            ><b-tag size="is-large" type="is-primary"
              >DURATION_TYPE</b-tag
            ></strong
          >
          The duration type. Supports (<code>minutes</code>, <code>hours</code>,
          <code>days</code>)
        </li>
      </ul>
      <h2 class="subtitle">Cancel Twitter auction</h2>
      <h2 class="subtitle is-5 has-text-grey">Example:</h2>

      <blockquote>
        <p class="is-flex is-align-items-center">
          <font-awesome-icon :icon="['fab', 'twitter-square']" />
          @NFTBidBot auction cancel
        </p>
      </blockquote>
      <code>@NFTBidBot auction cancel</code>
      <h2 class="subtitle">Remove bid from Twitter auction</h2>
      <h2 class="subtitle is-5 has-text-grey">Example:</h2>
      <blockquote>
        <p class="is-flex is-align-items-center">
          <font-awesome-icon :icon="['fab', 'twitter-square']" />
          @NFTBidBot auction remove-bid 3.45 $ETH
        </p>
      </blockquote>
      <code>@NFTBidBot auction remove-bid &lt;BID_AMOUNT&gt;</code>
      <ul>
        <li>
          <strong
            ><b-tag size="is-large" type="is-primary">BID_AMOUNT</b-tag></strong
          >
          The bid amount to remove from the auction.
        </li>
      </ul>
      <h2 class="subtitle">Place bid on Twitter auction</h2>
      <h2 class="subtitle is-5 has-text-grey">Example:</h2>
      <blockquote>
        <p class="is-flex is-align-items-center">
          <font-awesome-icon :icon="['fab', 'twitter-square']" />
          @NFTBidBot bid 1.25 $ETH
        </p>
      </blockquote>
      <code>@NFTBidBot bid &lt;BID_AMOUNT&gt;</code>
      <ul>
        <li>
          <strong
            ><b-tag size="is-large" type="is-primary">BID_AMOUNT</b-tag></strong
          >
          The bid amount to place on the auction.
        </li>
      </ul>
      <h2 class="subtitle">Get the current top bidder on Twitter auction</h2>
      <h2 class="subtitle is-5 has-text-grey">Example:</h2>
      <blockquote>
        <p class="is-flex is-align-items-center">
          <font-awesome-icon :icon="['fab', 'twitter-square']" />@NFTBidBot bid
          top
        </p>
      </blockquote>
      <code>@NFTBidBot bid top</code>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: 'GetStarted',
}
</script>

<style>
.page-get-started ul {
  list-style-type: none;
}

.page-get-started blockquote {
  font-weight: bold;
  color: #1da1f2;
  display: flex;
  align-items: center;
  border-radius: 8px;
}

.page-get-started blockquote .fa-twitter-square {
  font-size: 36px;
  margin-right: 12px;
}
</style>
