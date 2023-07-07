let listaDeAnimes = [
  {
    nome: "Tengoku Daimakyou",
    img: "./img/1.png",
    genero: "Aventura, Cienca Ficção",
  },
  {
    nome: "Oshi no Ko",
    img: "./img/2.png",
    genero: "Drama, Sobrenatural",
  },
  {
    nome: "Kono Subarashii Sekai ni Bakuen wo!",
    img: "./img/3.png",
    genero: "Comédia, Fantasia",
  },
  {
    nome: "Boku no Kokoro no Yabai Yatsu",
    img: "./img/4.png",
    genero: "Comédia, Romance",
  },
  {
    nome: "Mahou Shoujo Magical Destroyers",
    img: "./img/5.png",
    genero: "Ação, Comédia, Fantasia",
  },
  {
    nome: "Kaminaki Sekai no Kamisama Katsudou",
    img: "./img/6.png",
    genero: "Comédia, Fantasia",
  },
];

listaDeAnimes.map((anime, posicao) => {
  let cardAnime = document.getElementById("card-anime");
  cardAnime.innerHTML += `
    <div class="col-md-4">
        <div class="card m-2">
            <img src="${anime.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${anime.nome}</h5>
                <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
            </div>
        </div>
    </div>
    `

});

function zoomImg(posicao){
    let animeSelecionado = listaDeAnimes[posicao];
    document.getElementById("nomeAnime").innerHTML=animeSelecionado.nome;
    document.getElementById("generoAnime").innerHTML=animeSelecionado.genero;
    document.getElementById("imgModal").src=animeSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}

function alterarTema(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTema").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTema").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
}
