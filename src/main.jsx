import { CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from 'react-router-dom'
import { theme } from './config/mui-config.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline/>
    </ThemeProvider>
  </BrowserRouter>
  </>
)
