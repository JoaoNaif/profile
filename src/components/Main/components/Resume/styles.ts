import styled from 'styled-components'

export const ResumeContainer = styled.div`
  padding: 2rem 1.5rem;
`
export const ResumeSection = styled.section`
  display: flex;
  gap: 1rem;

  margin-top: 2rem;

  .resume-book {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
      padding: 0.75rem;

      border-radius: 10px;

      color: ${(props) => props.theme['blue-500']};
      background: ${(props) => props.theme['gray-700']};
    }
  }
`

export const Point = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 0.25rem;
  height: 100%;

  border-right: 1px solid ${(props) => props.theme['gray-500']};

  position: relative;

  div {
    height: 0.75rem;
    width: 0.75rem;

    margin-left: -0.1rem;

    border: 2px solid ${(props) => props.theme['gray-500']};
    border-radius: 50%;
    background: ${(props) => props.theme['blue-500']};
  }
`

export const ResumeContent = styled.div`
  h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    gap: 1rem;

    li {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      span {
        color: ${(props) => props.theme['blue-500']};
      }

      p {
        color: ${(props) => props.theme['gray-400']};
      }
    }
  }
`

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 1rem;
    border-radius: 8px;

    background: ${(props) => props.theme['gray-700']};

    li {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      header {
        display: flex;
        gap: 0.5rem;
      }

      main {
        width: 100%;
        height: 0.5rem;
        border-radius: 10px;

        background: ${(props) => props.theme['gray-600']};

        .typescript {
          width: 80%;
          height: 0.5rem;

          border-radius: 10px;
          background: ${(props) => props.theme['blue-500']};
        }

        .javascript {
          width: 90%;
          height: 0.5rem;

          border-radius: 10px;
          background: ${(props) => props.theme['blue-500']};
        }

        .java {
          width: 65%;
          height: 0.5rem;

          border-radius: 10px;
          background: ${(props) => props.theme['blue-500']};
        }

        .python {
          width: 40%;
          height: 0.5rem;

          border-radius: 10px;
          background: ${(props) => props.theme['blue-500']};
        }
      }
    }
  }
`
