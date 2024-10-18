import styled from 'styled-components'

import node from '../../../../../../assets/node.jpg'
import react from '../../../../../../assets/react.jpg'
import java from '../../../../../../assets/java.jpg'
import spring from '../../../../../../assets/spring.jpg'

export const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .node {
    height: 18rem;
    width: 60%;

    background-image: url(${node});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .react {
    height: 18rem;
    width: 60%;

    background-image: url(${react});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .java {
    height: 18rem;
    width: 60%;

    background-image: url(${java});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .spring {
    height: 18rem;
    width: 60%;

    background-image: url(${spring});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 425px) {
    .node {
      height: 15rem;
      width: 90%;
    }

    .react {
      height: 15rem;
      width: 90%;
    }

    .java {
      height: 15rem;
      width: 90%;
    }

    .spring {
      height: 15rem;
      width: 90%;
    }
  }
`

export const CertificateList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 10px;

  width: 25%;

  margin: 1rem 0;

  background: ${(props) => props.theme['gray-600']};

  li {
    display: flex;
    justify-content: center;

    border-right: 1px solid ${(props) => props.theme['gray-500']};
    border-left: 1px solid ${(props) => props.theme['gray-500']};
    padding: 0.25rem 0;

    cursor: pointer;

    transition: background-color 0.8s linear;

    &:hover {
      background: ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme['gray-700']};
    }

    &:first-child {
      border-left: 0;
      border-top-left-radius: 10px;
      border-end-start-radius: 10px;
    }

    &:last-child {
      border-right: 0;
      border-top-right-radius: 10px;
      border-end-end-radius: 10px;
    }
  }

  .active {
    color: ${(props) => props.theme['gray-700']};
    background: ${(props) => props.theme['blue-500']};
  }
`
