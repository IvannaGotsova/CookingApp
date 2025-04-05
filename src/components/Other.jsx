import other from './db/other.json'
import Receipt from './Receipt'
import styles from '../css/Receipt.module.css'

function Other () {

    
    return (
      <div className={styles.otherStyle}>
        <h1>Other</h1>
        <hr />
        <Receipt collection = {other}/>
      </div>
    )

}

export default Other