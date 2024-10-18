import { IoBookOutline } from 'react-icons/io5'
import {
  Point,
  ResumeSection,
  ResumeContainer,
  ResumeContent,
  Skills,
} from './styles'
import { Line } from '../Line'

export function Resume() {
  return (
    <ResumeContainer>
      <header>
        <h1>Resume</h1>
        <Line />
      </header>
      <ResumeSection>
        <div className="resume-book">
          <span>
            <IoBookOutline size={20} />
          </span>
          <Point>
            <div />
            <div />
          </Point>
        </div>
        <ResumeContent>
          <h2>Educação</h2>
          <ul>
            <li>
              <h4>Cruzeiro do Sul</h4>
              <span>2023 - 2026</span>
              <p>
                Estudante de ciência da computação, período noturno, atualmente
                4 semestre
              </p>
            </li>
            <li>
              <h4>Rocketseat</h4>
              <span>2024</span>
              <p>
                Estudante de programação, tecnologias como React, JavaScript,
                Node, Java, React Native
              </p>
            </li>
          </ul>
        </ResumeContent>
      </ResumeSection>

      <ResumeSection>
        <div className="resume-book">
          <span>
            <IoBookOutline size={20} />
          </span>
          <Point>
            <div />
            <div />
          </Point>
        </div>
        <ResumeContent>
          <h2>Experiência</h2>
          <ul>
            <li>
              <h4>Desenvolvedor Software</h4>
              <span>2023 - o momento</span>
              <p>
                Atuo na parte de desenvolvimento web, fazendo o Backend e
                Frontend tendo como principal linguagem nas duas frentes o
                Javascript.
              </p>
            </li>
            <li>
              <h4>Agente Comercial</h4>
              <span>2023 - 2024</span>
              <p>
                Agente comercial focado na conversão e vendas para candidatos,
                tendo como principal função a comunicação e argumentação com
                candidatos, tanto por telefone quanto por digital.
              </p>
            </li>
          </ul>
        </ResumeContent>
      </ResumeSection>

      <Skills>
        <h2>Skills</h2>
        <ul>
          <li>
            <header>
              <h4>TypeScript</h4>
              <span>80%</span>
            </header>
            <main>
              <div className="typescript" />
            </main>
          </li>
          <li>
            <header>
              <h4>JavaScript</h4>
              <span>90%</span>
            </header>
            <main>
              <div className="javascript" />
            </main>
          </li>
          <li>
            <header>
              <h4>Java</h4>
              <span>65%</span>
            </header>
            <main>
              <div className="java" />
            </main>
          </li>
          <li>
            <header>
              <h4>Python</h4>
              <span>40%</span>
            </header>
            <main>
              <div className="python" />
            </main>
          </li>
        </ul>
      </Skills>
    </ResumeContainer>
  )
}
