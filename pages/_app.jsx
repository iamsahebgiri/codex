import '../styles/fonts.css'
import '../styles/globals.css'
import AuthProvider from '../context/authContext'

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
