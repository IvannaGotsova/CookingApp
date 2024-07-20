import styles from '../css/Body.module.css'
import { Link } from 'react-router-dom';

function Navigation () {

    return (
        <>
            <div className={styles.displayStyle}>
                <ul className={styles.removedBullets}>
                    <li><Link to="/">Home  </Link></li> 
                    <li><Link to="Breakfast">Breakfast  </Link></li>
                    <li><Link to="Lunch">Lunch  </Link></li>
                    <li><Link to="Dinner">Dinner  </Link></li>
                    <li><Link to="Salad">Salad  </Link></li>
                    <li><Link to="Soup">Soup  </Link></li>
                    <li><Link to="Desert">Desert  </Link></li>
                    <li><Link to="Other">Other  </Link></li>
                </ul>                
            </div>
        </>
    )
}

export default Navigation