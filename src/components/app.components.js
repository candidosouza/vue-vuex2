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


          <div v-show="view == 'tabela'">
            <time-list></time-list>
          </div>
  
          <div v-show="view == 'novojogo'">
            <time-jogo></time-jogo>
          </div>

          <div v-show="view == 'zona'">
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
      showView(view) {
        this.view = view;
      },
    },
  };