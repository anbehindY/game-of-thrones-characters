import { Link } from 'react-router-dom';
import style from '../styles/home.module.css';

const Home = () => (
  <div className="homeContainer">
    <div className={style.banner} />
    <div className="searchBar">
      <div className="searchLogo">Search</div>
    </div>
    <div className="cardsContainer">
      <div className="card">
        Stark
        <Link to="details">arrow</Link>
      </div>
      <div className="card">Baratheon</div>
      <div className="card">Lannister</div>
      <div className="card">Tyrell</div>
      <div className="card">Greyjoy</div>
    </div>
  </div>
);

export default Home;
