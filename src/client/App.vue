<template>
  <div>
    <button v-on:click="contador++">Haz clic en mí</button>
    <p>{{ contador }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    fetchTareas() {
      fetch("http://localhost:3000/tareas")
        .then((response) => response.json())
        .then((data) => {
          this.tareas = data;
        });
    },
    actualizarTarea(index) {
      fetch("http://localhost:3000/tareas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          index: index,
          completada: this.tareas[index].completada,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(`Tarea ${index} actualizada:
${data.completada}`);
        });
    },
  },
};
</script>
