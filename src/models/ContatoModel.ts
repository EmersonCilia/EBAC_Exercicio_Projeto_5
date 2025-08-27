export default class ContatoModel {
  nome: string
  email: string
  telefone: string
  descricao: string
  id: number

  constructor(
    nome: string,
    email: string,
    telefone: string,
    descricao: string,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.descricao = descricao
    this.id = id
  }
}
