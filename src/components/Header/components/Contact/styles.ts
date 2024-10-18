import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-top: 1px solid ${(props) => props.theme['gray-600']};
  padding-top: 1rem;

  @media (max-width: 1024px) {
    margin-top: 1rem;
  }

  @media (max-width: 425px) {
    padding: 1rem;
  }
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 2rem;

  list-style: none;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    padding-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme['gray-600']};
  }

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`
export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.825rem;

  cursor: pointer;
  list-style: none;

  li {
    a {
      color: ${(props) => props.theme['gray-500']};
      text-decoration: none;

      &:hover {
        color: ${(props) => props.theme['gray-300']};
        transition: background-color 1s;
      }
    }
  }

  @media (max-width: 1024px) {
    justify-content: start;
  }
`
