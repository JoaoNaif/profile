import { GrDirections } from 'react-icons/gr'
import { Line } from '../Line'
import {
  ArticleContainer,
  ContactContainer,
  CopyContainer,
  DescriptionContainer,
  EmailContainer,
} from './styles'
import { useRef, useState } from 'react'

export function Local() {
  const [emailCopied, setEmailCopied] = useState(false)
  const emailRef = useRef<HTMLDivElement>(null)

  const handleEmailCopy = () => {
    if (emailRef.current) {
      const email = emailRef.current.textContent
      if (email) {
        navigator.clipboard.writeText(email)
        setEmailCopied(true)
        emailRef.current.classList.add('text-green-500')
        setTimeout(() => {
          setEmailCopied(false)
          emailRef.current?.classList.remove('text-green-500')
        }, 2000)
      }
    }
  }

  return (
    <ContactContainer>
      <h1>Contato</h1>
      <Line />

      <div className="map">
        <ArticleContainer>
          <div>
            <h4>São Paulo</h4>
            <p>São Paulo, BR</p>
          </div>
          <GrDirections size={30} />
        </ArticleContainer>
      </div>

      <EmailContainer>
        <h2>Contato Email</h2>
        <DescriptionContainer>
          <p>
            Opa! Gostou do meu currículo? Entre em contato comigo e mande uma
            proposta ou algum feedback.
          </p>
          <span>Ass. João Naif</span>
        </DescriptionContainer>
        <CopyContainer className={`${emailCopied && 'active'}`}>
          <div className={`${emailCopied && 'click'}`} ref={emailRef}>
            JOAONAIF@GMAIL.COM
          </div>
          <button onClick={handleEmailCopy}>
            {emailCopied ? <p>Email Copiado</p> : <p>Copiar Email</p>}
          </button>
        </CopyContainer>
      </EmailContainer>
    </ContactContainer>
  )
}
