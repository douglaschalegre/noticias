var mysql = require('mysql');

var dbConnection = function(){ //atribuimos a função de conexão a uma varivel
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    console.log('Conexão com banco de dados estabelecida');
    return dbConnection; // o retorno do export é a variavel e não a função diretamente
                       // para que seja evitado estabelecer uma conexão desnecessária
}