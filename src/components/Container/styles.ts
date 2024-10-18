import styled from 'styled-components'

export const InitialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  position: relative;

  padding-top: 0.25rem;
  padding-left: 18rem;
  margin: 5rem auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem;
    margin: 2rem auto;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 0 0.75rem;
    margin: 2rem auto;
    margin-bottom: 6rem;
  }
`
