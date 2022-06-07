const Noticias = require("../models/modelo_noticias");
//const noticiaScraper = require("../scraping/scrapp");
//traer dependencia cheerio
const cheerio = require("cheerio");
//traer dependencia de request-promise
const request = require("request-promise");
//const { getNoticias } = require('../models/modelo_noticias');

module.exports ={

    async getNoticias(res){
        try{
            const URLi =
  "https://www.investigacionyciencia.es/materias/biologia/biotecnologia/mas-noticias?page=1";

      const $ = await request({
        uri: URLi,
        //transformar datos que se pasa a cheerio enviando el body
        transform: (body) => cheerio.load(body),
          });
          data = await Noticias.getNoticias($);
         // console.log(res);
          return res.status(201).json(data);
        } catch (error){
            console.log(`Error {newsController refresh}: ${error}`);
            return res.status(501).json({
            success: false,
            message: "{noticia duplicada} (ignorar mensaje si son varios links)",
            });
        }

    },
};