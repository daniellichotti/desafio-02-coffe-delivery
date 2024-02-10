import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ButtonLabel } from './components/ButtonLabel'
import { ButtonRemove } from './components/ButtonRemove'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello</h1>
      <ButtonLabel />
      <ButtonRemove />

      <GlobalStyle />
    </ThemeProvider>
  )
}
