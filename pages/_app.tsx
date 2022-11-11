import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import theme from '../config/theme'
import { AccountContextProvider } from '../store/useAccountContext';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AccountContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AccountContextProvider>
  )
}
