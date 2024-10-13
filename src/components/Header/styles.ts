import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 15%;

  padding: 1rem;
  border: 1px solid ${(props) => props.theme['gray-600']};
  border-radius: 10px;

  background: ${(props) => props.theme['gray-800']};
`
