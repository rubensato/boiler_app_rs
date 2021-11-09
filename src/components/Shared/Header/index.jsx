import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}><p>CaldAr</p></div>
      <div className={style.title}><p>Boilers</p></div>
    </div>
  );
}

export default Header;
