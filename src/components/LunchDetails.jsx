import { useParams } from 'react-router-dom';
import lunch from './db/lunch.json'
import styles from '../css/Details.module.css'
import picture from '../assets/Picture.jpg'


function LunchDetails () {

    const { id } = useParams();
    
    const lunchItem = lunch.find(item => item.id === id);

    if (!lunchItem) {
        return <div>No Lunch found!</div>;
    }
    return (
        <div className={styles.detailsStyle}>
            <h4>{lunchItem.type}</h4>
            <h1>{lunchItem.name}</h1>
            <img src={picture} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {lunchItem.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{lunchItem.howTo}</p>
        </div>
    )

}

export default LunchDetails