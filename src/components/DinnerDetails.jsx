import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dinner from './db/dinner.json'
import styles from '../css/Details.module.css'

function DinnerDetails () {
    
    const { id } = useParams();
    const [dinnerDetails, setDinnerDetails] = useState(null);

    useEffect(() => {
        fetch({dinner})
            .then(response => {
                if (response.statusText == 'No Content') {
                    console.log('No Content')
                    return;
                }

                return response;
            })
            .then(result => setDinnerDetails(result));
    }, [id]);

      
    
    return (
        <div className={styles.detailsStyle}>
            <h4>{dinner[id - 1].type}</h4>
            <h1>{dinner[id - 1].name}</h1>
            <img src={dinner[id - 1].image} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {dinner[id - 1].ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{dinner[id - 1].howTo}</p>
        </div>
    )
}

export default DinnerDetails