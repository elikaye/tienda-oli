const express = require('express');
const router = express.Router();

// Simulación de una base de datos en memoria
let productos = [];

// Obtener todos los productos
router.get('/', (req, res) => {
    res.json(productos);
});

// Añadir un nuevo producto
router.post('/', (req, res) => {
    const producto = req.body;
    productos.push(producto);
    res.status(201).json(producto);
});

module.exports = router;
