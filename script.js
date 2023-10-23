let divQuerNamorar = document.getElementById("querNamorar")


function sim() {
    alert("Estamos oficialmente namorando HAHHA")


}
function nao() {
    let btnNao = document.getElementById("not")
    btnNao.style.position = 'absolute'
    btnNao.style.top = posAleatorio(10, 30)
    btnNao.style.left = posAleatorio(10, 30)
    console.log("aceita que tu vai ter que namorar comigo KAKDKKAKKAKAK")
}

function posAleatorio(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}