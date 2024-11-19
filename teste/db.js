// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', 
  port: 3306,
  user: 'root',
  password: '',
  database: 'tde'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;
