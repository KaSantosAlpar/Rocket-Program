function carregarPerfil() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"))

  if (!usuario) return

  const tipo = usuario.turma ? "Aluno" : "Professor"

  document.getElementById("perfil").innerHTML = `
    <h3>Bem-vindo, ${usuario.nome}</h3>
    <p>Email: ${usuario.email}</p>
    <p>Tipo: ${tipo}</p>
    <p>${usuario.turma ? "Turma: " + usuario.turma : "Matérias: " + usuario.materias}</p>
  `
}