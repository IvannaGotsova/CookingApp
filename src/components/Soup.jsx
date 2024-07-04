import soup from './db/soup.json'
import Receipt from './Receipt'

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