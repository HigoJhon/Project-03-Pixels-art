//aprendi assistindo em um canal no youtube chamado zigzag
function mudarCores() {
    let codigo = "123456789ABCDEF"
    let jogodavelha = "#"
    let resultado;

    for (let index = 0; index < 6; index += 1) {
        resultado = jogodavelha += codigo.charAt(Math.floor(Math.random() * codigo.length));
    }
    return resultado
}
function clicou() {

    let resultado = []
    for (let index = 1; index < 4; index += 1) {
        let cores = document.getElementById(`cor${index + 1}`);
        cores.style.backgroundColor = mudarCores();
        resultado.push(cores.style.backgroundColor);

    } localStorage.setItem("colorPalette", JSON.stringify(resultado))
}

function coresSalvas() {
    if (localStorage.getItem("colorPalette") === null) {
        return clicou();
    }


    const corzinha = JSON.parse(localStorage.getItem("colorPalette"));
    for (let index = 1; index < 4; index += 1) {
        let cores = document.getElementsByClassName("color");
        cores[index].style.backgroundColor = corzinha[index - 1];
    }
} coresSalvas();

const todasCores = document.getElementsByClassName("color");
  for (let index = 0 ; index < todasCores.length; index += 1){
    todasCores[index].addEventListener("click", select);
  }
    

function select(func) {
    let input = func.target;

    const selec = document.querySelector(".selected");
    selec.classList.remove("selected");
    input.classList.add("selected");    
}


