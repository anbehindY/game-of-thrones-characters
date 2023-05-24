import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import style from '../styles/details.module.css';
import styles from '../styles/home.module.css';

const Details = () => {
  const { family } = useParams();
  const characters = useSelector((state) => state.characters.characters);
  const filteredCharacters = characters.filter((character) => character.family === family);
  return (
    <div className={style.detailsContainer}>
      <div className={styles.banner} />
      <div className={styles.searchBar}>
        <p className={style.info}>Characters by their title</p>
      </div>
      <div className={style.charactersContainer}>
        { filteredCharacters.map((character) => (
          <div className={style.characters} key={character.id}>
            <img className={style.img} src={character.imageUrl} alt={character.image} />
            <p className={style.name}>{character.fullName}</p>
            <p className={style.title}>{character.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
