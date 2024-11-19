const express = require('express');
const cors = require('cors');
const connection = require('./db'); 
const produtosRoutes = require('./api/produtos'); 

const app = express();
const PORT = 3000;

app.use(cors()); 

app.use('/api/produtos', produtosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
