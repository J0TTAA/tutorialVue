import express from "express";
import cors from 'cors';
const app = express();
app.use(cors('http://localhost:5173'));
app.use(express.json());

let tareas = [
    { nombre: 'Tarea 1', completada: false },
    { nombre: 'Tarea 2', completada: false },
    { nombre: 'Tarea 3', completada: false }
    ];
    app.get("/tareas", (req, res) => {
    res.json(tareas);
    });
    app.post("/tareas", (req, res) => {
    const { index, completada } = req.body;
    tareas[index].completada = completada;
    console.log(`Tarea ${index} actualizada: ${completada}`);
    res.json(tareas[index]);
});