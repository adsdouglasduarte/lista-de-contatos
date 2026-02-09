import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles/index'

export const CardTarefa = styled.div`
  background-color: #ffffff;
  padding: 28px;
  margin-bottom: 24px;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
  }

  label {
    display: flex;
    align-items: center;
  }
`

export const CardTarefaTitulo = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: #111827;
  background-color: transparent;
  border: none;
`

export const InputInformacoes = styled.input`
  color: #374151;
  font-size: 15px;
  line-height: 22px;
  font-family: 'Inter', sans-serif;

  width: 100%;
  margin: 6px 0;
  border: none;
  background-color: transparent;
  outline: none;

  &:disabled {
    color: #6b7280;
    opacity: 1;
  }
`
export const CardTarefaBarraDosBotoes = styled.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 16px;
  margin-top: 20px;
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelhoSecundario};
  color: ${variaveis.vermelhoPrimario};

  &:hover {
    filter: brightness(0.95);
  }
`

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelhoSecundario};
  color: ${variaveis.vermelhoPrimario};

  &:hover {
    filter: brightness(0.95);
  }
`
