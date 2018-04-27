import Vue from 'vue'
import Box from './Box.vue'
import App from './App.vue'
import Two from './Two.vue'
import Graph from './Graph.vue'

new Vue({
  el: '#box1',
  render: h => h(Box)
})

new Vue({
  el: '#box2',
  render: h => h(Box)
})

new Vue({
  el: '#box3',
  render: h => h(Box)
})

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#two',
  render: h => h(Two)
})

new Vue({
  el: "graph1",
  render: h => h(Graph)
})
