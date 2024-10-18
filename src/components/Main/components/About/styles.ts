import styled from 'styled-components'

export const AboutContainer = styled.div`
  padding: 2rem 1.25rem;

  p {
    color: ${(props) => props.theme['gray-300']};
  }
`
export const AbilityContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 1rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 425px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
export const SocialContainer = styled.section`
  margin-top: 3rem;

  h1 {
    margin-bottom: 3rem;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 425px) {
    div {
      flex-direction: column;
      gap: 3rem;
    }
  }
`
export const CertificateContainer = styled.article`
  display: flex;
  flex-direction: column;
`
