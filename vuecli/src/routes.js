import addPost from './components/addPost.vue';
import showPosts from './components/showPosts.vue';
import singlePost from './components/singlePost.vue';

export default [
    { path: '/', component: showPosts},
    { path: '/add', component: addPost},
     { path: '/post/:id', component: singlePost}
]
