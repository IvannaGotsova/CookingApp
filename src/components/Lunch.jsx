import lunch from './db/lunch.json'
import Receipt from './Receipt'
import styles from '../css/Receipt.module.css'

function Lunch () {

    
    return (
      <div className={styles.lunchStyle}>
        <h1>Lunch</h1>
        <hr />
        <Receipt collection = {lunch}/>
      </div>
    )

}

export default Lunch