import styled from 'styled-components'

export const LineContainer = styled.div`
  width: 2.5rem;
  height: 0.25rem;

  margin: 1rem 0;
  border-radius: 10px;

  background: ${(props) => props.theme['blue-500']};
`
