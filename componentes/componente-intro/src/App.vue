<template>
  <div class="app">
    <h1>Contadores</h1>
    <counter class="counters" :quantity="50"></counter>
  </div>
</template>

<script lang="ts">
import Counter from "./components/AppContadores.vue";

export default {
  components: {
    Counter,
  },
};
</script>
<style lang="css" scoped>
.app {
  display: block;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.counters{
  flex-grow: 1;
}
</style>
