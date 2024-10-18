import styled from 'styled-components'

export const SeparatorContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 2rem 0;
`

export const SeparatorContent = styled.div`
  width: 30rem;
  height: 0.3rem;

  border-radius: 10px;

  background: ${(props) => props.theme['gray-600']};

  @media (max-width: 425px) {
    width: 20rem;
  }

  div {
    width: 15rem;
    height: 0.3rem;

    border-radius: 10px;
    background: ${(props) => props.theme['blue-500']};

    @media (max-width: 425px) {
      width: 50%;
    }
  }
`
