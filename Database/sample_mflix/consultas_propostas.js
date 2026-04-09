
// Propor 5 nos consultas (com soluções).

 //1. Filme com mais mais votos no IMDb.
db.movies.find( {},
     { "title": 1, "_id": 0 })
     .sort({ "imdb.votes": -1 })
     .limit(1)
     
 //2. Filme brasileiro com mais votos e com nota maior que 9.0 
db.movies.find(
    { "countries": "Brazil" }, 
    { "title": 1, "imdb.votes": 1, "imdb.rating": 1, "_id": 0 })
    .sort({ "imdb.votes": -1 })
    .limit(1)
