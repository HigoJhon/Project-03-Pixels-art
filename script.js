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
    let resultado;
    for (let index = 1; index < 4; index += 1) {
        let cores = document.getElementById(`cor${index + 1}`);
        resultado = cores.style.background = mudarCores();
        
        
    } return resultado;
}
function salvarCor() {
    let resultado = document.getElementsByClassName("color")
    localStorage.setItem("colorPalette", resultado);
    
} salvarCor()

