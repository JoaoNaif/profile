import styled from 'styled-components'

export const InformationContainer = styled.li`
  display: flex;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;

    padding: 1rem;
    border-radius: 10px;

    color: ${(props) => props.theme['blue-500']};
    background: ${(props) => props.theme['gray-700']};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h3 {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${(props) => props.theme['gray-500']};
    }

    p {
      color: ${(props) => props.theme['gray-100']};
      max-width: 11rem;
      overflow: hidden;
    }
  }
`
