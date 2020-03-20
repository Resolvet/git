<template>
  <!-- Register -->
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建新的账户</p>
          {{isAuthenticated}}
          <form @submit.prevent="submit" autocomplete="off" method="post">
            <input
              type='text'
              name='name'
              placeholder="用户名"
              class="form-control form-control-lg"
              v-model="newUser.name"
              :error='errors.name'
            />
            <input
              type='email'
              name='email'
              class="form-control form-control-lg"
              placeholder="邮箱地址"
              v-model="newUser.email"
              :error='errors.email'
              info='我们使用了gravatar全球公认头像, 如果需要有头像显示, 请使用在gravatar注册的邮箱'
            />
            <input
              type='password'
              name='password'
              class="form-control form-control-lg"
              placeholder="密码"
              v-model="newUser.password"
              :error='errors.password'
            />
            <input
              type='password'
              name='password2'
              class="form-control form-control-lg"
              placeholder="确认密码"
              v-model="newUser.password2"
              :error='errors.password2'
            />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions,mapMutations} from 'vuex'
  export default {
    name: 'Register',
    data() {
      return {
        newUser: {
          name: '',
          email: '',
          password: '',
          password2: ''
        },
        errors: {}
      };
    },

    methods: {
      submit () {
        this.$axios.post('http://localhost:5000/api/users/register',this.newUser).then(res=>{
            this.$store.dispatch('setUser',res.data);
            console.log(this.user);
            console.log(this.isAuthenticated)
        })
      }
    },
    computed:{
      ...mapGetters(['isAuthenticated','user'])
    }
  }
</script>

<style scoped>
</style>

