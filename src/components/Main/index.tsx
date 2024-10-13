import { useState } from 'react'
import { About } from './components/About'
import { MainContainer } from './styles'
import { Menu } from './components/Menu'
import { Local } from './components/Contact'
import { Portifolio } from './components/Portifolio'
import { Resume } from './components/Resume'

export function Main() {
  const [option, setOption] = useState(1)

  function changeOption(number: number) {
    setOption(number)
  }

  return (
    <MainContainer>
      <Menu changeOption={changeOption} />
      {option === 1 && <About />}
      {option === 2 && <Resume />}
      {option === 3 && <Portifolio />}
      {option === 4 && <Local />}
    </MainContainer>
  )
}
