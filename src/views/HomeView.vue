<template>
  <div class="home">
    <form v-on:submit="handleSubmit">
      <input v-model.trim="name">
      <button @click="handleSubmit">입력</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  methods: {
    handleSubmit: function (e: SubmitEvent) {
      e.preventDefault();
      const name = this.name;
      if (name) {
        this.$store.dispatch('getName', name)
      }
      this.name = null;
    }
  },
})
export default class HomeView extends Vue {}
</script>
