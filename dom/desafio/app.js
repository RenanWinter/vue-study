new Vue({
  el: "#desafio",
  data: {
    nome: "Renan Reis",
    idade: 39,
    imagem:
      "https://img.freepik.com/fotos-gratis/garotas-bonitas_1157-7135.jpg",
    posicao: {
      x: 0,
      y: 0,
    },
    link: "https://google.com",
  },
  methods: {
    numeroAleatorio() {
      return Math.floor(Math.random() * 100);
    },
    adicionar() {
      this.idade++;
    },
    mostrarAlerta(event) {
      alert(event?.target?.value ?? "Fala amigão");
    },

    atualizaPosicao(event) {
      this.posicao.x = event.clientX;
      this.posicao.y = event.clientY;
    },
  },
});
