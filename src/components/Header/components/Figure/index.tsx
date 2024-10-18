import { FigureContainer } from './styles'

interface FigureProps {
  changeShow: () => void
}

export function Figure({ changeShow }: FigureProps) {
  return (
    <FigureContainer>
      <div />
      <section>
        <h1>João Naif</h1>
        <span>Desenvolvedor Software</span>
      </section>
      <aside onClick={changeShow}>Mostrar Contatos</aside>
    </FigureContainer>
  )
}
