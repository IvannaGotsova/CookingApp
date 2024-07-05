import lunch from './db/lunch.json'
import Receipt from './Receipt'
import styles from './Receipt.module.css'

function Lunch () {

    
    return (
      <div style={{backgroundColor: "gray"}}>
        <h1>Lunch</h1>
        <hr />
        <Receipt collection = {lunch}/>
      </div>
    )

}

export default Lunch