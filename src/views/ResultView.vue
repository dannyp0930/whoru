<template>
  <div class="about">
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ gender }}</p>
    <p>{{ country }}</p>
    <button @click="handleClick">다시하기</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex';

@Options({
  computed: {
    ...mapState([
      'name',
      'age',
      'gender',
      'country',
    ])
  },
  methods: {
    handleClick: function() {
      this.$router.push('/');
    }
  }
})
export default class AboutView extends Vue {}
</script>>