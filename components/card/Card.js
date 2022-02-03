import cardStyle from '../../styles/Card.module.css'

export default function Card(service) {

  const {name, img, description, price} = service.service;

  return(
    <div className={cardStyle.card}>
      <div className={cardStyle.card__header}>
        <h1>{name}</h1>
        <div className={cardStyle.card__icon}>{img}</div>
      </div>
      <div className={cardStyle.card__body}>
        <p>
          {description}
        </p>
      </div>
      <div className={cardStyle.card__footer}>
        <p>{price}</p>
      </div>
    </div>
  )
}
