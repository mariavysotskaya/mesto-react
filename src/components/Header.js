import logo from '../images/header/logo.svg';

export default function Header() {
  return (
    <div className="header">
      <a className="link" href="#"><img className="header__logo" src={logo} alt="Логотип" /></a>
    </div>
  )
}