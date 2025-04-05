import { useParams } from 'react-router-dom';
import dinner from './db/dinner.json'
import styles from '../css/Details.module.css'
import picture from '../assets/Picture.jpg'


function DinnerDetails () {

    const { id } = useParams();
    
    const dinnerItem = dinner.find(item => item.id === id);

    if (!dinnerItem) {
        return <div>No Dinner found!</div>;
    }
    return (
        <div className={styles.detailsStyle}>
            <h4>{dinnerItem.type}</h4>
            <h1>{dinnerItem.name}</h1>
            <img src={picture} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {dinnerItem.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{dinnerItem.howTo}</p>
        </div>
    )

}

export default DinnerDetails