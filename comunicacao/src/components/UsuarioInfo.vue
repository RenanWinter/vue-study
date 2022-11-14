<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome: {{inverterNome}}</p>
        <p>Idade: {{age}}</p>
        <button @click="mudarNome">Mudar Nome</button>
    </div>
</template>

<script>
import bus from "@/EventBus";

export default {
  props: {
    nome: {
      //required: true,
      type: String,
      default: "Júlia",
      // default(){
      //     return 'Júlia'
      // }
    },
    idade: Number,
  },
  data() {
    return {
      name: this.nome,
      age: this.idade
    };
  },
  methods: {
    mudarNome() {
      this.name = "Gustavo";
      this.$emit("nomeAlterado", this.name);
    },
  },
  computed: {
    inverterNome() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
  },
  watch: {
    nome() {
      this.name = this.nome;
    },
  },
  created() {
    bus.idadeAlterada(idade=>{
        this.age = idade;
    })
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
