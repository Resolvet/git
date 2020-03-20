<template>
  <div id="app">
      <NavBar/>
      <router-view></router-view>
      <footers />
  </div>
</template>

<script>
  import NavBar from '@/components/Navbar'
  import footers from '@/components/footers'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components:{
    NavBar,
    footers
  }
}

</script>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
</style>
