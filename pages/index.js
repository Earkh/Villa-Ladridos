import Head from 'next/head'
import styles from '../styles/Home.module.css'
import containerStyle from '../styles/Container.module.css'
import Card from "../components/card/Card";
import {FaHotel, FaBath} from "react-icons/fa";
import {BiBone, BiTaxi} from "react-icons/bi";
import {FaPaw} from "react-icons/Fa";

export default function Home() {

  const services = [
    {
      name: "Residencia canina",
      img: <FaHotel/>,
      description: "Nos hacemos cargo de tu mascota el tiempo que haga falta para que puedas irte de viaje sin preocupaciones",
      price: "20€/Noche"
    },
    {
      name: "Guardería",
      img: <BiBone/>,
      description: "Deja a tu mascota en las mejores manos mientras trabajas o haces recados",
      price: "10€"
    },
    {
      name: "Baño",
      img: <FaBath/>,
      description: "Tu mascota más limpia y brillante que nunca!",
      price: "Desde 10€"
    },
    {
      name: "Transporte",
      img: <BiTaxi/>,
      description: "Contamos con un servicio de taxi canino por si no puedes traer o recoger a tu peludo",
      price: "Telde: 4€, LP: 7€, Resto: 12€"
    },
  ]


  return (
    <div>
      <Head>
        <title>Villa Ladridos 🐾</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className={styles.landing}>
        <h1>Tu peludito en las mejores manos</h1>
      </div>

      <div className={containerStyle.container}>
        <div>
          <div className={styles.main__welcome}>
            <FaPaw/>
            <FaPaw/>
            <FaPaw/>
            <FaPaw/>
            <FaPaw/>
            <h1>
              &nbsp;El Hotel para tu mascota&nbsp;
            </h1>
            <FaPaw/>
            <FaPaw/>
            <FaPaw/>
            <FaPaw/>
            <FaPaw/>
          </div>
          <div className={styles.main__presentation}>
            <h3>¿Tienes que viajar y no sabes con quién dejar a tu mejor amigo? ¿Tu peludito se queda en casa solo todo
              el
              día porque estás trabajando?</h3>
            <h3>¡Nosotras sabemos cómo ayudarte!</h3>
            <div className={styles.main__presentation__grid}>
              <div className={styles.main__presentation__text}>
                <p>
                  En Villa Ladridos contamos con un amplio jardín donde
                  pueden correr y jugar y además, <strong>no existen jaulas</strong>. Queremos que tu mascota se sienta
                  como
                  en
                  casa, por lo que
                  tendrán acceso libre por todas nuestras instalaciones, estando en su habitación únicamente para comer y
                  dormir.
                  Como nuestra mayor preocupación es el bienestar de nuestros clientes de 4 patas y sus dueños, ofrecemos
                  <strong> servicios webcam</strong> para que echarlo de menos no se haga tan difícil. Podrás acceder a
                  todas
                  nuestras cámaras web
                  desde cualquier lugar y en cualquier momento.
                </p>
                <p>
                  Villa Ladridos nace ante la necesidad que nos surge para encontrar un buen alojamiento donde dejar a
                  nuestras mascotas, una guardería con todas las comodidades y seguridades para que se sientan como en
                  casa
                  y disfruten de su estancia. Es muy importante para nosotros que tu perro este a gusto en nuestra
                  guardería, así como que tú te sientas cómodo y seguro dejándonos a tu mejor amigo. Es por ello que
                  tenemos
                  a disposición las cámaras web para tu mayor tranquilidad.
                </p>
              </div>
              <div className={styles.main__presentation__image__grid}>
                <div className={styles.main__presentation__image}>
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main__services}>
        <h1>Servicios</h1>
        <section className={`${styles.container} ${styles.services__container} ${containerStyle.container}`}>
          {
            services.map(service => <Card key={service.name} service={service}/>)
          }
        </section>
      </div>
      <div className={styles.main__footer__image}>
        &nbsp;
      </div>
    </div>

  )
}
