<template lang="html">
  <div class="register">
    <div class="row">
      <div class="col-md-10 col-md-offset-4">
        <h2>Register Form</h2>
      </div>
      <div class="col-md-10">
        <fieldset></fieldset>
        <form class="form-horizontal">
          <div class="form-group">
            <label class="control-label col-md-2">name</label>
            <div class="col-md-10">
              <input type="name" class="form-control" placeholder="Name">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-2">Email</label>
            <div class="col-md-10">
              <input type="email" class="form-control" placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-2">Password</label>
            <div class="col-md-10">
              <input type="password" class="form-control" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-offset-2 col-md-10">
              <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'register',
  };
</script>
<style scope lang="scss">
  .register {
    padding: 0 30px;
  }
</style>
