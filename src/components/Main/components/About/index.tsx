import {
  FaDatabase,
  FaFileContract,
  FaGithub,
  FaLinkedin,
  FaPencilAlt,
} from 'react-icons/fa'
import { Card } from './components/Card'
import { FaGear } from 'react-icons/fa6'
import { Social } from './components/Social'

import {
  AbilityContainer,
  AboutContainer,
  CertificateContainer,
  SocialContainer,
} from './styles'
import { Line } from '../Line'
import { Separator } from './components/Separator'
import { Certificate } from './components/Certificate'

export function About() {
  return (
    <AboutContainer>
      <header>
        <h1>Sobre Mim</h1>
        <Line />
      </header>
      <p>
        Sou desenvolvedor de software freelancer, focado no desenvolvimento web
        com ênfase no backend, mas também tenho conhecimento em frontend.
        Atualmente, sou estudante de Ciências da Computação na Unicsul. Trabalho
        com JavaScript, TypeScript, Node, React, SQL e PostgreSQL. Além disso,
        estudo Java, Redis, Kotlin, MongoDB, Spring Boot e Go, sendo também
        aluno da Rocketseat e B7WEB. Por fim, tenho prática com algumas
        arquiteturas de software como Clean Architecture, Clean Code e DDD, e
        possuo habilidades com Git e GitHub para versionamento de código.
      </p>
      <AbilityContainer>
        <h1>Habilidades</h1>
        <ul>
          <Card
            icon={<FaPencilAlt size={50} />}
            title="Front-end"
            content="Criando interfaces interativas e responsivas utilizando tecnologias de ponta, como React.js com TypeScript"
          />
          <Card
            icon={<FaGear size={50} />}
            title="Back-end"
            content="Criando sistemas, e criando as regras de negócio, todas devidamente testadas, utilizando tecnologias como Node.js e Java"
          />
          <Card
            icon={<FaFileContract size={50} />}
            title="Levantamento de Requisitos"
            content="Alinhamento das ideias, e colhendo os requisitos funcionais e não functionais."
          />
          <Card
            icon={<FaDatabase size={50} />}
            title="Banco de Dados"
            content="bancos de Relacionais como PostgreSQL e MySql ou não relacionais como Redis"
          />
        </ul>
      </AbilityContainer>
      <SocialContainer>
        <h1>Redes Proficionais</h1>
        <div>
          <Social
            icon={<FaLinkedin size={30} />}
            title="Linkedin"
            content="Por aqui pode verificar minha rotina, meus estudos e minha evolução, não se esqueça de se conectar para nos conhecermos."
          />
          <Social
            icon={<FaGithub size={30} />}
            title="Github"
            content="Confira alguns dos meus projetos práticos, fique a vontade para avaliar, se inspirar ou criticar."
          />
        </div>
        <Separator />
      </SocialContainer>
      <CertificateContainer>
        <h1>Certificados</h1>
        <Certificate />
        <Separator />
      </CertificateContainer>
    </AboutContainer>
  )
}
