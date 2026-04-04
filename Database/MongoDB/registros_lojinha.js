const db = db.getSiblingDB('lojinha');

db.usuarios.drop();
db.produtos.drop();
db.pedidos.drop();

const nomesReais = ["Ricardo Oliveira", "Beatriz Souza", "Marcos Pontes", "Aline Ferreira", "Thiago Silva", "Julia Costa", "Enzo Almeida", "Sophia Lima", "Gabriel Santos", "Larissa Meireles"];
const provedoresEmail = ["gmail.com", "outlook.com", "uol.com.br", "empresa.com.br"];
const bairros = ["Centro", "Jardins", "Vila Mariana", "Batel", "Savassi", "Barra da Tijuca"];
const cidadesBrasil = [
    { c: "São Paulo", e: "SP" }, { c: "Rio de Janeiro", e: "RJ" }, { c: "Barra Bonita", e: "SP" }, { c: "Jaú", e: "SP" }, { c: "Bauru", e: "SP" }, { c: "Campinas", e: "SP" },
    { c: "São Carlos", e: "SP" }, { c: "Ribeirão Preto", e: "SP" }, { c: "Curitiba", e: "PR" }, { c: "Belo Horizonte", e: "MG" }
];

const catalogo = [
    { n: "Teclado Mecânico RGB", cat: "Periféricos", p: [250, 450] },
    { n: "Mouse Gamer 12000 DPI", cat: "Periféricos", p: [120, 300] },
    { n: "Monitor 24' IPS 144Hz", cat: "Monitores", p: [850, 1300] },
    { n: "Headset 7.1 Surround", cat: "Áudio", p: [200, 600] },
    { n: "Placa de Vídeo RTX 4060", cat: "Hardware", p: [1800, 2500] },
    { n: "SSD NVMe 1TB", cat: "Hardware", p: [350, 550] },
    { n: "Cadeira Gamer Ergonômica", cat: "Móveis", p: [900, 1800] }
];

nomesReais.forEach(nomeCompleto => {
    const local = cidadesBrasil[Math.floor(Math.random() * cidadesBrasil.length)];
    const primeiroNome = nomeCompleto.split(" ")[0].toLowerCase();
    
    db.usuarios.insertOne({
        nome: nomeCompleto,
        email: `${primeiroNome}.${Math.floor(Math.random()*99)}@${provedoresEmail[Math.floor(Math.random()*provedoresEmail.length)]}`,
        data_nascimento: new Date(1985 + Math.random() * 20, Math.random() * 12, Math.random() * 28),
        interesses: ["tecnologia", "games", "home-office"].filter(() => Math.random() > 0.5),
        endereco: {
            logradouro: `Rua ${Math.floor(Math.random()*500 + 1)}`,
            bairro: bairros[Math.floor(Math.random()*bairros.length)],
            cidade: local.c,
            estado: local.e
        }
    });
});

catalogo.forEach(item => {
    ["Logitech", "Razer", "Corsair"].forEach(marca => {
        db.produtos.insertOne({
            nome: `${item.n} ${marca}`,
            preco: parseFloat((Math.random() * (item.p[1] - item.p[0]) + item.p[0]).toFixed(2)),
            estoque: Math.floor(Math.random() * 50) + 5,
            categoria: item.cat,
            especificacoes: { marca: marca, garantia: "12 meses", cor: null }
        });
    });
});

const users = db.usuarios.find().toArray();
const prods = db.produtos.find().toArray();

for (let i = 0; i < 40; i++) {
    const u = users[Math.floor(Math.random() * users.length)];
    const p = prods[Math.floor(Math.random() * prods.length)];
    const qtd = Math.random() > 0.8 ? 2 : 1;
    
    db.pedidos.insertOne({
        data: new Date(2025, Math.floor(Math.random() * 3), Math.floor(Math.random() * 28)),
        cliente: { id: u._id, nome: u.nome, email: u.email },
        itens: [{
            produto_id: p._id,
            nome: p.nome,
            preco_unit: p.preco,
            quantidade: qtd
        }],
        total: parseFloat((p.preco * qtd).toFixed(2)),
        status: Math.random() > 0.1 ? "Entregue" : "Cancelado"
    });
}