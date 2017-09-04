<template>
  <div v-theme:column="'narrow'" id="show-posts">
    <h1>All Blog Articles</h1>
    <div v-for="post in posts" class="single-post">
      <h2 v-rainbow>{{ post.title }}</h2>
      <article>{{ post.body }}</article>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      posts: []
    }
  },
  methods: {

  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
      this.posts = data.body.slice(0,10);
    });
  }
}
</script>

<style>
#show-posts{
    max-width: 800px;
    margin: 0px auto;
}
.single-post{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
