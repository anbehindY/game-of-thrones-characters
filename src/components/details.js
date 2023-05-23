import { FaSearch } from 'react-icons/fa';
import style from '../styles/details.module.css';
import styles from '../styles/home.module.css';

const Details = () => (
  <div className={style.detailsContainer}>
    <div className={styles.banner} />
    <div className={styles.searchBar}>
      <FaSearch color="#fff" />
      <input type="text" placeholder="Search character" className={styles.searchInput} />
    </div>
    <div className={style.charactersContainer}>
      <div className={style.characters}>
        <img src="" alt="character" />
        <p className={style.name}>Jon Snow</p>
        <p>King of the north</p>
      </div>
      <div className={style.characters}>
        <img src="" alt="character" />
        <p className={style.name}>Jon Snow</p>
        <p>King of the north</p>
      </div>
    </div>
  </div>
);

export default Details;
