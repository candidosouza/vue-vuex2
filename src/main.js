import Vue from "vue";

import './filter';
import AppComponent from './components/app.components';
import store from './store';

// import { Time } from "./time";
// import _ from "lodash";

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap");

new Vue({
  el: "#app",
  components: {
    app: AppComponent
  },
  store,
});

// console.log(teste.view);
