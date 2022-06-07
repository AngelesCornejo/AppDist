const noticiaModel = require('../models/news_model');
const noticiaScraper = require("../scraping/scrapp");
const checkerController = require('../funcion_registro');

async function SaveNews() {
    try {
        const response = await noticiaScraper.scrapp();
        response.articles.forEach(item => {
            item.fuente = "abc";
            checkerController.existanceChecker(item, noticiaModel)
        });
    } catch (error) {
        console.error(error)
    }
}

SaveNews();