import styled from 'styled-components'

export const MainContainer = styled.main`
  position: relative;
  width: 50%;

  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 10px;
  background: ${(props) => props.theme['gray-800']};

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    position: static;
  }
`
