<template>

    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Nome do Usuário: {{nome}}</p>
        <p>Idade: {{idade}}</p>
        <button @click="alterarIdade">Alterar Idade</button>

    </div>
</template>

<script>
import bus from '@/EventBus';

export default {
  props: {
    idade: Number,
    nome: String
  },
  methods: {
    alterarIdade() {
        const novaIdade = this.randomBetween(5,15);
        //this.$emit('alterarIdade',novaIdade);
        bus.alterarIdade(novaIdade);

    },
    randomBetween(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
