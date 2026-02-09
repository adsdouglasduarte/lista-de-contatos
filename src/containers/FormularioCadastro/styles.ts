import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #374151;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  padding: 96px 32px 32px;
  background-color: #f9fafb;
`
