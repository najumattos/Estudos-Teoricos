/*
Questão 1: Escreva o comando insertOne para registrar o restaurante abaixo:
Um novo restaurante de comida Mexicana chamado "Muchacho Loco" abriu a primeira unidade "Centro". 
Ele tem avaliação 4.5 e possui o telefone de contato 11-4652-5734.
*/
db.restaurantes.insertOne({
  nome: "Muchacho Loco",
  culinaria: "Mexicana",
  unidade: "Centro",
  avaliacao: 4.5,
  telefone: "11-4652-5734"
});


/*
Questão 2: Escreva o comando insertOne para registrar o pedido abaixo:
O cliente "Ricardo Souza" fez um pedido no "Sushi Zen" de R$ 120.00, pago via "Dinheiro". 
O endereço de entrega é: Rua Amazonas, 500, Bairro Batel, Curitiba. 
*/
db.pedidos.insertOne({
   numero: 103,
    cliente: "Ricardo Souza",
    restaurante: "Sushi Zen",
    itens: [{ nome: "Rodizio", qtd: 1, preco: 120.00 }],
    total: 120,
    status: "Entregue",
    pagamento: "Dinheiro",
    endereco_entrega: { rua: " Rua Amazonas", numero: 500, bairro: "Batel", cidade: "Curitiba" },
    data: new Date()
});


/* 
Questão 3: Escreva o comando insertOne para registrar o pedido abaixo:
O cliente "Marcos Oliveira" fez um pedido no restaurante "Pizza do Bairro". 
O pedido contém:
    2x "Pizza de Calabresa" (R$ 45,00 cada)
    1x "Suco de Laranja" (R$ 8,00)
    Total: R$ 98,00 | Pagamento: "Dinheiro" | Status: "Realizado"
Endereço: Rua das Palmeiras, 10, Bairro Centro, São Paulo.
*/
db.pedidos.insertOne({
   numero: 104,
    cliente: "Marcos Oliveira",
    restaurante: "Pizza Do Bairro",
    itens: [
        { nome: "Pizza de Calabresa", qtd: 2, preco: 45.00 },
        { nome: "Suco de Laranja", qtd: 1, preco: 8.00 }            
    ],
    total: 98.00,
    status: "Realizado",
    pagamento: "Dinheiro",
    endereco_entrega: { rua: " Rua Das Palmeiras", numero: 10, bairro: "Centro", cidade: "São Paulo" },
    data: new Date()
});

/*
Questão 4: Encontrar todos os pedidos pagos via "Pix".
*/
db.pedidos.find({ pagamento: "Pix" });

/*
Questão 5: Encontrar todos os restaurantes com avaliação maior ou igual a 4.7.
*/
db.restaurantes.find({ avaliacao: { $gte: 4.7 } }); //$gte -> Greater Than or Equal >=

/*
Questão 6: Encontrar todos os restaurantes que possuem telefone de contato.
*/
db.restaurantes.find({ "contato.telefone": {$exists: true} } );

/*
Questão 7: O pedido número 102 da Mariana Costa mudou o status para "Entregue". 
Atualize apenas este campo.
*/
db.pedidos.updateOne(
  { numero: 102 },         
  { $set: { status: "Entregue" } } 
);

/*
Questão 8: O restaurante "Pizza do Bairro" recebeu uma ótima crítica.
Incremente a avaliação dele em 0.2 pontos.
*/
db.restaurantes.updateOne(
{ nome: "Pizza do Bairro"},
{ $inc: {avaliacao: 0.2}} //$inc -> incrementar sobre o valor atual

);

/*
Questão 9: Corrigir o número do endereço do pedido 102 para 1550.
*/
db.pedidos.updateOne(
  { numero: 102 },         
  { $set: { "endereco_entrega.numero": 1550 } } 
);

/*
Questão 10: Qual o script para remover todos os pedidos com status "Cancelado"?
*/

db.pedidos.deleteMany(
    { status : "Cancelado"}
)
//enviar para luiz.toratti@cps.sp.gov.br