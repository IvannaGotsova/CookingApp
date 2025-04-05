import { useParams } from 'react-router-dom';
import salad from './db/salad.json'
import styles from '../css/Details.module.css'
import picture from '../assets/Picture.jpg'


function SaladDetails () {

    const { id } = useParams();
    
    const saladItem = salad.find(item => item.id === id);

    if (!saladItem) {
        return <div>No Salad found!</div>;
    }
    return (
        <div className={styles.detailsStyle}>
            <h4>{saladItem.type}</h4>
            <h1>{saladItem.name}</h1>
            <img src={picture} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {saladItem.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{saladItem.howTo}</p>
        </div>
    )

}

export default SaladDetails