import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import theme from './styles/theme.js'
import GlobalStyle from './styles/global.js'
import { MyContext } from './MyContext.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyContext.Provider value={{ email: 'dev@email.com' }}>
      <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
