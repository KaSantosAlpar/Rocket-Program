function renderizarPokedex(lista) {

const area = document.getElementById("areaCards")
if (!area) return

let html = ""

lista.forEach(ideia => {

const pathReal = ideia.imagem.replace("BadIdeaDex/", "")

html += `
<div class="col-md-4 col-lg-3">
<div class="card-explorar categoria-${ideia.cor} h-100"
onclick="abrirDetalhes('${ideia.nome}')"
style="--cor-atual: var(--cor-neon-${ideia.cor})">

<img src="${pathReal}" class="card-img"
onerror="this.src='https://via.placeholder.com/300x200?text=IMG+ERRO'">

<h4>${ideia.emoji} ${ideia.nome}</h4>

<div class="info-toxica">

<p><strong>📝 DELÍRIO:</strong> ${ideia.descricao}</p>

<div class="toxic-meter-container">
<div class="toxic-meter-fill"
style="width:${ideia.nivel * 20}%; background-color:var(--cor-atual);
box-shadow:0 0 15px var(--cor-atual);">
</div>
</div>

<p class="mt-2"><strong>☢️ TOXICIDADE:</strong> ${ideia.nivel}/5</p>

</div>
</div>
</div>
`

})

area.innerHTML = html
}