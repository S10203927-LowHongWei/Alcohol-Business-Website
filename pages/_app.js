import '../styles/globals.css'
import Navbar from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Navbar />
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
