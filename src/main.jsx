import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home/index.jsx'
import theme from './styles/theme.js'
import GlobalStyle from './styles/global.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
