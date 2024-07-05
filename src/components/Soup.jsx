import soup from './db/soup.json'
import Receipt from './Receipt'
import styles from './Receipt.module.css'

function Soup () {

    
    return (
      <div style={{backgroundColor: "gray"}}>
        <h1>Soup</h1>
        <hr />
        <Receipt collection = {soup}/>
      </div>
    )

}

export default Soup