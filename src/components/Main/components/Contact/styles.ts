import styled from 'styled-components'
import map from '../../../../assets/sp.png'

export const ContactContainer = styled.div`
  padding: 1rem;

  .map {
    height: 22rem;
    width: 100%;

    background-image: url(${map});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    border: 1px solid ${(props) => props.theme['gray-500']};
    border-radius: 10px;
    padding: 1rem;
  }
`

export const ArticleContainer = styled.article`
  display: flex;
  justify-content: space-between;

  width: 30%;
  padding: 1rem;
  border-radius: 10px;

  background: ${(props) => props.theme['gray-900']};

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h4 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 1.5rem 0;
  }

  .active {
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme['blue-500']};

    background: ${(props) => props.theme['blue-500']};

    transition: background-color 1s linear;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;

  p {
    color: ${(props) => props.theme['gray-500']};
  }

  span {
    font-size: 1.15rem;
  }
`
export const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme['gray-600']};

  color: ${(props) => props.theme['gray-400']};
  background: ${(props) => props.theme['gray-700']};

  div {
    padding: 0 1rem;
  }

  .click {
    color: ${(props) => props.theme.white};
  }

  button {
    cursor: pointer;

    padding: 0.5rem;

    border: 0;
    border-end-end-radius: 10px;
    border-top-right-radius: 10px;

    background: ${(props) => props.theme['gray-400']};

    transition: background-color 0.8s ease-out;

    &:hover {
      background: ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme.white};
    }
  }
`
