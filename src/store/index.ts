import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtros: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
