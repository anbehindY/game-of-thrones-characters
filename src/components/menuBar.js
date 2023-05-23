import { FaCog, FaMicrophone } from 'react-icons/fa';
import style from '../styles/menuBar.module.css';
import logo from '../images/GOTlogo.png';

const MenuBar = () => (
  <div className={style.menuContainer}>
    <img src={logo} alt="logo" className={style.logo} />
    <div className={style.title}>Game Of Thrones Family</div>
    <FaMicrophone color="white" fontSize="1.2em" />
    <FaCog color="white" fontSize="1.2em" />
  </div>
);

export default MenuBar;
