function abrirExplorar(){

document.getElementById("areaRoleta").style.display="none"
document.getElementById("areaExplorar").style.display="block"

renderizarCards(ideias)

}

function voltarRoleta(){

document.getElementById("areaExplorar").style.display="none"
document.getElementById("areaRoleta").style.display="block"

}

function renderizarCards(lista){

const area = document.getElementById("areaCards")

area.innerHTML=""

lista.forEach(ideia=>{

area.innerHTML+=`

<div class="col-md-4 mb-4">

<div class="card card-dark">

<img src="${ideia.imagem}" class="card-img-top">

<div class="card-body">

<h5>${ideia.emoji} ${ideia.nome}</h5>

<p>${ideia.descricao}</p>

<p><b>Categoria:</b> ${ideia.categoria}</p>

<p>☢️ ${ideia.nivel}/5</p>

</div>

</div>

</div>

`

})

}

function filtrarIdeias(){

const filtro = document.getElementById("filtroCategoria").value

if(filtro === "todas"){

renderizarCards(ideias)

return
}

renderizarCards(ideias.filter(i=>i.categoria===filtro))

}