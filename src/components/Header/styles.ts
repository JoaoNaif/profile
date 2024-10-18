import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 15%;
  position: fixed;
  top: 9%;
  left: 20%;

  padding: 1rem;
  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 10px;

  background: ${(props) => props.theme['gray-800']};

  transition: height 1s linear;

  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    height: 10rem;

    top: 0;
    left: 0;

    overflow: hidden;
  }

  @media (max-width: 425px) {
    padding: 1rem 0.25rem;
  }
`

export const ShowHeaderContainer = styled.header`
  width: 15%;
  position: fixed;
  top: 9%;
  left: 20%;

  padding: 1rem;
  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 10px;

  background: ${(props) => props.theme['gray-800']};

  transition: height 1s linear;

  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    height: 25rem;

    top: 0;
    left: 0;

    overflow: hidden;
  }

  @media (max-width: 425px) {
    height: 35rem;
    padding: 1rem 0.25rem;
  }
`
