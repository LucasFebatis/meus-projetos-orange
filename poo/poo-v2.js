class Ideia {

    // Função responsavel por criar o objeto no mundo dos sentidos
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }

    // Função que representa a ação de contemplar a ideia
    contemplar() {
        console.log(`Contemplando a ideia de ${this.nome}: ${this.descricao}`);
    }
}

class BancoDeIdeias {

    constructor() {
        this.ideias = [];
    }

    // Declaramos a função para adicionar ideias ao banco
    adicionar(ideia) {
        this.ideias.push(ideia);
    }

    // Declaramos a função para mostrar ideias no banco
    mostrar() {
        console.log("Ideias no meu banco:");
        this.ideias.forEach(s => s.contemplar());
    }
}

// Declaramos e Instanciamos um banco de ideias
const bancoDeIdeias = new BancoDeIdeias();

// Chamando a função adicionar para incluir ideias no banco
// bancoDeIdeias.adicionar(new Ideia("Cavalo", "A cópia de um cavalo ideal."));
// bancoDeIdeias.adicionar(new Ideia("Árvore", "Reflexo da árvore perfeita do Mundo das Ideias."));

bancoDeIdeias.adicionar(new Ideia("Alicate", "Ferramenta que representa a ideia de utilidade e engenhosidade."));
bancoDeIdeias.adicionar(new Ideia("Caixa de ferramentas", "Conjunto de ferramentas que simboliza a ideia de organização e preparação."));
bancoDeIdeias.adicionar(new Ideia("Fita dupla face", "Objeto que exemplifica a ideia de adesão e conexão entre superfícies."));

// Chamando a função mostrar para exibir as ideias no banco
bancoDeIdeias.mostrar();
