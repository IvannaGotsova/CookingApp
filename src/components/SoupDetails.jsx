import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import soup from './db/soup.json'
import styles from '../css/Details.module.css'
import picture from '../assets/Picture.jpg'

function SoupDetails () {
    
    const { id } = useParams();
    const [soupDetails, setSoupDetails] = useState(null);

    useEffect(() => {
        fetch({soup})
            .then(response => {
                if (response.statusText == 'No Content') {
                    console.log('No Content')
                    return;
                }

                return response;
            })
            .then(result => setSoupDetails(result));
    }, [id]);

      
    
    return (
        <div className={styles.detailsStyle}>
            <h4>{soup[id - 1].type}</h4>
            <h1>{soup[id - 1].name}</h1>
            <img src={picture} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {soup[id - 1].ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{soup[id - 1].howTo}</p>
        </div>
    )
}
 
export default SoupDetails