const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir el manejo de datos en formato JSON
app.use(express.json());

// Endpoint para obtener información sobre lactancia
app.get('/api/lactancia', (req, res) => {
    const lactanciaInfo = {
        title: "Lactancia",
        description: "Consejos y recomendaciones para la lactancia.",
        images: [
            "/images/lactancia1.jpg",
            "/images/lactancia2.jpg",
            "/images/lactancia3.jpg"
        ]
    };
    res.json(lactanciaInfo); // Envía la información como un objeto JSON
});

// Endpoint para obtener información sobre alimentación
app.get('/api/alimentacion', (req, res) => {
    const alimentacionInfo = {
        title: "Alimentación",
        description: "Información sobre la dieta adecuada para bebés.",
        images: [
            "/images/alimentacion1.jpg",
            "/images/alimentacion2.jpg"
        ]
    };
    res.json(alimentacionInfo); // Envía la información como un objeto JSON
});

// Iniciar servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
