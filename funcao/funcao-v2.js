//Página 1/2
// Histórico da balada
let playlist = [];

// Função com dois parâmetros
function tocarFaixa(nomeDaMusica, artista) {
    let faixa = nomeDaMusica + " - " + artista;
    console.log("🎶 Agora tocando: " + faixa);
    playlist.push(faixa); // adiciona a faixa no histórico
}

//Página 2/2
// Chamando a função com diferentes músicas e artistas
tocarFaixa("Funk do If", "DJ Condicional");
tocarFaixa("Remix do For", "Loop Master");
tocarFaixa("Techno das Funções", "MC Return");
tocarFaixa("Asa Branca", "Marilia Mendonça");

// Mostrar o histórico de músicas tocadas
console.log("\n📀 Histórico da balada:");
console.log(playlist);
