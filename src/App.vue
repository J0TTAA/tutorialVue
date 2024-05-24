<template>
  <div>
    <button v-on:click="contador++">Haz clic en mí</button>
    <p> {{ contador }}</p>
  </div>
  </template>


  <script>
  export default {
  data() {
  return {
  contador: 0
  }
  }
  }
  </script>