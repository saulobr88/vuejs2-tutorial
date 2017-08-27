new Vue({
  el:'#vue-events',
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    add: function(number){
      this.age += number;
    },
    subtract: function(number){
      this.age -= number;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});

new Vue({
  el:'#vue-events-mod',
  data: {
    number: 10
  },
  methods: {
    click: function(){
      alert('You clicked me');
    }
  }
});

new Vue({
  el:'#vue-events-key',
  data: {
    number: 10
  },
  methods: {
    logName: function(){
      console.log('you entered your name');
    },
    logAge: function(){
      console.log('you entered your age');
    }
  }
});
