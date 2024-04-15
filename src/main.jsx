import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Profile } from './pages/Profile'
import theme from './styles/theme.js'
import GlobalStyle from './styles/global.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>,
)
