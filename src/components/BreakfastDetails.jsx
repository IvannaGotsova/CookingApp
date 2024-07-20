import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import breakfast from './db/breakfast.json'
import styles from '../css/Details.module.css'
import picture from '../assets/Picture.jpg'


function BreakfastDetails () {

    const { id } = useParams();
    const [breakfastDetails, setBreakfastDetails] = useState(null);

    useEffect(() => {
        fetch({breakfast})
            .then(response => {
                if (response.statusText == 'No Content') {
                    console.log('No Content')
                    return;
                }

                return response;
            })
            .then(result => setBreakfastDetails(result));
    }, [id]);

      
    
    return (
        <div className={styles.detailsStyle}>
            <h4>{breakfast[id - 1].type}</h4>
            <h1>{breakfast[id - 1].name}</h1>
            <img src={picture} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {breakfast[id - 1].ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{breakfast[id - 1].howTo}</p>
        </div>
    )

}

export default BreakfastDetails