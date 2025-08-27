import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    height: auto;
    width: 100%;
    justify-content: center;
  }
`
