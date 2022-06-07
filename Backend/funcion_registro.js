const checkerController = {};

checkerController.existanceChecker = async (data, model) => {
    try {

        const checker = await model.aggregate([{$match: {titulo: `${data.titulo}`}}]);
        if(checker.length === 0) {
            const newElement = new model(data);
            const elementSaved = await newElement.save();
            console.log("Noticia registrada correctamente\n", elementSaved);
        } else console.log("Noticia ya registrada en la base de datos");
    } catch (error) {
        console.error(error);
    }
};

module.exports = checkerController;