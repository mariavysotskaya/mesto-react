export default function Card(props) {
  const handleClick = () => {
    props.onCardClick(props.card);
  };
  
  return (
    <article className="card">
      <img className="card__image" alt="Изображение" src={props.card.link} onClick={handleClick}/>
      <button type="button" className="card__delete-btn button" />
      <div className="card__container">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like-btn button" />
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}