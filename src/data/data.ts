import coffe from '../assets/data/coffe.png'
import money from '../assets/data/money.png'
import gitblog from '../assets/data/gitblog.png'

export const data = [
  {
    id: 1,
    name: 'Fast-feet',
    description:
      'Projeto controle de encomendas de transportadora, projeto focado para o interno de empresas, nesse sistema os admins abrem os pedidos e deixam disponível para o entregadores pega-los e fazer a entrega, o cliente recebe todas as notificações de mudança de status, ao final para o pedido ser finalizado o entregador precisa enviar uma foto da entrega.',
    technology: ['TypeScript', 'Nestjs', 'CloudFlare', 'PostgreSQL', 'Redis'],
    type: 'Back-end',
    github: 'https://github.com/JoaoNaif/fast-feet-nest',
    url: 'https://comprovei.com/wp-content/uploads/2021/07/transportadoras-gestao-de-entregas.jpg',
  },
  {
    id: 2,
    name: 'Library',
    description:
      'Uma livraria online de empréstimo de livro utilizando Java e usando conceitos de Programação Orientada a Objetos.',
    technology: ['Java', 'POO'],
    type: 'Back-end',
    github: 'https://github.com/JoaoNaif/library-java',
    url: 'https://static.vecteezy.com/system/resources/thumbnails/020/402/234/small/library-book-reading-abstract-icon-or-emblem-vector.jpg',
  },
  {
    id: 3,
    name: 'GYM-Tech',
    description:
      'Sistema de academias, localiza as academias em até 10km de você, registrando os check-ins.',
    technology: ['TypeScript', 'Fastify', 'Vitest'],
    type: 'Back-end',
    github: 'https://github.com/JoaoNaif/app-gym',
    url: 'https://marketplace.canva.com/EAFzZ-ml0FE/1/0/1600w/canva-black-white-and-yellow-bold-fitness-logo-JAfFy-Hl4_w.jpg',
  },
  {
    id: 4,
    name: 'Coffe',
    description:
      'Website de café, feito em React com TypeScript, totalmente responsivo, usando conceitos de ContextApi e estilizado com Styled-Components',
    technology: ['TypeScript', 'React', 'ContextAPI', 'Styled-Components'],
    type: 'Front-end',
    github: 'https://github.com/JoaoNaif/coffe-delivery',
    url: coffe,
  },
  {
    id: 5,
    name: 'Dt-Money',
    description:
      'Site de controle de renda, usando tecnologias como: axios e json.server',
    technology: ['TypeScript', 'React', 'Axios', 'Json-Server'],
    type: 'Front-end',
    github: 'https://github.com/JoaoNaif/dt-money-rocketseat',
    url: money,
  },
  {
    id: 6,
    name: 'Git-Blog',
    description:
      'Um Blog usando a API do GitHub, feita em React(TypeScript) com uso de tecnologias como: axios',
    technology: ['TypeScript', 'React', 'Axios', 'API'],
    type: 'Front-end',
    github: 'https://github.com/JoaoNaif/git-blog',
    url: gitblog,
  },
]
