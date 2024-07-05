import dinner from './db/dinner.json'
import Receipt from './Receipt'
import styles from '../css/Receipt.module.css'

function Dinner () {

    
    return (
      <div className={styles.dinnerStyle}>
        <h1>Dinner</h1>
        <hr />
        <Receipt collection = {dinner}/>
      </div>
    )

}

export default Dinner