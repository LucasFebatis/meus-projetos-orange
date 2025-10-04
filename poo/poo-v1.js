// Classe Ideia - esta no mundo das ideias
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

// Criando instâncias da classe Ideia - esta no mundo dos sentidos
const ideiaJustica = new Ideia("Justiça", "A ideia de equilíbrio e verdade além das aparências.");

const ideiaLiberdade = new Ideia("Liberdade", "O despertar de quem sai da caverna e vê a realidade.");
const ideiaIgualdade = new Ideia("Igualdade", "A percepção de que todos são iguais na essência.");
const ideiaFraternidade = new Ideia("Fraternidade", "A união dos indivíduos em busca do bem comum.");

const ideiaConhecimento = new Ideia("Conhecimento", "A passagem das sombras para a luz da verdade.");

ideiaJustica.contemplar();
ideiaLiberdade.contemplar();
ideiaConhecimento.contemplar();

ideiaIgualdade.contemplar();
ideiaFraternidade.contemplar();
