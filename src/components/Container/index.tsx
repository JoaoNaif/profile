import { Header } from '../Header'
import { Main } from '../Main'
import { InitialContainer } from './styles'

export function Container() {
  return (
    <InitialContainer>
      <Header />
      <Main />
    </InitialContainer>
  )
}
