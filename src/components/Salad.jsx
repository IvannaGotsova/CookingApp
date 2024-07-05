import salad from './db/salad.json'
import Receipt from './Receipt'
import styles from './Receipt.module.css'

function Salad () {

    
    return (
      <div style={{backgroundColor: "gray"}}>
        <h1>Salad</h1>
        <hr />
        <Receipt collection = {salad}/>
      </div>
    )

}

export default Salad