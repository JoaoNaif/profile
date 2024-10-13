interface MenuProps {
  changeOption: (number: number) => void
}

export function Menu({ changeOption }: MenuProps) {
  return (
    <nav>
      <span onClick={() => changeOption(1)}>Sobre</span>
      <span onClick={() => changeOption(2)}>Resumo</span>
      <span onClick={() => changeOption(3)}>Portfólio</span>
      <span onClick={() => changeOption(4)}>Contato</span>
    </nav>
  )
}
