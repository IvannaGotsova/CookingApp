import desert from './db/desert.json'
import Receipt from './Receipt'
import styles from '../css/Receipt.module.css'

function Desert () {

    
    return (
      <div className={styles.desertStyle}>
        <h1>Desert</h1>
        <hr />
        <Receipt collection = {desert}/>
      </div>
    )

}

export default Desert