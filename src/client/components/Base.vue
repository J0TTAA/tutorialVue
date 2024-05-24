<template>
      <h3>{{ appStore.dato }}</h3>
  </template>
  
  <script>
  import { useAppStore } from "../stores/index.js";
  
  export default {
    setup() {
      const appStore = useAppStore();
      return {
        appStore,
      };
    }
  };
  </script>
  