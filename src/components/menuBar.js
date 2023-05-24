import { FaCog, FaMicrophone, FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../styles/menuBar.module.css';
import logo from '../images/GOTlogo.png';
import { updateCurrentPage } from '../redux/character/characterSlice';

const MenuBar = () => {
  const currentPage = useSelector((state) => state.characters.currentPage);
  const dispatch = useDispatch();
  return (
    <div className={style.menuContainer}>
      {currentPage === 'Home' && <img src={logo} alt="logo" className={style.logo} />}
      {currentPage === 'Details' && <Link to="/"><FaArrowLeft color="#fff" onClick={() => dispatch(updateCurrentPage('Home'))} /></Link>}
      <div className={style.title}>Game Of Thrones Family</div>
      <FaMicrophone color="white" fontSize="1.2em" />
      <FaCog color="white" fontSize="1.2em" />
    </div>
  );
};

export default MenuBar;
