import { Link } from 'react-router-dom';
import { FaSearch, FaRegArrowAltCircleRight } from 'react-icons/fa';
import style from '../styles/home.module.css';

const Home = () => (
  <div className="homeContainer">
    <div className={style.banner} />
    <div className={style.searchBar}>
      <FaSearch color="#fff" />
      <input type="text" placeholder="Search family" className={style.searchInput} />
    </div>
    <div className={style.cardsContainer}>
      <div className={style.card}>
        <div className={style.wrapper}>
          <Link className={style.goArrow} to="details"><FaRegArrowAltCircleRight fontSize="1.5rem" color="#fff" /></Link>
          <p className={style.text}>
            House Stark
            <br />
            <span className={style.span}> 24 characters</span>
          </p>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.wrapper}>
          <Link className={style.goArrow} to="details"><FaRegArrowAltCircleRight fontSize="1.5rem" color="#fff" /></Link>
          <p className={style.text}>
            House Stark
            <br />
            <span className={style.span}> 24 characters</span>
          </p>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.wrapper}>
          <Link className={style.goArrow} to="details"><FaRegArrowAltCircleRight fontSize="1.5rem" color="#fff" /></Link>
          <p className={style.text}>
            House Stark
            <br />
            <span className={style.span}> 24 characters</span>
          </p>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.wrapper}>
          <Link className={style.goArrow} to="details"><FaRegArrowAltCircleRight fontSize="1.5rem" color="#fff" /></Link>
          <p className={style.text}>
            House Stark
            <br />
            <span className={style.span}> 24 characters</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
