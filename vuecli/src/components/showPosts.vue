<template>
  <div v-theme:column="'wide'" id="show-posts">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search posts" />
    <div v-for="post in filteredPosts" class="single-post">
      <h2 v-rainbow>{{ post.title | to-uppercase }}</h2>
      <article>{{ post.body | snippet }}</article>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      posts: [],
      search: ''
    }
  },
  methods: {

  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
      this.posts = data.body.slice(0,10);
    });
  },
  computed: {
    filteredPosts: function(){
      return this.posts.filter((post) => {
          return post.title.match(new RegExp(this.search, 'i'));
      });
    }
  },
  filters: {
    snippet(value){
      return value.slice(0,100) + '...';
    }
  },
  directives: {
    'rainbow' :{
      bind(el, binding, vnode){
          el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      }
    }
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
#show-posts input{
  width: 80%;
  margin: 0 auto;
}
</style>
