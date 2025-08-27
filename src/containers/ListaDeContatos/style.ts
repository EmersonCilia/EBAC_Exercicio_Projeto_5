import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2%;
  margin-top: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
