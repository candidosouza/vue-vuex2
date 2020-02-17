import timeListComponent from "./time-list.component";
import timeJogoComponent from "./time-jogo.component";

export default {
    components: {
        'time-list': timeListComponent,
        'time-jogo': timeJogoComponent,
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

        </div>
      </div>
    `,
  
    data() {
      return {  
        view: "tabela"
      };
    },
  
    methods: {
      showView(view) {
        this.view = view;
      },
    },
  };