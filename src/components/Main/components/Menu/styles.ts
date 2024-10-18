import styled from 'styled-components'

export const MenuContainer = styled.nav`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  gap: 2rem;
  padding: 1.25rem 2.5rem;

  border-radius: 0 10px 0 10px;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};
  border-left: 1px solid ${(props) => props.theme['gray-500']};

  font-size: 1rem;

  background: ${(props) => props.theme['gray-600']};

  span {
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['gray-400']};
    }
  }

  .active {
    color: ${(props) => props.theme['blue-500']};

    &:hover {
      color: ${(props) => props.theme['blue-500']};
    }
  }

  @media (max-width: 425px) {
    position: fixed;
    top: auto;
    left: 0;
    bottom: 0;

    border: 1px solid ${(props) => props.theme['gray-500']};

    border-end-start-radius: 0;
    border-top-left-radius: 10px;

    opacity: 0.9;
    z-index: 1;
  }
`
