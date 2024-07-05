import soup from './db/soup.json'
import Receipt from './Receipt'
import styles from '../css/Receipt.module.css'

function Soup () {

    
    return (
      <div className={styles.soupStyle}>
        <h1>Soup</h1>
        <hr />
        <Receipt collection = {soup}/>
      </div>
    )

}

export default Soup