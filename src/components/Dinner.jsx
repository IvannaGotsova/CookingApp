import dinner from './db/dinner.json'
import Receipt from './Receipt'

function Dinner () {

    
    return (
        <>
        <h1>Dinner</h1>
        <hr />
        <Receipt collection = {dinner}/>
      </>
    )

}

export default Dinner