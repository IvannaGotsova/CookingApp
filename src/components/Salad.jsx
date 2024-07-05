import salad from './db/salad.json'
import Receipt from './Receipt'
import styles from '../css/Receipt.module.css'

function Salad () {

    
    return (
      <div className={styles.saladStyle}>
        <h1>Salad</h1>
        <hr />
        <Receipt collection = {salad}/>
      </div>
    )

}

export default Salad