import '../styles/globals.css'
import navStyles from "../styles/Nav.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.nav__box}>
          <img src="/logo.png" alt="Villa Ladridos"/>
          <Link href="/" ><a className={navStyles.nav__title}>Villa Ladridos</a></Link>
        </div>
        <div className={navStyles.nav__box}>
          <Link href="/instalaciones">Instalaciones</Link>
          <Link href="/reservas">Reservas</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
