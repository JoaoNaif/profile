import { TechnologyContainer } from './styles'

interface TechnologyProps {
  tech: string
}

export function Technology({ tech }: TechnologyProps) {
  return (
    <TechnologyContainer>
      <span>{tech}</span>
    </TechnologyContainer>
  )
}
