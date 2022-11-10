new Vue({
  el: "#app",
  data: {
    aula: "Aula de REFs",
    modulo: "Modulo Vue- instancia",
  },
  methods: {
    alterarAula() {
      this.aula += "#";
    },
    alterarModulo() {
      this.modulo += "#";
    },
  },
});
