class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome
    this.email = email
    this.senha = senha
  }

  exibirPerfil() {
    return `${this.nome} - ${this.email}`
  }
}

class Aluno extends Usuario {
  constructor(nome, email, senha, turma) {
    super(nome, email, senha)
    this.turma = turma
  }

  exibirPerfil() {
    return `${this.nome} - Turma: ${this.turma}`
  }
}

class Professor extends Usuario {
  constructor(nome, email, senha, materias) {
    super(nome, email, senha)
    this.materias = materias
  }

  exibirPerfil() {
    return `${this.nome} - Matérias: ${this.materias}`
  }
}

// banco de usuários
const usuarios = [
  new Aluno("Ana", "ana@email.com", "123", "ADS"),
  new Professor("Carlos", "carlos@email.com", "123", "JavaScript")
]