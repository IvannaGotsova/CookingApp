import other from './db/other.json'
import Receipt from './Receipt'
import styles from './Receipt.module.css'

function Other () {

    
    return (
      <div style={{backgroundColor: "gray"}}>
        <h1>Others</h1>
        <hr />
        <Receipt collection = {other}/>
      </div>
    )

}

export default Other