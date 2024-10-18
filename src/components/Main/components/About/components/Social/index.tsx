import { ReactNode } from 'react'
import { SocialContainer } from './styles'

interface SocialProps {
  icon: ReactNode
  title: string
  content: string
}

export function Social({ icon, title, content }: SocialProps) {
  return (
    <SocialContainer>
      <span>{icon}</span>
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </SocialContainer>
  )
}
