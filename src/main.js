import Vue from "vue";

import './filter';
import AppComponent from './components/app.components';

import { Time } from "./time";
import _ from "lodash";

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap");

let appComponent = 

new Vue({
  el: "#app",
  components: {
    app: AppComponent
  }
});

// console.log(teste.view);
