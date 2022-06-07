//traer dependencia cheerio
const cheerio = require("cheerio");
//traer dependencia de request-promise
const request = require("request-promise");

const express = require("express");
const ModeloNoticias = require("../models/news_model");
//const CategoriesModel = require("../db/category");
const Noticias = {};

let news_links = {
    links: [],
  };


Noticias.create = async (noticias_model) => {
    var Model = new ModeloNoticias();
    Model.titulo = noticias_model.titulo;
    //Model.imagen = noticias_model.imagen;
    Model.autor = noticias_model.autor;
    Model.resumen = noticias_model.resumen;
    Model.direccionNoticia = noticias_model.direccionNoticia;
  
    //console.log(Model);
  
    Model.save((err, data) => {
      if (err) {
        console.error(err);
      } else {
        return data;
      }
    });
  };

  Noticias.getNoticias = async ($, URLi) => {
    

    const article2 = $("ul.newsList")
    .find("li")
    .each((i, el) => {
      let noticias_model = {
        titulo: "",
        autor: "",
        //categoria: "",
        resumen: "",
        enlace: "",
      };

      if ($(el).find("a").attr("href"))
      noticias_model.titulo = $(el).find("a").text();
      noticias_model.autor = $(el).find("ul.documentInfo").text();
      noticias_model.resumen = $(el).find("div.abstract").text();
      noticias_model.enlace = $(el).find("a").attr("href");
      //noticias_model.categoria = $(el).find("p.discipline").text();
      const link = $(el).attr("href");

      if (noticias_model.enlace != "") {
        noticias_model.enlace = "https://www.investigacionyciencia.es"+noticias_model.enlace;
        news_links.links.push(noticias_model);
      }


    } );
    Noticias.create(noticias_model);
    console.log(news_links);
  }  

  //console.log(noticias_model);
  module.exports = Noticias;
