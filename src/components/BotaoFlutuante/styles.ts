import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotaoFlutuante = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 32px;
  right: 32px;

  width: 64px;
  height: 64px;

  font-size: 26px;
  text-decoration: none;
  color: #ffffff;
  background: linear-gradient(
    135deg,
    ${variaveis.azulPrimario},
    ${variaveis.azul2}
  );
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.35);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 18px 35px rgba(79, 70, 229, 0.45);
  }
`
