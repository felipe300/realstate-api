import express from "express";
const app = express();

const inmuebles = [
  { id: 1, direccion: "Cae 123", precio: 150000, tipo: "Apartamento" },
  { id: 2, direccion: "Avenida 456", precio: 230000, tipo: "Casa" },
  { id: 3, direccion: "Carrera 789", precio: 120000, tipo: "Estudio" },
];

app.get("/api/inmuebles", (_req, res) => {
  res.json(inmuebles);
});

export default app;
