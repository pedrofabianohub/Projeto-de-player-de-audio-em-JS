const play = document.getElementById('btnPlay')
const musica = document.getElementById('musica')
const skip = document.getElementById('btnAvancar')
const back = document.getElementById('btnVoltar')
const fotoAlbum = document.getElementById('fotoAlbum')
const nomeMusica = document.getElementById('nomeMusica')
const nomeAutor = document.getElementById('nomeAutor')
const duracaoMusica = document.getElementById('duracao')
const progressBar = document.getElementById('progressBar')
const progressBarContainer = document.getElementById('progressBarContainer')

const musicasArray = [
    {
        nome: 'Invicto',
        autor: 'Felipe Ret',
        foto: 'https://umpontocerto.files.wordpress.com/2015/11/ret.png'
    },
    {
        nome: 'Isso que é vida',
        autor: 'Felipe Ret',
        foto: 'https://umpontocerto.files.wordpress.com/2015/11/ret.png'
    },
    {
        nome: 'Chefe do crime perfeito',
        autor: 'Felipe Ret',
        foto: 'https://umpontocerto.files.wordpress.com/2015/11/ret.png'
    },
    {
        nome: 'Livre e Triste',
        autor: 'Felipe Ret',
        foto: 'https://umpontocerto.files.wordpress.com/2015/11/ret.png'
    },
    {
        nome: 'Faça você mesmo',
        autor: 'Felipe Ret',
        foto: 'https://pbs.twimg.com/media/DonGN5AXUAA9nWZ.jpg'
    }
]

const numeroMusicas = 5

let tocando = false
let musicaAtual = 1

const playPause = () => {

    if(tocando == false){
        musica.play()
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        tocando = true
    }else{
        musica.pause()
        play.classList.remove('bi-pause-fill')
        play.classList.add('bi-play-fill')
        tocando = false
    }

}

const skipFunc = () => {
    if(musicaAtual === numeroMusicas){
        musicaAtual = 1
    }else{
        musicaAtual = musicaAtual + 1
    }
    musica.src = `./musicas/feliperet/${musicaAtual}.mp3`
    tocando = false
    playPause()
}

const backFunc = () => {

    if(musicaAtual === 1){
        musicaAtual = numeroMusicas
    }else{
        musicaAtual = musicaAtual - 1
    }
    musica.src = `./musicas/feliperet/${musicaAtual}.mp3`
    tocando = false
    playPause()
}

const trocarDados = () => {
    switch (musicaAtual) {
        case musicaAtual:
            fotoAlbum.src = musicasArray[musicaAtual - 1].foto
            nomeMusica.innerText = musicasArray[musicaAtual - 1].nome
            nomeAutor.innerText = musicasArray[0].autor
            duracao.innerText = musica.duration
            break;
        default:
            nomeMusica.innerText = "Música não encontrada"
            nomeAutor.innerText = "Error"
    }
};

const duracaoFunc = () => {

    let duracao = musica.duration
    let minutos = Math.floor(duracao / 60)
    let segundos = Math.floor(duracao % 60)

    minutos = minutos < 10 ? '0' + minutos : minutos
    segundos = segundos < 10 ? '0' + segundos : segundos

    duracaoMusica.innerText = minutos + ":" + segundos


}

musica.addEventListener('loadedmetadata', () => {
    duracaoFunc();
});

musica.addEventListener('timeupdate', () => {
    let progresso = (musica.currentTime / musica.duration) * 100
    progressBar.style.width = `${progresso}%`  
})

progressBar.addEventListener('mouseenter', () => {
    progressBar.classList.add('bi')
    progressBar.classList.add('bi-circle-fill')
})

progressBar.addEventListener('mouseout', () => {
    progressBar.classList.remove('bi')
    progressBar.classList.remove('bi-circle-fill')
})

duracaoFunc()
trocarDados()
play.addEventListener('click', () => {playPause(), duracaoFunc()})
skip.addEventListener('click', () => { skipFunc(), trocarDados(), duracaoFunc()})
back.addEventListener('click', () => { backFunc(), trocarDados(), duracaoFunc()})


