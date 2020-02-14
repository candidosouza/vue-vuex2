import Vue from "vue";

import './filter';

import { Time } from "./time";
import _ from "lodash";

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap");

let appComponent = Vue.extend({
  template: `
      <div class="container">
        <div class="row d-flex flex-column">
        <br />

        <h1>Campeonato brasileiro - série A - 2016</h1>

        <a href="#" class="btn btn-primary" @click.prevent="createNovoJogo">Novo Jogo</a>

        <br />

        <div v-if="view == 'tabela'">

          <input type="text" placeholder="Filtro" class="form-control" v-model="filter">
          <br />

          <table class="table table-striped">
            <thead>
              <tr>
                <th v-for="coluna in colunas">
                  <a href="#" @click.prevent="sortBy(coluna)">{{coluna | ucwords}}</a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="time in timesFiltered">
                <td>
                  <img :src="time.escudo" style="height: 30px; width: 30px;" />
                  <strong>{{time.nome}}</strong>
                </td>
                <td>{{time.pontos}}</td>
                <td>{{time.gm}}</td>
                <td>{{time.gs}}</td>
                <td>{{time | saldo}}</td>
              </tr>
            </tbody>
          </table>
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
      order: {
        keys: ["pontos", "gm", "gs"],
        sort: ["desc", "desc", "asc"]
      },
      filter: "",
      colunas: ["nome", "pontos", "gm", "gs", "saldo"],
      times: [
        new Time("Palmeiras", require("./assets/palmeiras_60x60.png")),
        new Time("Flamengo", require("./assets/flamengo_60x60.png")),
        new Time("Atlético-MG", require("./assets/atletico_mg_60x60.png")),
        new Time("Santos", require("./assets/santos_60x60.png")),
        new Time("Botafogo", require("./assets/botafogo_60x60.png")),
        new Time("Atlético-PR", require("./assets/atletico-pr_60x60.png")),
        new Time("Corinthians", require("./assets/corinthians_60x60.png")),
        new Time("Grêmio", require("./assets/gremio_60x60.png")),
        new Time("Fluminense", require("./assets/fluminense_60x60.png")),
        new Time("Ponte Preta", require("./assets/ponte_preta_60x60.png")),
        new Time("Chapecoense", require("./assets/chapecoense_60x60.png")),
        new Time("São Paulo", require("./assets/sao_paulo_60x60.png")),
        new Time("Cruzeiro", require("./assets/cruzeiro_60x60.png")),
        new Time("Sport", require("./assets/sport_60x60.png")),
        new Time("Coritiba", require("./assets/coritiba_60x60.png")),
        new Time("Internacional", require("./assets/internacional_60x60.png")),
        new Time("Vitória", require("./assets/vitoria_60x60.png")),
        new Time("Figueirense", require("./assets/figueirense_60x60.png")),
        new Time("Santa Cruz", require("./assets/santa_cruz_60x60.png")),
        new Time("América-MG", require("./assets/america_mg_60x60.png"))
      ],

      novoJogo: {
        casa: {
          time: null,
          gols: 0
        },
        fora: {
          time: null,
          gols: 0
        }
      },

      view: "tabela"
    };
  },

  methods: {
    fimJogo() {
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
    },

    showView(view) {
      this.view = view;
    },
    sortBy(coluna) {
      this.order.keys = coluna;
      this.order.sort = this.order.sort == "desc" ? "asc" : "desc";
    }
  },

  computed: {
    timesFiltered() {
      let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);

      return _.filter(colecao, item => {
        return item.nome.indexOf(this.filter) >= 0;
      });
    }
  },
});

new Vue({
  el: "#app",
  components: {
    app: appComponent
  }
});

// console.log(teste.view);
