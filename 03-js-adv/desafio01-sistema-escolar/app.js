class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome
    this.email = email
    this.senha = senha
  }

  exibirPerfil() {
    return this.nome + " - " + this.email
  }
}

class Aluno extends Usuario {
  constructor(nome, email, senha, curso) {
    super(nome, email, senha)
    this.curso = curso
  }

  exibirPerfil() {
    return this.nome + " - Curso: " + this.curso
  }
}

class Professor extends Usuario {
  constructor(nome, email, senha, disciplina) {
    super(nome, email, senha)
    this.disciplina = disciplina
  }

  exibirPerfil() {
    return this.nome + " - Disciplina: " + this.disciplina
  }
}

function criarUsuario() {
  const nome = document.getElementById("nome").value
  const email = document.getElementById("email").value
  const tipo = document.getElementById("tipo").value

  let usuario

  if (tipo === "aluno") {
    usuario = new Aluno(nome, email, "123", "ADS")
  } else {
    usuario = new Professor(nome, email, "123", "JS")
  }

  document.getElementById("resultado").innerHTML +=
    "<p>" + usuario.exibirPerfil() + "</p>"
}