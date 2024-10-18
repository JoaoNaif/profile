import styled from 'styled-components'

export const TechnologyContainer = styled.li`
  margin-top: 1rem;

  span {
    font-weight: bold;
    font-size: 0.75rem;

    padding: 0.25rem;
    border-radius: 2px;

    color: ${(props) => props.theme['gray-600']};
    background: ${(props) => props.theme['blue-500']};
  }
`
