<template>
    <div id="single-blog">
        <h1>{{ post.title }}</h1>
        <article>{{ post.body }}</article>
        </div>
    </div>
</template>

<script>
// Imports
//import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            id: this.$route.params.id,
            post: {}
        }
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            // console.log(data);
            this.post = data.body;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>
