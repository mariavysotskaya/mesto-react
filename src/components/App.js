import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  };

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  return (
    <div className="App">
      <div className="page__container">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
        <Footer />
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input
            required
            type="url"
            className="popup__input-fld"
            id="avatar-link"
            name="avatar"
            placeholder="Ссылка на картинку" />
          <span id="avatar-link-error" className="popup__error" />
          <button type="submit" className="popup__save-btn button">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input
            required
            type="text"
            minLength="2"
            maxLength="40"
            className="popup__input-fld popup__input-fld_type_name"
            id="name"
            name="name"
            placeholder="Введите имя?" />
          <span id="name-error" className="popup__error" />
          <input
            required
            type="text"
            minLength="2"
            maxLength="200"
            className="popup__input-fld popup__input-fld_type_job"
            id="job"
            name="about"
            placeholder="Введите род занятий" />
          <span id="job-error" className="popup__error" />
          <button type="submit" className="popup__save-btn button">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm name="card-adding" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input
            required
            type="text"
            minLength="2"
            maxLength="30"
            className="popup__input-fld"
            id="image-name"
            name="image-name"
            placeholder="Название" />
          <span id="image-name-error" className="popup__error" />
          <input
            required
            type="url"
            className="popup__input-fld"
            id="image-link"
            name="image-link"
            placeholder="Ссылка на картинку" />
          <span id="image-link-error" className="popup__error" />
          <button type="submit" className="popup__save-btn button">Создать</button>
        </PopupWithForm>
        <PopupWithForm name="confirm" title="Вы уверены?">
          <button type="button" className="popup__save-btn button">Да</button>
        </PopupWithForm>
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>
      </div>
    </div>
  );
};