import { useParams } from 'react-router-dom';
import other from './db/other.json'
import styles from '../css/Details.module.css'
import picture from '../assets/Picture.jpg'


function OtherDetails () {

    const { id } = useParams();
    
    const otherItem = other.find(item => item.id === id);

    if (!otherItem) {
        return <div>No Other found!</div>;
    }
    return (
        <div className={styles.detailsStyle}>
            <h4>{otherItem.type}</h4>
            <h1>{otherItem.name}</h1>
            <img src={picture} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {otherItem.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{otherItem.howTo}</p>
        </div>
    )

}

export default OtherDetails