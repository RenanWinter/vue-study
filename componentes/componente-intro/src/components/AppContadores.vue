<template>
  <div class="contadores-container">
    <Contador v-for="n in items" :key="n"></Contador>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Contador from "./Contador.vue";

export default defineComponent({
  props: ["quantity"],
  data() {
    return {
      items: 1,
    };
  },
  components: {
    Contador,
  },
  mounted() {
    console.log(this.quantity);
    this.items = this.quantity ?? 2;
  },
});
</script>

<style scoped>

.contadores-container{
  display: block;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
</style>
