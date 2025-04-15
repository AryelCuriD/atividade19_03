document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("imagemMenu").src = "https://preview.redd.it/qigbmfa8hmb51.jpg?width=1080&crop=smart&auto=webp&s=0220c84b85bcf55ca3b0188cf637924129af8975"
    document.getElementById("botaoComecar").style.display = "block";
    document.getElementById("novosBotoes").style.display = "none";
});

function mudarMenu(){
    document.getElementById("imagemMenu").src = "images/menuMundo.jpg"
    document.getElementById("botaoComecar").style.display = "none";
    document.getElementById("botaoSair").style.display = "none";
    document.getElementById("novosBotoes").style.display = "block";
}

function voltar(){
    document.getElementById("imagemMenu").src = "https://preview.redd.it/qigbmfa8hmb51.jpg?width=1080&crop=smart&auto=webp&s=0220c84b85bcf55ca3b0188cf637924129af8975"
    document.getElementById("botaoComecar").style.display = "block";
    document.getElementById("botaoSair").style.display = "block";
    document.getElementById("novosBotoes").style.display = "none";
}

function sair(){
    window.close();
}
function tocarAudioEGif() {
    // Lista de músicas
    var musicas = [
        "musica/Aria Math - C418.mp3",
        "musica/Beggining - C418.mp3",
        "musica/Clark - C418.mp3",
        "musica/Haggstrom - C418.mp3",
        "musica/Living Mice - C418.mp3",
        "musica/Mice on Venus - C418.mp3",
        "musica/Moog City - C418.mp3",
        "musica/Subwoofer Lullaby - C418.mp3",
        "musica/Sweden - C418.mp3",
        "musica/Wet Hands - C418.mp3",
    ];

    var imagem = document.getElementById("imagem"); // Controlar a imagem
    var audio = document.getElementById("meuAudio"); // Controlar o <audio>

    // Se estiver tocando, pausa e volta a imagem padrão
    if (!audio.paused && imagem.src == "https://static.wikia.nocookie.net/minecraft/images/6/63/Note_Block_animate.gif/revision/latest/scale-to-width/360?cb=20201121162502") {
        audio.pause();
        imagem.src = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/18/Note_Block_JE2_BE2.png/revision/latest/scale-to-width-down/268?cb=20220311024036";
        imagem.style.height = "100px";
        return;
    }

    // Escolhe uma música aleatória
    audio.src = musicas[Math.floor(Math.random() * musicas.length)]; // Música aleatória
    audio.play();

    // Altera a imagem pra GIF com transição suave
    imagem.src = "https://static.wikia.nocookie.net/minecraft/images/6/63/Note_Block_animate.gif/revision/latest/scale-to-width/360?cb=20201121162502";
    imagem.style.height = "150px";
}