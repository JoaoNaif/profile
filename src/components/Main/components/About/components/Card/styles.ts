import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;

  height: 7rem;
  padding: 1rem;
  border-radius: 10px;

  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['blue-500']};

  div {
    h4 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme['gray-100']};
    }

    p {
      font-size: 0.825rem;
      color: ${(props) => props.theme['gray-300']};
    }
  }
`
