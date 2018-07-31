<template lang="html">
  <div class="register">
    <div class="row">
      <div class="col-md-10 col-md-offset-4">
        <h2>Login Form</h2>
      </div>
      <div class="col-md-10">
        <fieldset></fieldset>
        <form @submit.prevent="login" class="form-horizontal">
          <div class="form-group">
            <label class="control-label col-md-2">Email</label>
            <div class="col-md-10">
              <input type="email" class="form-control" v-model=email placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-2">Password</label>
            <div class="col-md-10">
              <input type="password" class="form-control" v-model=password placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-offset-2 col-md-10">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    computed: mapState({
      error: state => state.auth.error,
      isAuthorizing: state => state.auth.isAuthorizing,
    }),
    methods: {
      login() {
        this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password,
        }).then(() => {
          this.$router.push({ path: '/' });
        });
      },
    },
  };
</script>
<style scope lang="scss">
  .register {
    padding: 0 30px;
  }
</style>
