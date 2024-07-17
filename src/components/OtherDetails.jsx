import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import other from './db/other.json'
import styles from '../css/Details.module.css'

function OtherDetails () {
    
    const { id } = useParams();
    const [otherDetails, setOtherDetails] = useState(null);

    useEffect(() => {
        fetch({other})
            .then(response => {
                if (response.statusText == 'No Content') {
                    console.log('No Content')
                    return;
                }

                return response;
            })
            .then(result => setOtherDetails(result));
    }, [id]);

      
    
    return (
        <div className={styles.detailsStyle}>
            <h4>{other[id - 1].type}</h4>
            <h1>{other[id - 1].name}</h1>
            <img src={other[id - 1].image} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {other[id - 1].ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{other[id - 1].howTo}</p>
        </div>
    )
}

export default OtherDetails