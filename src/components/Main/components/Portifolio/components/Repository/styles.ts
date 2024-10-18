import styled from 'styled-components'

import coffe from '../../../../../../assets/data/coffe.png'
import money from '../../../../../../assets/data/money.png'
import gitblog from '../../../../../../assets/data/gitblog.png'

export const RepositoryItemContainer = styled.li`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .header-active {
    display: flex;
    justify-content: space-between;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;

    border-radius: 10px;
    border: 1px solid ${(props) => props.theme['gray-600']};

    color: transparent;

    cursor: pointer;

    &:hover {
      opacity: 0.3;
      color: ${(props) => props.theme['blue-500']};
    }
  }

  header {
    display: flex;
    justify-content: space-between;

    padding: 0 0.25rem;

    div {
      p {
        color: ${(props) => props.theme['gray-400']};
      }
    }

    span {
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0 0.5rem;
      margin: 0.1rem 0;
      border-radius: 10px;

      background: ${(props) => props.theme['gray-600']};

      transition: background-color 0.6s linear;

      &:hover {
        background: ${(props) => props.theme['blue-500']};
      }
    }
  }

  .header-active {
  }

  main {
    display: none;
  }

  .main-active {
    display: flex;
    flex-direction: column;

    p {
      font-size: 1rem;
      margin: 0.25rem 0;
    }
  }

  .image-1 {
    height: 12rem;
    width: 100%;

    background-image: url('https://comprovei.com/wp-content/uploads/2021/07/transportadoras-gestao-de-entregas.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .image-2 {
    height: 12rem;
    width: 100%;

    background-image: url('https://static.vecteezy.com/system/resources/thumbnails/020/402/234/small/library-book-reading-abstract-icon-or-emblem-vector.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .image-3 {
    height: 12rem;
    width: 100%;

    background-image: url('https://marketplace.canva.com/EAFzZ-ml0FE/1/0/1600w/canva-black-white-and-yellow-bold-fitness-logo-JAfFy-Hl4_w.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .image-4 {
    height: 12rem;
    width: 100%;

    background-image: url(${coffe});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }

  .image-5 {
    height: 12rem;
    width: 100%;

    background-image: url(${money});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .image-6 {
    height: 12rem;
    width: 100%;

    background-image: url(${gitblog});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }
`

export const ListTech = styled.ul`
  display: flex;
  gap: 0.5rem;

  list-style: none;
`
