<template>
    <div id="add-post">
        <h2>Add a New Post</h2>
        <form>
            <label>Post Title:</label>
            <input type="text" v-model.lazy="post.title" required />
            <label>Post Content:</label>
            <textarea v-model.lazy.trim="post.content"></textarea>
            <div id="checkboxes">
                <p>Post Categories:</p>
                <label>Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="post.categories" />
                <label>Wizards</label>
                <input type="checkbox" value="wizards" v-model="post.categories" />
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="post.categories" />
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="post.categories" />
            </div>
            <label>Author:</label>
            <select v-model="post.author">
                <option v-for="author in authors">{{ author }}</option>
            </select>
        </form>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ post.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ post.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in post.categories">{{ category }}</li>
            </ul>
            <p>Author: {{ post.author }}</p>
        </div>
    </div>
</template>

<script>
// Imports
export default {
    data () {
        return {
            post: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator']
        }
    },
    methods: {
    }
}
</script>

<style>
#add-post *{
    box-sizing: border-box;
}
#add-post{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
</style>
