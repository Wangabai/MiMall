<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      res: {},
    }
  },
  components: {},
  mounted() {
    // 本地继承mock
    this.$http.get('/user/login').then((res) => {
      this.res = res
    })
  },
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
