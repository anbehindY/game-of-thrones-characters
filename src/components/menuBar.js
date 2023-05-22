import { FaCog } from 'react-icons/fa';
import style from '../styles/menuBar.module.css';
import logo from '../images/GOTlogo.png';

const MenuBar = () => (
  <div className={style.menuContainer}>
    <img src={logo} alt="logo" className={style.logo} />
    <div className={style.title}>Game Of Thrones Family</div>
    <div className="settings"><FaCog color="white" fontSize="1.5em" /></div>
  </div>
);

export default MenuBar;
