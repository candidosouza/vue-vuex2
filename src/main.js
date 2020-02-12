import Vue from 'vue';
import { Time } from './time'

new Vue({
  el: '#app',
  data: {
    time: new Time("América MG", require('./assets/atletico_mg_60x60.png'))
  }
})
