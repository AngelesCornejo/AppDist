const mongoose = require("mongoose");

const noticiaSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    //imagen: {type: String, default: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"},
    autor: {type: String, required: true},
    resumen: {type: String, required: true},
    direccionNoticia: {type: String, required: true}
});

const ModeloNoticias = mongoose.model("noticias", noticiaSchema);
module.exports = ModeloNoticias;