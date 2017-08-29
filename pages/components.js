var data = { name: 'Yoshi', toogle: false } // Global, shared

Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }} . <button v-on:click="changeName">ChangeName</button></p>',
    data: function(){
      return {
        name: 'Yoshi',
        toogle: false
      } // One per instance
    },
    methods:{
      changeName: function(){
        if (this.toogle) this.name = "Yoshi";
        else this.name = "Mario";
        this.toogle = !this.toogle;
      }
    }
});

new Vue({
    el: '.test',
    template: '<p>I am a test template</p>'
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
