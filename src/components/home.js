import { Link } from 'react-router-dom';

const Home = () => (
  <div className="homeContainer">
    <div className="banner">Game Of Thrones Characters</div>
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
