import {useState} from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import {registerLocale} from 'react-datepicker';
import es from 'date-fns/locale/es';

import styles from '../../styles/Home.module.css';
import reservasStyle from '../../styles/Reservas.module.css';
import containerStyle from '../../styles/Container.module.css';
import 'react-datepicker/dist/react-datepicker.css';

import {FaAngleDown, FaAngleUp} from 'react-icons/fa';

export default function Reservas() {

  registerLocale('es', es)

  const [startDateGD, setStartDateGD] = useState(new Date());
  const [startDateRC, setStartDateRC] = useState(new Date());
  const [endDateRC, setEndDateRC] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDateRC(start);
    setEndDateRC(end);
  };

  const [showGD, setShowGD] = useState(false);
  const [showRC, setShowRC] = useState(false);

  return (
    <div className={reservasStyle.bg}>
        <Head>
          <title>Villa Ladridos 🐾</title>
          <meta name="description" content="Generated by create next app"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
      <div className={containerStyle.container}>
        <h1 className={reservasStyle.title}>RESERVAS</h1>
        <main className={styles.main}>
          <div
            className={reservasStyle.accordion__guarderia}
          >
            <div
              className={reservasStyle.accordion__header}
              onClick={() => {
                setShowGD(!showGD);
                setShowRC(false);
              }}
            >
              <h2>Guardería de día</h2>{showGD ? <FaAngleUp/> : <FaAngleDown/>}
            </div>
            {
              showGD
                ?
                <div className={reservasStyle.form}>
                  <DatePicker
                    selected={startDateGD}
                    onChange={(date) => setStartDateGD(date)}
                    startDate={startDateGD}
                    locale="es"
                    calendarStartDay={1}
                    inline
                  />
                  <form>
                    <input type="text" placeholder="Nombre"/>
                    <input type="email" placeholder="Email"/>
                    <input type="phone" placeholder="Teléfono"/>
                    <label htmlFor="num">Número de peludos</label>
                    <input type="number" id="num" min={1}/>
                    <button type="submit" className={reservasStyle.button}>Reservar</button>
                  </form>
                </div>
                : ""
            }
          </div>
          <div
            className={reservasStyle.accordion__residencia}
            onClick={() => {
              setShowRC(!showRC);
              setShowGD(false);
            }}
          >
            <div className={reservasStyle.accordion__header}>
              <h2>Residencia canina</h2>{showRC ? <FaAngleUp/> : <FaAngleDown/>}
            </div>
            {
              showRC
                ?
                <div  className={reservasStyle.form}>
                  <DatePicker
                    selected={startDateRC}
                    onChange={onChange}
                    startDate={startDateRC}
                    endDate={endDateRC}
                    locale="es"
                    calendarStartDay={1}
                    selectsRange
                    selectsDisabledDaysInRange
                    inline
                  />
                  <form>
                    <input type="text" placeholder="Nombre"/>
                    <input type="email" placeholder="Email"/>
                    <input type="phone" placeholder="Teléfono"/>
                    <label htmlFor="num">Número de peludos</label>
                    <input type="number" id="num" min={1}/>
                    <button type="submit" className={reservasStyle.button}>Reservar</button>
                  </form>
                </div>

                : ""
            }

          </div>
        </main>
      </div>
    </div>
  )
}
