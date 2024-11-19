const express = require('express'); 
const router = express.Router();
const connection = require('../db');

// Rota para buscar produtos com filtro de categoria e subcategoria
router.get('/', (req, res) => {
    const { categoria, subcategoria } = req.query;

    // Base para buscar todos os produtos
    let query = 'SELECT * FROM produtos';
    const queryParams = [];

    // Adicionando filtros 
    if (categoria) {
        query += ' WHERE categoria = ?';
        queryParams.push(categoria);
    }

    if (subcategoria) {
        query += queryParams.length ? ' AND' : ' WHERE';
        query += ' sub_categoria = ?';
        queryParams.push(subcategoria);
    }

    connection.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Erro ao buscar os produtos:', err);
            res.status(500).send('Erro ao buscar os produtos');
            return;
        }
        res.json(results);
    });
});

module.exports = router;
