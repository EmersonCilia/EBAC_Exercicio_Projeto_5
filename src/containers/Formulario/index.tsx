import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import { BotaoSalvar, Campo, MainContainer, Nome } from '../../styles'
import { Form } from './styles'
import { cadastar } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const contatos = useSelector((state: RootReducer) => state.contatos.itens)

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()

    const emailExiste = contatos.some(
      (c) => c.email.toLowerCase() === email.toLowerCase()
    )
    const telefoneExiste = contatos.some((c) => c.telefone === telefone)

    if (telefoneExiste) return alert('Telefone já registrado')

    if (emailExiste) {
      const continuar = window.confirm(
        'Email já registrado. Deseja salvar mesmo assim?'
      )
      if (!continuar) return
    }

    dispatch(
      cadastar({
        nome,
        email,
        telefone,
        descricao
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Nome>Novo contato</Nome>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <Campo
          as={InputMask}
          mask="(99)-99999-9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          type="tel"
          placeholder="Telefone"
          required
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <Campo
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          placeholder="Descrição"
        />

        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
