const mongoose = require('mongoose');

const url ="mongodb+srv://Angeles:1234@cluster0.sxhbf.mongodb.net/news?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true})
.then( ()=>console.log('Conectado a mongo')).catch( (e)=>console.log('El error de conexión es: '+e))
