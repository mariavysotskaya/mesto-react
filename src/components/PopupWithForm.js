export default function PopupWithForm(props) {
  let openedPopupClass = props.isOpen && 'popup_open';
  return (
    <article className={`popup popup_type_${props.name} ${openedPopupClass}`}>
      <div className="popup__container">
        <form className="popup__form" name="form" onSubmit={props.onSubmit}>
          <h2 className="popup__name">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__save-btn button">{props.buttonText}</button>
        </form>
        <button type="button" className="popup__close-btn button" onClick={props.onClose}/>
      </div>
    </article>
  )
}