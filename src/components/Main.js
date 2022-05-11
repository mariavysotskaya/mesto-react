import { useEffect, useState } from 'react';
import api from '../utils/api';
import Card from './Card';

export default function Main(props) {
  const [userName, setUserName] = useState('Загрузка...');
  const [userDescription, setUserDescription] = useState('Загрузка...');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
    .then(([userData, cardsData]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(cardsData);
    })
    .catch((err) => alert('Не удалось получить данные'));
  }, []);

  return (
    <div className="content">
      <section className="profile content__section content__section_mobile">
        <a className="profile__avatar-edit-btn" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Аватар" src={userAvatar} />
        </a>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-btn button" onClick={props.onEditProfile} />
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-btn button" onClick={props.onAddPlace} />
      </section>
      <section className="cards content__section content__section_mobile">
        {cards.map(item => <Card card={item} key={item._id} onCardClick={props.onCardClick} />)}
      </section>
    </div>
  )
}