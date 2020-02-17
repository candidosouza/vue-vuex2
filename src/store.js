import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    view: 'tabela',
};

export default new Vuex.Store({
    state,
});