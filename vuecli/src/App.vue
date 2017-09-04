<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import addPost from './components/addPost.vue';
import showPosts from './components/showPosts.vue';

export default {
  components: {
    'add-post': addPost,
    'show-posts': showPosts
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
