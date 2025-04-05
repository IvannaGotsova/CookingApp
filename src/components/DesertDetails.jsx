import { useParams } from 'react-router-dom';
import desert from './db/desert.json'
import styles from '../css/Details.module.css'
import picture from '../assets/Picture.jpg'


function DesertDetails () {

    const { id } = useParams();
    
    const desertItem = desert.find(item => item.id === id);

    if (!desertItem) {
        return <div>No Desert found!</div>;
    }
    return (
        <div className={styles.detailsStyle}>
            <h4>{desertItem.type}</h4>
            <h1>{desertItem.name}</h1>
            <img src={picture} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {desertItem.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{desertItem.howTo}</p>
        </div>
    )

}

export default DesertDetails