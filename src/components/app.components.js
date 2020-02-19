import timeListComponent from "./time-list.component";
import timeJogoComponent from "./time-jogo.component";
import timeZonaComponent from "./time-zona.component";

import store from '../store';

export default {
    components: {
        'time-list': timeListComponent,
        'time-jogo': timeJogoComponent,
        'time-zona': timeZonaComponent,
    },
    template: `
        <div class="container">
          <div class="row d-flex flex-column">
          <br />
          

          <h1>Campeonato brasileiro - série A - 2016</h1>

          <div>

            <a href="#" class="btn btn-primary" @click.prevent="showTabela">Ver Tabela</a>

            <a href="#" class="btn btn-primary" @click.prevent="showNovoJogo">Novo Jogo</a>
            
            <a href="#" class="btn btn-primary" @click.prevent="showZona">Zonas</a>
          
          </div>
          <br />

          <div v-if="view == 'tabela'">
            <time-list></time-list>
          </div>
  
          <div v-if="view == 'novojogo'">
            <time-jogo></time-jogo>
          </div>

          <div v-if="view == 'zona'">
            <time-zona></time-zona>
          </div>

        </div>
      </div>
    `,
  
    computed: {
      view() {
        return store.state.view;
        // return this.$store.state.view;
      }
    },
    methods: {
      showTabela() {
        store.commit("show-time-list");
      },
      showNovoJogo() {
        store.commit("show-time-novojogo");
      },

      showZona() {
        store.commit("show-time-zona")
      }
    }
  };