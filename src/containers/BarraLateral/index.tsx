import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import { Botao, Campo } from '../../styles'
import * as S from './styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtros)

  return (
    <S.Aside>
      {mostrarFiltros ? (
        <>
          <Campo
            type="text"
            placeholder="Buscar contato"
            value={termo}
            onChange={(e) => dispatch(alteraTermo(e.target.value))}
          />
        </>
      ) : (
        <Botao onClick={() => navigate('/')}>voltar a lista de contatos</Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
