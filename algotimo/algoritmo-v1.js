// Algoritmo simples: lista de compras
let listaDeCompras = ["Arroz", "Feijão", "Leite", "Macarrão"];
console.log("Passo 1: Pegar o carrinho");

// Passando pela lista
for (let i = 0; i < listaDeCompras.length; i++) {
  console.log("Passo " + (i + 2) + ": Colocar " + listaDeCompras[i] + " no carrinho");
  // Texto + Expressão Mátematica + texto + variável (item da lista sendo acessado via indice) + texto
}

console.log("Passo " + (listaDeCompras.length + 2) + ": Ir para o caixa - agora são " + listaDeCompras.length + " itens no carrinho");

console.log("Programa finalizado! Boa refeição!");
