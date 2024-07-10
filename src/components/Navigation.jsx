import styles from '../css/Body.module.css'

function Navigation () {

    return (
        <>
            <div className={styles.displayStyle}>
                <ul className={styles.removedBullets}>
                    <li><a href="/">Home  </a></li> 
                    <li><a href="Breakfast">Breakfast  </a></li>
                    <li><a href="Lunch">Lunch  </a></li>
                    <li><a href="Dinner">Dinner  </a></li>
                    <li><a href="Salad">Salad  </a></li>
                    <li><a href="Soup">Soup  </a></li>
                    <li><a href="Desert">Desert  </a></li>
                    <li><a href="Other">Other  </a></li>
                </ul>                
            </div>
        </>
    )
}

export default Navigation