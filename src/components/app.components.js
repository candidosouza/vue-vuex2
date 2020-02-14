import timeListComponent from "./time-list.component";

export default {
    components: {
        'time-list': timeListComponent,
    },
    template: `
        <div class="container">
          <div class="row d-flex flex-column">
          <br />
  
          <h1>Campeonato brasileiro - série A - 2016</h1>
  
          <a href="#" class="btn btn-primary" @click.prevent="createNovoJogo">Novo Jogo</a>
  
          <br />
  
          <div v-if="view == 'tabela'">

            <time-list></time-list>
            
          </div>
  
          <!-- <div v-if="view == 'novojogo'"> -->
          <div v-else>
            <form class="form-inline">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="novoJogo.casa.gols"
                  @keyup.enter="fimJogo"
                />
                <label class="control-label">
                  {{ novoJogo.casa.time.nome }}
                  <img
                    :src="novoJogo.casa.time.escudo"
                    style="height: 30px; width: 30px;"
                  />
                </label>
              </div>
  
              <span> X </span>
  
              <div class="form-group">
                <label class="control-label">
                  <img
                    :src="novoJogo.fora.time.escudo"
                    style="height: 30px; width: 30px;"
                  />
                  {{ novoJogo.fora.time.nome }}
                </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="novoJogo.fora.gols"
                />
              </div>
              <button type="button" class="btn btn-primary" @click="fimJogo">
                Fim de jogo
              </button>
            </form>
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
      /*fimJogo() {
        let timeAdversario = this.novoJogo.fora.time;
        let gols = +this.novoJogo.casa.gols;
        let golsAdversario = +this.novoJogo.fora.gols;
        this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario);
        this.showView("tabela");
      },
      createNovoJogo() {
        let indexCasa = Math.floor(Math.random() * 20),
          indexFora = Math.floor(Math.random() * 20);
  
        this.novoJogo.casa.time = this.times[indexCasa];
        this.novoJogo.casa.gols = 0;
        this.novoJogo.fora.time = this.times[indexFora];
        this.novoJogo.fora.gols = 0;
        this.showView("novojogo");
      },*/
  
      showView(view) {
        this.view = view;
      },
      /*
      sortBy(coluna) {
        this.order.keys = coluna;
        this.order.sort = this.order.sort == "desc" ? "asc" : "desc";
      } */
    },
  };