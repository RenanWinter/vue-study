import Vue from "vue";
export default new Vue({
  methods: {
    alterarIdade(idade) {
      this.$emit("idadeAlterada", idade);
    },
    idadeAlterada(fn) {
      this.$on("idadeAlterada", fn);
    },
  },
});
