const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001
;
const productosRouter = require('.routes/productos'); // Asegúrate de la ruta y el nombre del archivo son correctos

// Middleware para mejorar la seguridad
app.use(helmet());

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/productos', productosRouter);

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('¡Hola desde el backend de mi ecommerce!');
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
