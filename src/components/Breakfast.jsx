import breakfast from './db/breakfast.json'
import Receipt from './Receipt'

function Breakfast () {

    
    return (
      <div style={{backgroundColor: "gray"}}>
        <h1 >Breakfast</h1>
        <hr />
        <Receipt  collection = {breakfast} />
      </div>
    )

}

export default Breakfast

