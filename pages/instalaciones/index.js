import Head from "next/head";
import {EmblaCarousel} from '../../components/carousel/Carousel';

import styles from '../../styles/Home.module.css';
import containerStyles from '../../styles/Container.module.css';
import instalacionesStyles from '../../styles/Instalaciones.module.css';

export default function Instalaciones() {
  const images = ["/img/slider1.png", "/img/slider2.png", "/img/slider3.png"]

  return (
    <div>
      <Head>
        <title>Villa Ladridos 🐾</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className={containerStyles.container}>
        <div className={styles.main__presentation__text}>
          <h1>Instalaciones</h1>
          <p>
            En Villa Ladridos contamos con unas amplias instalaciones donde tu mejor amigo puede correr y jugar.
          </p>
          <p>
            Nuestros espaciosos jardines cuentan con zonas de sombra y fuentes de agua para que tu mascota se sienta
            fresca
            en todo momento. Además para la seguridad de tu peludo, y tu tranquilidad, hemos incorporado cámaras para
            que puedas verla en cualquier momento.
          </p>
          <h3> Tu mascota será la que decida su rutina en todo momento. </h3>
          <p>
            Queremos que se sientan con la misma libertad que
            tienen en su casa y para ello dejamos que sean ellos los que decidan si salir a jugar o quedarse dentro
            durmiendo, siempre bajo la supervisión de nuestro personal.
          </p>
        </div>
      </div>
      <div className={instalacionesStyles.carousel__bg}>
        <div className={instalacionesStyles.carousel}>
          <EmblaCarousel images={images}/>
        </div>
      </div>
    </div>
  )
}
