<template>
  <div class="layout-default">
    <b-navbar type="is-black">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="~assets/nftbidbot-banner.jpeg" alt="NFTBidBot" />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item
          class="has-text-weight-bold"
          tag="nuxt-link"
          to="/get-started"
        >
          Get Started
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item tag="nuxt-link" to="/about"> About </b-navbar-item>
          <!-- <b-navbar-item tag="nuxt-link" to="/contact"> Contact </b-navbar-item> -->
        </b-navbar-dropdown>
      </template>
      <!-- <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </b-navbar-item>
      </template> -->
    </b-navbar>
    <!-- <aside class="column is-2 section">
      <p class="menu-label is-hidden-touch">Navigation</p>
      <ul class="menu-list">
        <li v-for="(item, key) of items" :key="key">
          <NuxtLink :to="item.to" exact-active-class="is-active">
            <b-icon :icon="item.icon" /> {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </aside> -->
    <div class="container column is-12">
      <Nuxt />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Copyright © 2021 <b>NFTBot.bid</b>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // items: [
      //   {
      //     title: 'Home',
      //     icon: 'home',
      //     to: { name: 'index' },
      //   },
      // ],
    }
  },
}
</script>

<style>
.layout-default footer {
  bottom: 0;
  position: fixed;
  width: 100%;
  padding: 0.75rem;
  background-color: #e89a00;
  color: white;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
}
.layout-default .container {
  margin-bottom: 3.5rem;
}
</style>
