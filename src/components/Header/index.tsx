import { Contact } from './components/Contact'
import { Figure } from './components/Figure'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Figure />
      <Contact />
    </HeaderContainer>
  )
}
