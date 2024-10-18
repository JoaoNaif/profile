import { MenuContainer } from './styles'

interface MenuProps {
  option: number
  changeOption: (number: number) => void
}

export function Menu({ changeOption, option }: MenuProps) {
  return (
    <MenuContainer>
      <span
        onClick={() => changeOption(1)}
        className={`${option === 1 && 'active'}`}
      >
        Sobre
      </span>
      <span
        onClick={() => changeOption(2)}
        className={`${option === 2 && 'active'}`}
      >
        Resumo
      </span>
      <span
        onClick={() => changeOption(3)}
        className={`${option === 3 && 'active'}`}
      >
        Portfólio
      </span>
      <span
        onClick={() => changeOption(4)}
        className={`${option === 4 && 'active'}`}
      >
        Contato
      </span>
    </MenuContainer>
  )
}
