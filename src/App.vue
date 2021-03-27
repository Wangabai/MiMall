<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      res: {},
    }
  },
  components: {},
  mounted() {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser() {
      this.$http.get('/user').then((res) => {
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount() {
      this.$http.get('/carts/products/sum').then((res) => {
        this.$store.dispatch('saveCartCount', res)
      })
    },
  },
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
