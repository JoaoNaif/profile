import { ThemeProvider } from 'styled-components'
import { Container } from './components/Container'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
