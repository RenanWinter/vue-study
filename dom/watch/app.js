new Vue({
  el: "#app",
  data: {
    linha: 0,
    resultado: "Menor que 5",
  },
  watch: {
    linha(novo, antigo) {
      this.resultado = novo > 5 ? "Maior que 5" : "Menor que 5";
    },
  },
  methods: {
    aumentarLinha() {
      this.linha++;
    },
    diminuirLinha() {
      this.linha--;
    },
  },
});
