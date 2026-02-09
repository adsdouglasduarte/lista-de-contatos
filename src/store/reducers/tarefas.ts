import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Contato'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 101,
      nome: 'Lucas Andrade',
      email: 'lucas.andrade@techmail.dev',
      telefone: '(11) 91234-5678'
    },
    {
      id: 102,
      nome: 'Renata Pacheco',
      email: 'renata.p@startup.io',
      telefone: '(21) 93456-7812'
    },
    {
      id: 103,
      nome: 'Thiago Moreira',
      email: 'thiago.moreira@digital.co',
      telefone: '(31) 98765-1122'
    },
    {
      id: 104,
      nome: 'Juliana Torres',
      email: 'juliana.t@uxstudio.design',
      telefone: '(41) 97654-8899'
    },
    {
      id: 105,
      nome: 'Felipe Rocha',
      email: 'felipe.rocha@cloud.app',
      telefone: '(51) 99812-3344'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLocaleLowerCase() ===
          action.payload.nome.toLocaleLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe um contato com esse nome!')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
