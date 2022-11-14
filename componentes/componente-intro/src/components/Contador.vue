<template>
  <div class="card">
    <h2>{{ contador }}</h2>
    <div class="actions">
      <button @click="adicionar" class="btn btn-primary">+</button>
      <button @click="diminuir" class="btn btn-danger">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    diminuir() {
      this.contador--;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: 12px;
  width: 100%;
  height: 100%;
}

span{
  font-size: 1.3em;
}

.actions{
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

button{
  min-width: 50px;
  font-size: 20px;
  height: 30px;
  padding-top: 0;
  margin-top: -10;
}
</style>
