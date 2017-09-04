import addPost from './components/addPost.vue';
import showPosts from './components/showPosts.vue';

export default [
    { path: '/', component: showPosts},
    { path: '/add', component: addPost}
]
