//===============================================================================
// Importar os dados do arquivo movies.json através da ferramenta mongoimport
// No terminal:
// mongoimport --db sample_mflix --collection movies --file movies.json
//===============================================================================

const db = db.getSiblingDB('sample_mflix_db');

// 0) Conheça a estrutura dos documentos.
const example = db.movies.findOne();
console.log(example);
// 1) Filmes lançados em 1995.
db.movies.find(
    { "year": 1995 }, 
    { "title": 1, "_id": 0 }
)

// 2) Filmes com o gênero "Comedy".
db.movies.find(
    { "genres": "Comedy" },
    { "title": 1, "_id": 0 }
)

// 3) Filmes com nota IMDb maior que 9.0.
db.movies.find(
    { "imdb.rating": { $gt: 9.0 } },
    { "title": 1, "imdb.rating": 1, "_id": 0 }
)

// 4) Filmes antes de 1920 com o campo fullplot preenchido.
db.movies.find(
    { "year": { $lt: 1920 }, "fullplot": { $exists: true, $ne: null } }, 
    { "title": 1, "_id": 0 }
)

// 5) Filmes com mais de 200.000 votos no IMDb.
db.movies.find(
    { "imdb.votes": { $gt: 200000 } }, 
    { "title": 1, "imdb.votes": 1, "_id": 0 }
)

// 6) Filmes com "Tom Hanks" no elenco (cast) (Apenas título e ano).
db.movies.find(
    { "cast": "Tom Hanks" }, 
    { "title": 1, "year": 1, "_id": 0 }
)

// 7) Filmes de "Christopher Nolan" (Apenas título e ano).
db.movies.find(
    { "director": "Christopher Nolan" }, 
    { "title": 1, "year": 1, "_id": 0 }
)

// 8) Filmes do "Brazil" com nota maior que 7.5.
db.movies.find(
    { "countries": "Brazil", "imdb.rating": { $gt: 7.5 } },
    { "title": 1, "_id": 0 }
)
