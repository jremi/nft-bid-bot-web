<template>
  <div class="tweet-embed"></div>
</template>

<script>
export default {
  props: {
    tweetId: {
      type: [String, Number],
      required: true,
    },
  },
  head: {
    script: [
      {
        hid: 'twitter',
        type: 'text/javascript',
        src: '//platform.twitter.com/widgets.js',
      },
    ],
  },
  mounted() {
    if (this.tweetId) {
      window.twttr.widgets.createTweet(this.tweetId, this.$el)
    }
  },
}
</script>
