import { styled } from 'styled-components'

export const CampoBusca = styled.input`
  width: 100%;
  padding: 14px 20px;
  background-color: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;

  color: #111827;
  font-size: 16px;

  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: #6366f1;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }
`
