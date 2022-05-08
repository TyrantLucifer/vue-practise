<template>
  <div>
    <CountExample></CountExample>
    <hr>
    <PersonExample></PersonExample>
  </div>
</template>

<script>
import CountExample from "./components/CountExample.vue";
import PersonExample from "./components/PersonExample.vue";

export default {
  name: 'App',
  components: {
    CountExample,
    PersonExample
  }
}
</script>

<style>
hr {
  margin-top: 30px;
}
</style>
