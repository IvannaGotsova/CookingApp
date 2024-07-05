import breakfast from './db/breakfast.json'
import Receipt from './Receipt'
import styles from './Receipt.module.css'

function Breakfast () {

    
    return (
      <div className={styles.breakfastStyle}>
        <h1 >Breakfast</h1>
        <hr />
        <Receipt  collection = {breakfast} />
      </div>
    )

}

export default Breakfast

