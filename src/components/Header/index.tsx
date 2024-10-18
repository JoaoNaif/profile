import { useState } from 'react'
import { Contact } from './components/Contact'
import { Figure } from './components/Figure'
import { HeaderContainer, ShowHeaderContainer } from './styles'

export function Header() {
  const [show, setShow] = useState(false)

  function changeShow() {
    setShow(!show)
  }
  return (
    <>
      {show ? (
        <HeaderContainer id={`${show ? 'show' : ''}`}>
          <Figure changeShow={changeShow} />
          <Contact />
        </HeaderContainer>
      ) : (
        <ShowHeaderContainer id={`${show ? 'show' : ''}`}>
          <Figure changeShow={changeShow} />
          <Contact />
        </ShowHeaderContainer>
      )}
    </>
  )
}
