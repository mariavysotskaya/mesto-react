export default function PopupWithForm(props) {
  let openedPopupClass = props.isOpen && 'popup_open';
  return (
    <article className={`popup popup_type_${props.name} ${openedPopupClass}`}>
      <div className="popup__container">
        <form className="popup__form" name="form" noValidate>
          <h2 className="popup__name">{props.title}</h2>
          {props.children}
        </form>
        <button type="button" className="popup__close-btn button" onClick={props.onClose}/>
      </div>
    </article>
  )
}