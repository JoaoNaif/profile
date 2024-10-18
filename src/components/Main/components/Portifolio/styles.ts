import styled from 'styled-components'

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const ListContainer = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  list-style: none;

  li {
    cursor: pointer;
  }

  .active {
    color: ${(props) => props.theme['blue-500']};
  }
`
export const RepositoryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  list-style: none;

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
