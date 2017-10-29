<!-- Navigation -->
<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#page-top">Vue Hackathon</a>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav pull-right">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/posts" class="nav-link">Posts</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'navBar'
  }
</script>
<style scope lang="scss">
  #mainNav {
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    background: #2C3E50;
    a:focus {
      outline: none;
    }
    .navbar-brand {
      font-size: 2em;
      color: white;
      &.active,
      &:active,
      &:focus,
      &:hover {
        color: white;
      }
    }
    .navbar-nav {
      letter-spacing: 1px;
      list-style-type: none;
      li.nav-item {
        padding: 15px;
        a.nav-link {
          color: white;
          &:hover {
            color: #18BC9C;
            outline: none;
          }
        }
      }
    }
  }
</style>
