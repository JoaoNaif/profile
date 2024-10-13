import {
  IoCalendarOutline,
  IoLocationOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5'
import { Information } from './components/Information'
import { ContactContainer, InfoList, SocialList } from './styles'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export function Contact() {
  return (
    <ContactContainer>
      <InfoList>
        <Information
          icon={<IoMailOutline size={20} />}
          title="EMAIL"
          content="joaonaif@gmail.com"
        />
        <Information
          icon={<IoPhonePortraitOutline size={20} />}
          title="TEL"
          content="(11) 98361-5178"
        />
        <Information
          icon={<IoCalendarOutline size={20} />}
          title="EMAIL"
          content="DEZ 10, 2024"
        />
        <Information
          icon={<IoLocationOutline size={20} />}
          title="Local"
          content="São Paulo, SP, BR"
        />
      </InfoList>

      <SocialList>
        <li>
          <a
            href="https://www.instagram.com/joaonaif/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} />
          </a>{' '}
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joaonaif/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={20} />
          </a>{' '}
        </li>
        <li>
          <a
            href="https://github.com/JoaoNaif"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} />
          </a>
        </li>
      </SocialList>
    </ContactContainer>
  )
}
