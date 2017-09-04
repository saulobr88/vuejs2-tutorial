<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
/* No more needed, since vue-router is mapping
import showPosts from './components/showPosts.vue';
import addPost from './components/addPost.vue';
*/
import header from './components/header.vue';

export default {
  components: {
    'app-header': header
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
