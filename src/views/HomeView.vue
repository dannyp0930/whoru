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
  data: function () {
    return {
      name: null,
    }
  },
  methods: {
    handleSubmit: function (e: SubmitEvent) {
      e.preventDefault();
      const name = this.name;
      if (name) {
        this.$store.dispatch('getName', name)
        this.$store.dispatch('getAge', name)
        this.$store.dispatch('getGender', name)
        this.$store.dispatch('getCountry', name)
        this.$router.push('/about');
      }
    }
  },
})
export default class HomeView extends Vue {}
</script>
