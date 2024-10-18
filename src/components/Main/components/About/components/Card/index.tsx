import { ReactNode } from 'react'
import { CardContainer } from './styles'

interface CardProps {
  icon: ReactNode
  title: string
  content: string
}

export function Card({ icon, title, content }: CardProps) {
  return (
    <CardContainer>
      {icon}
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </CardContainer>
  )
}
