import dinner from './db/dinner.json'
import Receipt from './Receipt'

function Dinner () {

    
    return (
      <div style={{backgroundColor: "gray"}}>
        <h1>Dinner</h1>
        <hr />
        <Receipt collection = {dinner}/>
      </div>
    )

}

export default Dinner