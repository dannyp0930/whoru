<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ gender }}</p>
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
  }
})
export default class AboutView extends Vue {}
</script>>