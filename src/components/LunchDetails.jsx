import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import lunch from './db/lunch.json'
import styles from '../css/Details.module.css'

function LunchDetails () {
    
    const { id } = useParams();
    const [lunchDetails, setLunchDetails] = useState(null);

    useEffect(() => {
        fetch({lunch})
            .then(response => {
                if (response.statusText == 'No Content') {
                    console.log('No Content')
                    return;
                }

                return response;
            })
            .then(result => setLunchDetails(result));
    }, [id]);

      
    
    return (
        <div className={styles.detailsStyle}>
            <h4>{lunch[id - 1].type}</h4>
            <h1>{lunch[id - 1].name}</h1>
            <img src={lunch[id - 1].image} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {lunch[id - 1].ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{lunch[id - 1].howTo}</p>
        </div>
    )
}

export default LunchDetails