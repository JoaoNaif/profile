import { ReactNode } from 'react'
import { InformationContainer } from './styles'

interface InformationProps {
  title: string
  content: string
  icon: ReactNode
}

export function Information({ title, content, icon }: InformationProps) {
  return (
    <InformationContainer>
      <span title={content}>{icon}</span>
      <div>
        <h3 title={content}>{title}</h3>
        <p title={content}>{content}</p>
      </div>
    </InformationContainer>
  )
}
