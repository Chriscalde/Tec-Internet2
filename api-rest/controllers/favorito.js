var Favorito = require('../models/favoritos');

function saveFavorito(req,res){
    var favorito = new Favorito();
    var params = req.body;

    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save((err,favoritoStored) => {
        if(err){
            res.status(500).send({message:"Error al Guardar"});
        }
        res.status(200).send({favorito:favoritoStored});
    });
}

function update(req,res){
    var favoritoId = req.params.id;
    var update = req.body;

    Favorito.findByIdAndUpdate(favoritoId,update,(err,favoritoUpdated) =>{
        if(err){
            res.status(500).send({message:"Error al mostrar"});
        }
        res.status(200).render('update.pug',{favorito:favoritoUpdated});
    });
}

function list(req,res){
    Favorito.find({}).sort('-title').exec((err,favoritos) =>{
        if(err){
            res.status(500).send({message:"Error al mostrar"})
        }

        console.log(favoritos);
        res.status(200).render('index.pug',{title:"CRUD", favoritos: favoritos});
    });
}

function listOne(req,res){
    var lookingFor = req.params.stringValue;

    Favorito.findById(lookingFor,(err,favorito) =>{
        if(err){
            res.status(500).send({message:"Error al mostrar"});
        }
        res.status(200).render('listOne.pug',{favorito:favorito});
    });
}

module.exports = {
    list,
    listOne,
    update,
    saveFavorito,
}