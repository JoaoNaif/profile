import styled from 'styled-components'
import img from '../../../../assets/bg.png'

export const FigureContainer = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  margin: 3rem 0;

  div {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    border-radius: 10px;
    border: 1px solid ${(props) => props.theme['gray-600']};

    height: 9rem;
    width: 9rem;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 0.825rem;
      font-weight: bold;

      padding: 0.25rem 0.5rem;
      border-radius: 20px;

      background: ${(props) => props.theme['gray-600']};
    }
  }

  aside {
    display: none;
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    margin: 0;
    padding: 0.5rem 1.5rem;

    div {
      height: 7rem;
      width: 7rem;

      border-radius: 50%;
    }

    section {
      align-items: start;
    }

    aside {
      display: flex;
      position: absolute;

      padding: 0.5rem 0.25rem;

      top: 0;
      right: 0;

      border-end-start-radius: 10px;
      border-top: 1px solid ${(props) => props.theme['blue-500']};
      border-left: 1px solid ${(props) => props.theme['blue-500']};

      font-size: 0.825rem;
      text-shadow: 2px 2px 4px ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['blue-500']};
      background: linear-gradient(
        to bottom right,
        ${(props) => props.theme['blue-500']},
        ${(props) => props.theme['gray-600']},
        ${(props) => props.theme['gray-800']}
      );
    }
  }

  @media (max-width: 425px) {
    padding: 0.5rem 0.5rem;
  }
`
