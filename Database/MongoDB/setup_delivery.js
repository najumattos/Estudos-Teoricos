/*
 * ATIVIDADE PRATICA: OPERAÇÕES CRUD - MONGODB
*/

const db = db.getSiblingDB('entrega_rapida');

db.restaurantes.drop();
db.pedidos.drop();

db.restaurantes.insertMany([
  {
    nome: "Pizza do Bairro",
    cozinha: "Italiana",
    unidades: ["Centro", "Jardins"],
    avaliacao: 4.8,
    contato: { telefone: "11-4002-8922", email: "contato@pizzabairro.com" }
  },
  {
    nome: "Burguer Rei",
    cozinha: "Lanches",
    unidades: ["Shopping", "Centro"],
    avaliacao: 4.2,
    contato: { instagram: "@burguerrei" }
  },
  {
    nome: "Sushi Zen",
    cozinha: "Japonesa",
    unidades: ["Batel"],
    avaliacao: 4.9,
    opcoes_vegano: true
  }
]);

db.pedidos.insertMany([
  {
    numero: 101,
    cliente: "Carlos Silva",
    restaurante: "Pizza do Bairro",
    itens: [{ nome: "Pizza Margherita", qtd: 1, preco: 55.00 }],
    total: 55.00,
    status: "Entregue",
    pagamento: "Cartão",
    endereco_entrega: { rua: "Rua das Flores", numero: 123, bairro: "Centro", cidade: "São Paulo" },
    data: new Date()
  },
  {
    numero: 102,
    cliente: "Mariana Costa",
    restaurante: "Burguer Rei",
    itens: [{ nome: "Combo Duplo", qtd: 2, preco: 35.00 }],
    total: 70.00,
    status: "Preparando",
    pagamento: "Pix",
    endereco_entrega: { rua: "Av. Paulista", numero: 1500, bairro: "Bela Vista", cidade: "São Paulo" },
    data: new Date()
  }
]);