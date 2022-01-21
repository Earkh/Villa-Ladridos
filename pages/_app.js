import {useState} from 'react';
import Link from 'next/link';
import '../styles/globals.css'
import navStyles from '../styles/Nav.module.css';

function MyApp({Component, pageProps}) {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.nav__box}>
          <img src="/logo.png" alt="Villa Ladridos"/>
          <Link href="/"><a className={navStyles.nav__title}>Villa Ladridos</a></Link>
        </div>
        <div className={`${navStyles.nav__box} ${navStyles.nav__links}`}>
          <Link href="/instalaciones">Instalaciones</Link>
          <Link href="/reservas">Reservas</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <div className={navStyles.nav__mobileButton} onClick={() => setMobileMenu(!mobileMenu)}>
          <img src="/menu.png" alt="menu"/>
        </div>
      </nav>
      {
        mobileMenu ? (
          <div className={navStyles.nav__mobile}>
            <Link href="/instalaciones">
              <a onClick={() => setMobileMenu(false)}>Instalaciones</a>
            </Link>
            <Link href="/reservas" onClick={() => setMobileMenu(false)}>
              <a onClick={() => setMobileMenu(false)}>Reservas</a>
            </Link>
            <Link href="/contacto" onClick={() => setMobileMenu(false)}>
              <a onClick={() => setMobileMenu(false)}>Contacto</a>
            </Link>
          </div>
        ) : (
          ''
        )
      }
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
