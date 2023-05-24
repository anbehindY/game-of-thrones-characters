import { Link } from 'react-router-dom';
import { FaSearch, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import style from '../styles/home.module.css';
import { getData } from '../redux/Home/homeSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const families = useSelector((state) => state.characters.families);
  const characters = useSelector((state) => state.characters.characters);
  const characterCountByFamily = (family) => characters
    .filter((character) => character.family === family).length;

  return (
    <div className="homeContainer">
      <div className={style.banner} />
      <div className={style.searchBar}>
        <FaSearch color="#fff" />
        <input
          type="text"
          placeholder="Search family"
          className={style.searchInput}
        />
      </div>
      <div className={style.cardsContainer}>
        {families.map((family) => (
          <div key={family} className={style.card}>
            <div className={style.wrapper}>
              <Link className={style.goArrow} to={`/details/${family.family}`}>
                <FaRegArrowAltCircleRight fontSize="1.5rem" color="#fff" />
              </Link>
              <p className={style.text}>
                {family}
                <br />
                <span className={style.span}>
                  {characterCountByFamily(family)}
                  {' '}
                  characters
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
