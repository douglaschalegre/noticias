module.exports = function(app){
    app.get('/inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function(req,res){
        var noticias = req.body;

        var con = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticias, con, function(error, result){
            res.redirect('/noticias')
        });
    });
}