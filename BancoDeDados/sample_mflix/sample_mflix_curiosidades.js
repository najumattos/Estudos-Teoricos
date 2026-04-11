//===============================================================================
// Importar os dados do arquivo movies.json através da ferramenta mongoimport
// No terminal:
// mongoimport --db sample_mflix_db --collection movies --file movies.json
//===============================================================================

//mongosh -> use sample_mflix_db -> db.movies.countDocuments() 

const db = db.getSiblingDB('sample_mflix_db');

// 1. Qual o filme mais antigo do banco de dados?
db.movies.find().sort({ "year": 1 }).limit(1)

// 2. Qual o filme mais longo (maior duração)?
db.movies.find().sort({ "runtime": -1 }).limit(1)

// 3. O primeiro filme brasileiro registrado no sistema?
db.movies.find(
    { "countries": "Brazil" })
    .sort({ "year": 1 })
    .limit(1)

// 4. Qual filme tem a maior nota no IMDb com pelo menos 50.000 votos?
db.movies.find(
    { "imdb.votes": { $gte: 50000 } })
    .sort({ "imdb.rating": -1 })
    .limit(1)

// 5. Quantos filmes o mestre Alfred Hitchcock tem nesta base?
db.movies.countDocuments(
    { "director": "Alfred Hitchcock" }
)

// 6. Qual o filme com o maior número de comentários de usuários (mflix)?
db.movies.find().sort(
    { "num_mflix_comments": -1 })
    .limit(1)

// 7. Existe algum filme que ganhou nota 10.0 no IMDb?
db.movies.find({ 
    "imdb.rating": 10.0 }, 
    { "title": 1, "_id": 0 }
)

// 8. Qual o curta-metragem (Short) mais bem avaliado?
db.movies.find(
    { "genres": "Short" })
    .sort({ "imdb.rating": -1 })
    .limit(1)

// 9. Buscando por palavras-chave: Quantos filmes têm "Zombie" no resumo (plot)?
db.movies.countDocuments(
    { "plot": /Zombie/i }
)

// 10. Documentários brasileiros: Existem?
db.movies.find(
    { "genres": "Documentary", "countries": "Brazil" },
    { "title": 1, "_id": 0 }
)