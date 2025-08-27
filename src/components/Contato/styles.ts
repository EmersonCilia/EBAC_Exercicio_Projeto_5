import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    margin-bottom: 16px;
  }
`

export const Nome = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
`
export const DadosContato = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;

  span {
    line-height: 14px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`
export const Descricao = styled.textarea`
  color: #8b88b8;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarERemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
