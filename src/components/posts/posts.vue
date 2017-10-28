<template>
  <div>
    <ul v-for="post in posts">
      <li>{{ post.title }}</li>
    </ul>
  </div>
</template>
<script>
// import { mapGetters, mapActions, mapState } from 'vuex'
  export default {
    computed: {
      posts() { return this.$store.getters['posts/all_posts'] }
    },
    created() {
      this.fetchPost();
    },
    methods: {
      fetchPost() {
        this.$store.dispatch('posts/fetchAllPosts')
      }
    }
  }
</script>
