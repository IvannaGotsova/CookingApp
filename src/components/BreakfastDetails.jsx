import { useParams } from 'react-router-dom';
import breakfast from './db/breakfast.json'
import styles from '../css/Details.module.css'
import picture from '../assets/Picture.jpg'


function BreakfastDetails () {

    const { id } = useParams();
    
    const breakfastItem = breakfast.find(item => item.id === id);

    if (!breakfastItem) {
        return <div>No Breakfast found!</div>;
    }
    return (
        <div className={styles.detailsStyle}>
            <h4>{breakfastItem.type}</h4>
            <h1>{breakfastItem.name}</h1>
            <img src={picture} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {breakfastItem.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{breakfastItem.howTo}</p>
        </div>
    )

}

export default BreakfastDetails