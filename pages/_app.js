import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css';
import navStyles from '../styles/Nav.module.css';
import containerStyle from '../styles/Container.module.css';
import footerStyle from '../styles/Footer.module.css';

function MyApp({Component, pageProps}) {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className={containerStyle.nav__container}>
        <div className={navStyles.nav}>
          <div className={navStyles.nav__box}>
            <Link href="/"><Image src="/img/logo.png" alt="Villa Ladridos" height={'58px'} width={'56px'} /></Link>
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
      <footer className={footerStyle.footer}>
        <div className={containerStyle.container}>
          <div className={footerStyle.footer__grid}>
            <div>
              <h1>Villa Ladridos</h1>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MyApp
