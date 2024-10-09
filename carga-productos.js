const express = require('express');
const router = express.Router();

// Ejemplo de rutas de productos
router.get('/', (req, res) => {
    res.json({ message: 'Lista de productos' });
});

router.post('/', (req, res) => {
    const { nombre, precio } = req.body;
    // Código para guardar un nuevo producto en la base de datos, por ejemplo
    res.status(201).json({ message: 'Producto creado', nombre, precio });
});

module.exports = router;
