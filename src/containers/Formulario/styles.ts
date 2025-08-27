import styled from 'styled-components'

export const Form = styled.form`
  max-width: 350px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color #666666;

  display: flex;
  flex-direction: column;

  textarea {
    resize: none;
    height: 100px;
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 16px;
  }

  button {
    align-self: flex-end;
  }
`
export const Opcoes = styled.div`
  margin-bottom: 16px;
  p {
    margin-bottom: 6px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;

  Label {
    margin-right: 6px;
  }
`
