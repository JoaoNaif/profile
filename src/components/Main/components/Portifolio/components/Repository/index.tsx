import { FaEye } from 'react-icons/fa'
import { Repository } from '../../../../../../@types/Repository'
import { ListTech, RepositoryItemContainer } from './styles'
import { Technology } from '../Technology'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { v4 as uuidv4 } from 'uuid'

interface RepositoryProps {
  data: Repository
}

export function RepositoryItem({ data }: RepositoryProps) {
  const [active, setActive] = useState(false)

  function handleChangeActive() {
    setActive(!active)
  }

  return (
    <RepositoryItemContainer>
      <a
        href={data.github}
        target="_blank"
        className={`image-${data.id}`}
        rel="noreferrer"
      >
        <FaEye size={50} />
      </a>
      <header className={`${active && 'header-active'}`}>
        <div>
          <h3>{data.name}</h3>
          <p>{data.type}</p>
        </div>

        <span
          className={`${active && 'icon-active'}`}
          onClick={handleChangeActive}
        >
          {active ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </span>
      </header>
      <main className={`${active && 'main-active'}`}>
        <p>{data.description}</p>
        <ListTech>
          {data.technology.map((item) => (
            <Technology key={uuidv4()} tech={item} />
          ))}
        </ListTech>
      </main>
    </RepositoryItemContainer>
  )
}
