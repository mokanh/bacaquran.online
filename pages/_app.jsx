import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return <div className="container"><Component {...pageProps} /></div>
}

export default MyApp
