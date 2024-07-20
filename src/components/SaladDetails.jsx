import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import salad from './db/salad.json'
import styles from '../css/Details.module.css'
import picture from '../assets/Picture.jpg'

 function SaladDetails () {
    
    const { id } = useParams();
    const [saladDetails, setSaladDetails] = useState(null);

    useEffect(() => {
        fetch({salad})
            .then(response => {
                if (response.statusText == 'No Content') {
                    console.log('No Content')
                    return;
                }

                return response;
            })
            .then(result => setSaladDetails(result));
    }, [id]);

      
    
    return (
        <div className={styles.detailsStyle}>
            <h4>{salad[id - 1].type}</h4>
            <h1>{salad[id - 1].name}</h1>
            <img src={picture} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {salad[id - 1].ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{salad[id - 1].howTo}</p>
        </div>
    )
}

export default SaladDetails