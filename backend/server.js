// backend/server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola desde el Backend!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
