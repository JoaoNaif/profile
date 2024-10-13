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

  span {
    font-size: 0.825rem;
    font-weight: bold;

    padding: 0.25rem 0.5rem;
    border-radius: 20px;

    background: ${(props) => props.theme['gray-600']};
  }
`
