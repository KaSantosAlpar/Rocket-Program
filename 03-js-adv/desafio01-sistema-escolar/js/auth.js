function login(event) {
  event.preventDefault()

  const email = document.getElementById("email").value.trim()
  const senha = document.getElementById("senha").value.trim()
  const erro = document.getElementById("erro")

  erro.innerText = ""

  if (!email || !senha) {
    erro.innerText = "Preencha todos os campos"
    return
  }

  const usuario = usuarios.find(u =>
    u.email === email && u.senha === senha
  )

  if (!usuario) {
    erro.innerText = "Email ou senha inválidos"
    return
  }

  localStorage.setItem("usuarioLogado", JSON.stringify({
    nome: usuario.nome,
    email: usuario.email,
    turma: usuario.turma || null,
    materias: usuario.materias || null
  }))

  alert("Login realizado com sucesso!")
  window.location.href = "perfil.html"
}

function verificarAcesso() {
  const usuario = localStorage.getItem("usuarioLogado")

  if (!usuario) {
    window.location.href = "index.html"
  }
}

function logout() {
  localStorage.removeItem("usuarioLogado")
  window.location.href = "index.html"
}