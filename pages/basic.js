new Vue({
  el:'#vue-app',
  data: {
    name: 'Saulo',
    job: 'Developer',
    website: 'https://github.com',
    websiteTag: '<a href="https://github.com/saulobr88" target="_blank">Website</a>',
  },
  methods: {
    greet: function(time){
        return 'Good ' + time +' '+ this.name;
    }
  }
});
