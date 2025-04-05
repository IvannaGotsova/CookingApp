import { useParams } from 'react-router-dom';
import soup from './db/soup.json'
import styles from '../css/Details.module.css'
import picture from '../assets/Picture.jpg'


function SoupDetails () {

    const { id } = useParams();
    
    const soupItem = soup.find(item => item.id === id);

    if (!soupItem) {
        return <div>No Soup found!</div>;
    }
    return (
        <div className={styles.detailsStyle}>
            <h4>{soupItem.type}</h4>
            <h1>{soupItem.name}</h1>
            <img src={picture} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {soupItem.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{soupItem.howTo}</p>
        </div>
    )

}

export default SoupDetails