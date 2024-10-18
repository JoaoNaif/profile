import styled from 'styled-components'

export const SocialContainer = styled.div`
  flex: 1;
  position: relative;

  border-radius: 20px;

  background: ${(props) => props.theme['gray-700']};

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 10%;
    top: -1.75rem;

    padding: 1rem;
    border-radius: 15px;

    background: ${(props) => props.theme['gray-600']};
  }

  div {
    h4 {
      font-size: 1.25rem;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
  }
`
