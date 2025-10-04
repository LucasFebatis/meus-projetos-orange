// Algoritmo para calcular valor total da compra
let produtos = [
  { nome: "Arroz", preco: 20, quantidade: 6 },
  { nome: "Feijão", preco: 10, quantidade: 17 },
  { nome: "Leite", preco: 6, quantidade: 30 }
];

let total = 0;

for (let i = 0; i < produtos.length; i++) {
  console.log("Adicionando " + produtos[i].nome + " de R$ " + produtos[i].preco 
    + ", quantidade " + produtos[i].quantidade);
  total += produtos[i].preco * produtos[i].quantidade;
}

console.log("Total da compra: R$ " + total);
