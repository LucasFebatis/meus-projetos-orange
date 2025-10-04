// Usando um objeto para representar um produto
let produtoArroz = {
  nome: "Arroz",
  preco: 25.90,
  quantidade: 2
};

let produtoFeijao = {
  nome: "Feijão",
  preco: 10.50,
  quantidade: 3
};

console.log("Produto 1:", produtoArroz);
console.log("Produto 2:", produtoFeijao);

let listaDeCompras = [produtoArroz, produtoFeijao];

let totalDaCompra = 0;

for (let i = 0; i < listaDeCompras.length; i++) {
  let produto = listaDeCompras[i];
  let total = produto.preco * produto.quantidade;
  totalDaCompra += total;
  console.log("Total a pagar pelo " + produto.nome + ":", total);
}

// Calculando o valor total
console.log("Total a pagar pela compra:", totalDaCompra);
