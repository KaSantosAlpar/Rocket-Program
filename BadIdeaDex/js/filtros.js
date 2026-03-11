function filtrarIdeias(){
  const filtro = document.getElementById("filtroCategoriaSelect").value
  if(filtro==="todas"){
    renderizarExplorar(ideias)
  } else {
    renderizarExplorar(ideias.filter(i=>i.categoria===filtro))
  }
}