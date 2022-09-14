<template>
  <div class="home">
    <form v-on:submit="handleSubmit">
      <h1>당신의 이름을 영어로 입력하세요</h1>
      <input v-model.trim="name">
      <button @click="handleSubmit">결과 보기</button>
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
        this.$router.push('/result');
      }
    }
  },
})
export default class HomeView extends Vue {}
</script>
