<template>
  <div>
    <add-post></add-post>
  </div>
</template>

<script>
import addPost from './components/addPost.vue';

export default {
  components: {
    'add-post': addPost
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
