import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'
import { Lista } from './style'
import { RootReducer } from '../../store/index'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtros)

  const filtraContatos = () =>
    itens.filter(
      (item) =>
        !termo ||
        item.nome.toLocaleLowerCase().includes(termo.toLocaleLowerCase())
    )

  const Contatos = filtraContatos()

  return (
    <MainContainer>
      <Lista>
        {Contatos.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              descricao={c.descricao}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </Lista>
    </MainContainer>
  )
}

export default ListaDeContatos
