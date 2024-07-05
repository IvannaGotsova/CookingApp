import desert from './db/desert.json'
import Receipt from './Receipt'
import styles from './Receipt.module.css'

function Desert () {

    
    return (
        <div style={{backgroundColor: "gray"}}>
        <h1>Desert</h1>
        <hr />
        <Receipt collection = {desert}/>
      </div>
    )

}

export default Desert