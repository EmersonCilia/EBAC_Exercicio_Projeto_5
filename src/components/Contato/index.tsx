import { useEffect, useState } from 'react'
import * as S from './styles'

import { useDispatch } from 'react-redux'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoModel from '../../models/ContatoModel'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoModel

const Contato = ({
  descricao: descricaoOriginal,
  email,
  telefone,
  nome,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [telefoneEdit, setTelefoneEdit] = useState('')
  const [emailEdit, setEmailEdit] = useState('')

  useEffect(() => {
    setDescricao(descricaoOriginal)
    setTelefoneEdit(telefone)
    setEmailEdit(email)
  }, [descricaoOriginal, telefone, email])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <S.Nome>
          {estaEditando && <em>Editando contato: </em>}
          {'\u00a0'}
          {nome}
        </S.Nome>
      </label>
      <S.DadosContato>
        {estaEditando ? (
          <>
            <span>
              <b>telefone:</b>
              <input
                value={telefoneEdit}
                onChange={(e) => setTelefoneEdit(e.target.value)}
              />
            </span>
            <span>
              <b>email:</b>
              <input
                value={emailEdit}
                onChange={(e) => setEmailEdit(e.target.value)}
              />
            </span>
          </>
        ) : (
          <>
            <span>
              <b>telefone:</b> {telefone}
            </span>
            <span>
              <b>email:</b> {email}
            </span>
          </>
        )}
      </S.DadosContato>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    email: emailEdit,
                    telefone: telefoneEdit,
                    nome,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarERemover
              onClick={() => {
                cancelarEdicao()
              }}
            >
              Cancelar
            </S.BotaoCancelarERemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarERemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarERemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
