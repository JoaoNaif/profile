import { useState } from 'react'
import { CertificateContainer, CertificateList } from './styles'

type ShowType = 'node' | 'react' | 'java' | 'spring'

export function Certificate() {
  const [show, setShow] = useState<ShowType>('node')

  function handleChangeShow(type: ShowType) {
    setShow(type)
  }

  return (
    <CertificateContainer>
      <CertificateList>
        <li
          onClick={() => handleChangeShow('node')}
          className={`${show === 'node' && 'active'}`}
        >
          1
        </li>
        <li
          onClick={() => handleChangeShow('react')}
          className={`${show === 'react' && 'active'}`}
        >
          2
        </li>
        <li
          onClick={() => handleChangeShow('java')}
          className={`${show === 'java' && 'active'}`}
        >
          3
        </li>
        <li
          onClick={() => handleChangeShow('spring')}
          className={`${show === 'spring' && 'active'}`}
        >
          4
        </li>
      </CertificateList>
      <div className={show} />
    </CertificateContainer>
  )
}
