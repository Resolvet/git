<template>
  <!-- Register -->
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
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
            <input type="submit" class="btn btn-info btn-block mt-4" value="登录" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      submit() {

      }
    }
  };
</script>

<style scoped>
</style>

