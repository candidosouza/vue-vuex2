import Vue from 'vue';
import { Time } from './time'

new Vue({
  el: '#app',
  data: {
    times: [
      new Time("América MG", require('./assets/america_mg_60x60.png')),
      new Time("Atletico MG", require('./assets/atletico_mg_60x60.png')),
      new Time("América MG", require('./assets/atletico-pr_60x60.png')),
    ]
  }
})
