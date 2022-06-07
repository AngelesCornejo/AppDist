//traer dependencia cheerio
const cheerio = require("cheerio");
//traer dependencia de request-promise
const request = require("request-promise");

const URLi =
  "https://www.investigacionyciencia.es/materias/biologia/biotecnologia/mas-noticias?page=1";

//función que arranca script
async function init() {
  const $ = await request({
    uri: URLi,
    //transformar datos que se pasa a cheerio enviando el body
    transform: (body) => cheerio.load(body),
  });

  let news_links = {
    links: [],
  };

  const article2 = $("ul.newsList")
    .find("li")
    .each((i, el) => {
      let links_model = {
        titulo: "",
        enlace: "",
      };

      //si no es undefined, recupera el valor
      if ($(el).find("a").attr("href"))
        links_model.enlace = $(el).find("a").attr("href");

      /**
     
      AGREGAR "https://www.investigacionyciencia.es/" en cadena porque solo recupera el /news/noticia  
    
    */
      const link = $(el).attr("href");

      if (links_model.enlace != "") news_links.links.push(links_model);
    });
  console.log(news_links);
}

init();
