import { useState } from 'react'
import { Repository } from '../../../../@types/Repository'
import { data } from '../../../../data/data'
import { Line } from '../Line'
import { RepositoryItem } from './components/Repository'
import {
  ListContainer,
  PortfolioContainer,
  RepositoryContainer,
} from './styles'

export function Portifolio() {
  const [option, setOption] = useState('')
  const repositories: Repository[] = data

  const filterRepo = repositories.filter((item) => item.type.includes(option))

  function handleOption(type: string) {
    setOption(type)
  }

  return (
    <PortfolioContainer>
      <h1>Portifólio</h1>
      <Line />

      <ListContainer>
        <li
          className={`${option === '' && 'active'}`}
          onClick={() => handleOption('')}
        >
          Todos
        </li>
        <li
          className={`${option === 'Front-end' && 'active'}`}
          onClick={() => handleOption('Front-end')}
        >
          Front-end
        </li>
        <li
          className={`${option === 'Back-end' && 'active'}`}
          onClick={() => handleOption('Back-end')}
        >
          Back-end
        </li>
      </ListContainer>

      {option === '' && (
        <RepositoryContainer>
          {repositories.map((repository) => (
            <RepositoryItem key={repository.id} data={repository} />
          ))}
        </RepositoryContainer>
      )}

      {option === 'Front-end' && (
        <RepositoryContainer>
          {filterRepo.map((repository) => (
            <RepositoryItem key={repository.id} data={repository} />
          ))}
        </RepositoryContainer>
      )}

      {option === 'Back-end' && (
        <RepositoryContainer>
          {filterRepo.map((repository) => (
            <RepositoryItem key={repository.id} data={repository} />
          ))}
        </RepositoryContainer>
      )}
    </PortfolioContainer>
  )
}
