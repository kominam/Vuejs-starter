<template>
  <div>
    <ul v-for="post in posts">
      <li>{{ post.title }}</li>
    </ul>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'posts',
    computed: {
      ...mapGetters({
        posts: 'posts/all_posts'
      })
    },
    created () {
      this.fetchPost()
    },
    methods: {
      ...mapActions({
        fetchPost: 'posts/fetchAllPosts'
      })
    }
  }
</script>
