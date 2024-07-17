import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import desert from './db/desert.json'
import styles from '../css/Details.module.css'

function DesertDetails () {
    
    const { id } = useParams();
    const [desertDetails, setDesertDetails] = useState(null);

    useEffect(() => {
        fetch({desert})
            .then(response => {
                if (response.statusText == 'No Content') {
                    console.log('No Content')
                    return;
                }

                return response;
            })
            .then(result => setDesertDetails(result));
    }, [id]);

      
    
    return (
        <div className={styles.detailsStyle}>
            <h4>{desert[id - 1].type}</h4>
            <h1>{desert[id - 1].name}</h1>
            <img src={desert[id - 1].image} alt="" />
            <h3>INGREDIENTS</h3>
            <ul>
                {desert[id - 1].ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>HOW TO MAKE</h3>
            <p>{desert[id - 1].howTo}</p>
        </div>
    )
}

export default DesertDetails