<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal para {{nome}}!</p>
        <button @click="alterarNome">Alterar Usuário</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :nome="nome" :idade="idade" @nomeAlterado="nome = $event"/>
            <app-usuario-editar :nome="nome" :idade="idade" @alterarIdade="idade = $event"/>
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo.vue";
import AppUsuarioEditar from "./UsuarioEditar.vue";
import bus from '@/EventBus';

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      nome: "Renan",
      idade: 39,
    };
  },
  methods: {
    alterarNome() {
      this.nome = this.nome == "Renan" ? "Paricia" : "Renan";
    },
  },
  created(){
    bus.$on('idadeAlterada', idade => {
        this.idade = idade;
    });
  }
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
