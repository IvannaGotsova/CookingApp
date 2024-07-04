import breakfast from './db/breakfast.json'
import Receipt from './Receipt'

function Breakfast () {

    
    return (
      <>
        <h1 >Breakfast</h1>
        <hr />
        <Receipt  collection = {breakfast} />
      </>
    )

}

export default Breakfast


