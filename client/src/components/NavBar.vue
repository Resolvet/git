<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">admin</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto" id="ul">
          <li class="nav-item">
            <router-link class="nav-link" to="/profiles"> 开发者
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto" id="ul1">
          <li class="nav-item">
            <router-link class="nav-link" to="/feed">留言</router-link>
          </li>
          <li class="nav-item" >
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item" >
            <router-link class="nav-link" to="/register">注册</router-link>
          </li>
          <li class="nav-item" >
            <router-link class="nav-link" to="/login">登录</router-link>
          </li>
          <li class="nav-item" >

          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {};
    },
    computed: {

    },
    methods: {

    }
  };
</script>

<style scoped>
  .headerImg {
    width: 25px;
    margin-right: 5px;
  }

  #ul li{
    width: 50px;
    list-style: none;
  }
  #ul1{
    float: right;
  }
  #ul1 li{
    width: 100px;
    list-style: none;
  }
</style>

