var app = require('./config/server.js');

var rotaIndex = require('./app/routes/index')(app); //adicionando o modulo e já executando ele
var rotaInclusaoNoticia = require('./app/routes/inclusao_noticia')(app);
var rotaNoticias = require('./app/routes/noticias')(app);

app.listen(3000, function(){
    console.log("Escutando na porta 3000");
});