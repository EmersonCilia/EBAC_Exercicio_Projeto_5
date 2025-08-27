import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import ContatoModel from '../../models/ContatoModel'

const contatoSlice = createSlice({
  name: 'nomes',
  initialState: {
    itens: [
      {
        nome: 'Gabriel',
        email: 'email@gmail.com',
        telefone: '(43)98765-1111',
        descricao: 'Amigo',
        id: 1
      },
      {
        nome: 'Matheus',
        email: 'email@gmail.com',
        telefone: '(43)98765-2222',
        descricao: 'irmão',
        id: 2
      },
      {
        nome: 'João',
        email: 'email@gmail.com',
        telefone: '(43)98765-3333',
        descricao: '',
        id: 3
      },
      {
        nome: 'Thiago',
        email: 'email@gmail.com',
        telefone: '(43)98765-4444',
        descricao: '',
        id: 4
      },
      {
        nome: 'Gabriel',
        email: 'email@gmail.com',
        telefone: '(43)98765-5555',
        descricao: 'Colega do trabalho',
        id: 5
      }
    ],
    nextId: 6
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<ContatoModel>) => {
      state.itens = state.itens.map((c) =>
        c.id === action.payload.id ? action.payload : c
      )
    },
    cadastar: (state, action: PayloadAction<Omit<ContatoModel, 'id'>>) => {
      const contatoNovo = {
        ...action.payload,
        id: state.nextId++
      }

      state.itens.push(contatoNovo)
    }
  }
})

export const { remover, editar, cadastar } = contatoSlice.actions

export default contatoSlice.reducer
